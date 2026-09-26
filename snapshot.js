// 学習用: リンク先の外部ページを隔離ヘッドレスブラウザで表示し、描画後のHTML + CSS/画像/フォントを保存する。
// スクリプトは除去（APIを叩いて予約などが走らないように）、フォームは送信不可にする。
const { chromium } = require("/Users/stork/poker-rakeback-1/node_modules/playwright-core");
const fs = require("fs"), path = require("path"), crypto = require("crypto");

const SITE = path.join(__dirname, "site");
const TARGETS = [
  "https://fitone.hacomono.jp/",
  "https://fitone.hacomono.jp/reserve/schedule/1/1/?trial=true",
  "https://fitone.hacomono.jp/contract/plan/?from=home",
  "https://fitone.hacomono.jp/mypage/",
  "https://fitone.notion.site/legal-information",
  "https://fitone-club.square.site/",
  "https://fitone-shibuya-booking.vercel.app/",
];
const SAVE_TYPES = new Set(["stylesheet", "image", "font", "media"]);

const strip = (u) => { const x = new URL(u); x.hash = ""; return x.href; };
function localFor(u, isDoc) {
  const x = new URL(u);
  let p = decodeURIComponent(x.pathname);
  if (isDoc) return `/_ext/${x.host}${p.replace(/\/?$/, "/")}index.html`;
  if (p.endsWith("/")) p += "index";
  if (x.search) { // ponytail: クエリ付きはハッシュを付けて別名保存
    const ext = path.extname(p), h = crypto.createHash("md5").update(x.search).digest("hex").slice(0, 8);
    p = p.slice(0, p.length - ext.length) + "__" + h + ext;
  }
  return `/_ext/${x.host}${p}`;
}

const saved = new Map(); // 絶対URL -> ローカルパス
for (const t of TARGETS) saved.set(strip(t), localFor(t, true)), saved.set(strip(t).split("?")[0], localFor(t, true));

function rewrite(text, baseUrl) {
  const fix = (ref) => {
    const raw = ref.replace(/&amp;/g, "&");
    if (/^(data:|blob:|#|mailto:|tel:|javascript:)/i.test(raw)) return ref;
    let abs; try { abs = strip(new URL(raw, baseUrl).href); } catch { return ref; }
    return saved.get(abs) || saved.get(abs.split("?")[0].replace(/([^/])$/, "$1")) || abs; // 未保存は本物の絶対URLへ
  };
  return text
    .replace(/(\s(?:src|href|poster|action)=)(["'])(.*?)\2/gi, (m, a, q, v) => a + q + fix(v) + q)
    .replace(/(\ssrcset=)(["'])(.*?)\2/gi, (m, a, q, v) =>
      a + q + v.split(",").map((s) => { const [u, ...r] = s.trim().split(/\s+/); return [fix(u), ...r].join(" "); }).join(", ") + q)
    .replace(/url\(\s*(["']?)([^"')]+)\1\s*\)/gi, (m, q, v) => `url(${q}${fix(v)}${q})`)
    .replace(/(@import\s+)(["'])(.*?)\2/gi, (m, a, q, v) => a + q + fix(v) + q);
}

(async () => {
  const browser = await chromium.launch({
    executablePath: "/Users/stork/Library/Caches/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-mac-arm64/chrome-headless-shell",
  });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: "ja-JP" });
  const css = []; // [url, text]
  const pages = []; // [url, html]

  for (const target of TARGETS) {
    const page = await ctx.newPage();
    page.on("response", async (res) => {
      const req = res.request();
      if (req.method() !== "GET" || !SAVE_TYPES.has(req.resourceType()) || res.status() !== 200) return;
      try {
        const body = await res.body(), url = strip(res.url()), lp = localFor(url, false);
        if (saved.has(url)) return;
        saved.set(url, lp);
        if (req.resourceType() === "stylesheet") css.push([url, body.toString("utf8")]);
        else { fs.mkdirSync(path.dirname(SITE + lp), { recursive: true }); fs.writeFileSync(SITE + lp, body); }
      } catch {}
    });
    try {
      await page.goto(target, { waitUntil: "load", timeout: 45000 });
      for (let y = 0; y < 15; y++) { await page.mouse.wheel(0, 900); await page.waitForTimeout(250); } // 遅延読み込み画像を出す
      await page.waitForTimeout(1500);
      const html = await page.evaluate(() => {
        document.querySelectorAll("script, link[rel=modulepreload], link[as=script], noscript").forEach((e) => e.remove());
        document.querySelectorAll("form").forEach((f) => f.setAttribute("onsubmit", "alert('ローカル再現です。送信しません');return false"));
        return "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
      });
      pages.push([page.url() === target ? target : target, html]);
      console.log("OK", target, "→", page.url());
    } catch (e) { console.log("NG", target, e.message.split("\n")[0]); }
    await page.close();
  }
  await browser.close();

  for (const [url, text] of css) { const lp = saved.get(url); fs.mkdirSync(path.dirname(SITE + lp), { recursive: true }); fs.writeFileSync(SITE + lp, rewrite(text, url)); }
  for (const [url, html] of pages) {
    const lp = localFor(url, true); fs.mkdirSync(path.dirname(SITE + lp), { recursive: true });
    fs.writeFileSync(SITE + lp, rewrite(html, url).replace("<head>", `<head><!-- 学習用ローカル再現: 元URL ${url} -->`));
  }
  console.log("saved", saved.size, "urls");
})();
