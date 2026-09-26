
(() => {
  const instagramUrl = "https://www.instagram.com/fitone.club/";
  const youtubeUrl = "https://www.youtube.com/@fitone-club";
  const assetVersion = "20260801-official-site-v13-membership-band-responsive";
  const bookingSignupUrl = "/_ext/fitone.hacomono.jp/contract/plan/index.html";
  const bookingTrialUrl = "/_ext/fitone.hacomono.jp/reserve/schedule/1/1/index.html";
  const contactApiUrl = "/api/contact" /* ローカル模擬API。本番送信先は fitone-shibuya-booking.vercel.app */;
  const googleMapsUrl = "https://www.google.com/maps/place/FITONE+SHIBUYA+%E2%9D%98+HYROX+TRAINING+CLUB/@35.6523576,139.7065602,17z/data=!4m14!1m7!3m6!1s0x60188b57b6827083:0xf273b5604e0c521!2sFITONE+SHIBUYA+%E2%9D%98+HYROX+TRAINING+CLUB!8m2!3d35.6523533!4d139.7091351!16s%2Fg%2F11zgrfp_7b!3m5!1s0x60188b57b6827083:0xf273b5604e0c521!8m2!3d35.6523533!4d139.7091351!16s%2Fg%2F11zgrfp_7b!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";
  const pageMeta = {
    "/": [
      "FITONE SHIBUYA | サンプル",
      "サンプルの文章です。",
      "/",
    ],
    "/trial/": [
      "サンプル | FITONE SHIBUYA",
      "サンプルの文章です。",
      "/trial/",
    ],
    "/access/": [
      "サンプル | FITONE SHIBUYA",
      "サンプルの文章です。",
      "/access/",
    ],
	    "/community/": [
	      "サンプル | FITONE SHIBUYA",
	      "サンプルの文章です。",
	      "/community/",
	    ],
  };

  const legalLinks = [
    ["/privacy-policy/", "プライバシーポリシー"],
    ["/terms/", "利用規約"],
    ["/cancellation-policy/", "キャンセル・返金ポリシー"],
    ["/_ext/fitone.notion.site/legal-information/index.html", "特定商取引法に基づく表記"],
  ];

  const fitCheckRecommendations = [
    {
      number: "01",
      label: "サンプルの選択肢",
      title: "サンプル見出し",
      body: "サンプルの文章です。",
      recommendation: "サンプル",
    },
    {
      number: "02",
      label: "サンプルの選択肢",
      title: "サンプル見出し",
      body: "サンプルの文章です。",
      recommendation: "サンプル",
    },
    {
      number: "03",
      label: "サンプルの選択肢",
      title: "サンプル見出し",
      body: "サンプルの文章です。",
      recommendation: "サンプル",
    },
    {
      number: "04",
      label: "サンプルの選択肢",
      title: "サンプル見出し",
      body: "サンプルの文章です。",
      recommendation: "サンプル",
    },
    {
      number: "05",
      label: "サンプルの選択肢",
      title: "サンプル見出し",
      body: "サンプルの文章です。",
      recommendation: "サンプル",
    },
    {
      number: "06",
      label: "サンプルの選択肢",
      title: "サンプル見出し",
      body: "サンプルの文章です。",
      recommendation: "サンプル",
    },
  ];

  const dayDetails = [
    ["mon", "月", [["7:00-7:45", "HYROX"], ["8:00-8:45", "HYROX"], ["9:00-10:00", "OPEN GYM"], ["10:30-11:15", "HYROX"], ["18:00-18:45", "HYROX"], ["19:00-19:45", "HYROX"], ["20:15-21:00", "HYROX"]]],
    ["tue", "火", [["7:00-7:45", "HYROX"], ["8:00-8:45", "HYROX"], ["9:00-10:00", "OPEN GYM"], ["10:30-11:15", "OPEN GYM"], ["18:00-18:45", "HYROX"], ["19:00-19:45", "HYROX"], ["20:15-21:00", "HYROX"]]],
    ["wed", "水", [["7:00-8:00", "RUN CLUB"], ["8:00-9:30", "OPEN GYM"], ["9:30-11:00", "OPEN GYM"]]],
    ["thu", "木", [["7:00-7:45", "HYROX"], ["8:00-8:45", "HYROX"], ["9:00-10:00", "OPEN GYM"], ["10:30-11:15", "OPEN GYM"], ["18:00-18:45", "HYROX"], ["19:00-19:45", "HYROX"], ["20:15-21:00", "HYROX"]]],
    ["fri", "金", [["7:00-7:45", "HYROX"], ["8:00-8:45", "HYROX"], ["9:00-10:00", "OPEN GYM"], ["10:30-11:15", "HYROX"], ["18:00-18:45", "HYROX"], ["19:00-19:45", "HYROX"], ["20:15-21:00", "HYROX"]]],
    ["sat", "土", [["9:00-10:00", "HYROX"], ["10:15-11:15", "HYROX"], ["11:30-12:30", "HYROX"]]],
    ["sun", "日", [["9:00-10:00", "HYROX"], ["10:15-11:15", "HYROX"], ["11:30-12:30", "HYROX"]]]
  ];
  const dayEnglish = { mon: "MON", tue: "TUE", wed: "WED", thu: "THU", fri: "FRI", sat: "SAT", sun: "SUN" };

  const placeholderVideoSrc = "/videos/placeholder.mp4";
  const videoStartupTimeoutMs = 8000;
  const videoStallTimeoutMs = 8000;
  const videoPlaybackTimers = new WeakMap();
  const compatibilityVideoSources = {
    "/videos/sled.mp4": "/videos/compat/sled.mp4",
    "/videos/run.mp4": "/videos/compat/run.mp4",
    "/videos/rope.mp4": "/videos/compat/rope.mp4",
  };
  const videoSourceByPoster = {
    "/posters/facility/facility-hands-up-optimized.jpg": "/videos/floor.mp4",
    "/posters/facility/facility-flag-optimized.jpg": "/videos/facility-coaching-area.mp4",
    "/posters/facility/facility-event-members-optimized.jpg": "/videos/facility-hyrox-stations.mp4",
    "/posters/facility/facility-run-group-optimized.jpg": "/videos/facility-class-in-action.mp4",
    "/posters/program-coach-lesson.jpg": "/videos/coaching.mp4",
    "/posters/program-open-gym.jpg": "/videos/program-open-gym.mp4",
    "/posters/program-open-gym-wallball.jpg": "/videos/program-open-gym.mp4",
    "/posters/coaches/jong-tae-se-optimized.jpg": "/videos/coaches/Jong-tae-se.mp4",
    "/posters/coaches/shota-yamaguchi-optimized.jpg": "/videos/coaches/shota-yamaguchi.mp4",
  };

  function stripAssetVersion(url) {
    if (!url) return "";
    try {
      const parsed = new URL(url, location.origin);
      if (parsed.origin !== location.origin) return url;
      parsed.searchParams.delete("v");
      return parsed.pathname + parsed.search + parsed.hash;
    } catch {
      return url.replace(/([?&])v=[^&#]*/g, "").replace(/[?&]$/, "");
    }
  }

  function canonicalVideoSource(url) {
    const cleanUrl = stripAssetVersion(url);
    return cleanUrl
      .replace(/^\/videos\/mobile\//, "/videos/")
      .replace(/\.webm(\?|#|$)/, ".mp4$1");
  }

  let webmSupport;
  function supportsWebMVideo() {
    if (typeof webmSupport === "boolean") return webmSupport;
    const probe = document.createElement("video");
    const support = probe.canPlayType && probe.canPlayType('video/webm; codecs="vp9"');
    webmSupport = Boolean(support && support !== "no");
    return webmSupport;
  }

  function supportsMp4Video(video) {
    if (!video?.canPlayType) return true;
    const support = video.canPlayType('video/mp4; codecs="avc1.42E01E"');
    return Boolean(support && support !== "no");
  }

  function shouldPreferMp4Video() {
    return true;
  }

  function selectedVideoSource(source, video) {
    let cleanSource = canonicalVideoSource(source);
    if (!cleanSource || cleanSource === placeholderVideoSrc) return cleanSource;
    if (video && video.dataset.productionUseCompat === "true") {
      return compatibilityVideoSources[cleanSource] || cleanSource;
    }
    if ((isMobileViewport() || prefersReducedData()) && cleanSource.startsWith("/videos/")) {
      cleanSource = cleanSource.replace("/videos/", "/videos/mobile/");
    }
    if (
      supportsWebMVideo() &&
      video &&
      (
        video.dataset.productionPreferWebM === "true" ||
        (
          video.dataset.productionPreferMp4 !== "true" &&
          !supportsMp4Video(video)
        )
      )
    ) {
      return cleanSource.replace(/\.mp4$/, ".webm");
    }
    if (
      supportsWebMVideo() &&
      !shouldPreferMp4Video() &&
      !(video && video.dataset.productionPreferMp4 === "true")
    ) {
      cleanSource = cleanSource.replace(/\.mp4$/, ".webm");
    }
    return cleanSource;
  }

  function withAssetVersion(url) {
    if (!url || !/^\/(videos|posters)\//.test(url)) return url;
    const parsed = new URL(url, location.origin);
    parsed.searchParams.set("v", assetVersion);
    return parsed.pathname + parsed.search + parsed.hash;
  }

  function upsertMeta(selector, attrName, attrValue, content) {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  }

  function patchPageMeta() {
    const normalizedPath = location.pathname.endsWith("/") ? location.pathname : location.pathname + "/";
    const meta = pageMeta[normalizedPath] || pageMeta[location.pathname];
    if (!meta) return;
    const [title, description, canonical] = meta;
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }

  function normalizeLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.length > 1) link.setAttribute("href", "/" + href);
    });
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
      rel.add("noopener");
      rel.add("noreferrer");
      link.setAttribute("rel", Array.from(rel).join(" "));
    });
    document.querySelectorAll('a[target="_blank"][href^="/"]').forEach((link) => {
      link.removeAttribute("target");
      link.removeAttribute("rel");
    });
    document.querySelectorAll("a").forEach((link) => {
      const text = (link.textContent || "").toLowerCase();
      const href = link.getAttribute("href") || "";
      const isInstagram = text.includes("instagram") || href === "https://www.instagram.com/";
      const isYouTube = text.includes("youtube") || href === "https://www.youtube.com/";
      if (!isInstagram && !isYouTube) return;
      link.setAttribute("href", isInstagram ? instagramUrl : youtubeUrl);
      link.setAttribute("target", "_blank");
      const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
      rel.add("noopener");
      rel.add("noreferrer");
      link.setAttribute("rel", Array.from(rel).join(" "));
      link.removeAttribute("title");
    });
  }

  function patchBookingLinks() {
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const text = ((link.textContent || "") + " " + (link.getAttribute("aria-label") || "")).trim();
      const isAdvanceSignup = text.includes("メンバーシップへ申し込む") || text.includes("先行価格で申し込む");
      const isTrialAction = text.includes("体験") || text.toLowerCase() === "trial" || href === "/trial/";

      if (isAdvanceSignup) link.setAttribute("href", bookingSignupUrl);
      else if (isTrialAction) {
        link.setAttribute("href", bookingTrialUrl);
        const arrow = link.querySelector('[aria-hidden="true"]');
        if (arrow) arrow.textContent = "↗";
      }

      const normalizedHref = link.getAttribute("href") || "";
      if (
        !normalizedHref.startsWith("/_ext/fitone.hacomono.jp/index.html")
        && !normalizedHref.startsWith("/_ext/fitone-club.square.site/index.html")
      ) return;
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  function patchSemanticLinks() {
    document.querySelectorAll("a[href]").forEach((link) => {
      const text = (link.textContent || "").replace(/\s+/g, " ").trim();
      if (text.includes("コミュニティを見る")) {
        link.setAttribute("href", "/community/");
        link.removeAttribute("target");
        link.removeAttribute("rel");
        return;
      }
      if (text.includes("詳しいアクセスページを見る") || text.includes("大会・イベントを見る")) {
        link.remove();
        return;
      }
      if (text.includes("レッスンイメージを見る")) link.setAttribute("href", "/#programs");
      else if (text.includes("週間スケジュールを見る")) link.setAttribute("href", "/#schedule");
      else if (text.includes("Google Map")) link.setAttribute("href", googleMapsUrl);
      else return;
      if (!link.getAttribute("href").startsWith("http")) {
        link.removeAttribute("target");
        link.removeAttribute("rel");
      } else {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  function patchCoachProfileLabels() {
    document.querySelectorAll('#coaches [data-coach-mobile-card="true"]').forEach((card) => {
      const cardText = (card.textContent || "").replace(/\s+/g, " ").trim();
      const expectedRole = cardText.includes("Jong Tae-se")
        ? "Co-owner"
        : cardText.includes("Shota Yamaguchi")
        ? "Chief Performance Advisor"
        : "";
      if (!expectedRole) return;
      card.querySelectorAll("div, span").forEach((label) => {
        if ((label.textContent || "").trim().toUpperCase() === "MAIN COACH") {
          label.textContent = expectedRole;
        }
      });
    });
    document.querySelectorAll('[data-trainer-item]').forEach((item) => {
      item.querySelectorAll("div, span").forEach((label) => {
        if (/^Wataru\s+Oguchi$/i.test((label.textContent || "").trim())) label.textContent = "Wataru";
      });
    });
    document.querySelectorAll("span").forEach((label) => {
      if ((label.textContent || "").trim() !== "プロフィールを見る") return;
      const control = label.closest("div.inline-flex");
      (control || label).remove();
    });
    document.querySelectorAll("div, span").forEach((label) => {
      if ((label.textContent || "").trim().toUpperCase() === "PROFILE") label.remove();
    });
    document.querySelectorAll('[aria-label*="プロフィールを見る"]').forEach((element) => {
      element.removeAttribute("aria-label");
      element.removeAttribute("role");
      element.removeAttribute("tabindex");
      element.classList.remove("cursor-pointer");
      if (element.tagName === "BUTTON") {
        element.disabled = true;
        element.style.cursor = "default";
      }
    });
  }

  let heroVideoInteractionBound = false;

  function syncHeroWatchControl(video, control) {
    const isPlaying = !video.paused && !video.ended && video.readyState >= 2;
    control.hidden = isPlaying;
    control.setAttribute("aria-hidden", isPlaying ? "true" : "false");
    control.style.pointerEvents = isPlaying ? "none" : "auto";
  }

  function resetVideoRetryState(video) {
    delete video.dataset.productionPreferMp4;
    delete video.dataset.productionPreferWebM;
    delete video.dataset.productionUseCompat;
    delete video.dataset.productionCompatibilityAttempted;
    delete video.dataset.productionWebMAttempted;
  }

  function playHeroVideo(video) {
    const fallbackReason = video.dataset.productionFallbackReason || "";
    video.dataset.productionMotionOverride = "true";
    resetVideoRetryState(video);
    const source = canonicalVideoSource(rememberVideoSource(video));
    const canPlayCompatibilityMp4 = supportsMp4Video(video);
    const shouldUseCompatibilityMp4 = fallbackReason &&
      fallbackReason !== "autoplay-blocked" &&
      fallbackReason !== "reduced-motion";
    if (compatibilityVideoSources[source] && canPlayCompatibilityMp4 && shouldUseCompatibilityMp4) {
      video.dataset.productionUseCompat = "true";
      video.dataset.productionCompatibilityAttempted = "true";
    } else if (!canPlayCompatibilityMp4 && supportsWebMVideo()) {
      video.dataset.productionPreferWebM = "true";
      video.dataset.productionWebMAttempted = "true";
    }
    delete video.dataset.productionPlaybackManaged;
    removeVideoPosterFallback(video);
    restoreVideoSource(video, true);
    video.setAttribute("autoplay", "");
    attemptVideoPlayback(video, { userInitiated: true });
  }

  function patchVideoLabels() {
    document.querySelectorAll('[data-card-watch-ui="true"]').forEach((label) => {
      if (label.textContent !== "WATCH →") label.textContent = "WATCH →";
      const card = label.closest('[data-hero-card="true"]');
      const video = card?.querySelector("video");
      if (!card || !video) return;
      card.style.cursor = "default";
      label.setAttribute("role", "button");
      label.setAttribute("tabindex", "0");
      label.setAttribute("aria-label", "サンプル");
      label.style.cursor = "pointer";
      if (label.dataset.productionPlaybackControl !== "true") {
        label.dataset.productionPlaybackControl = "true";
        ["playing", "pause", "ended", "waiting", "stalled", "error"].forEach((eventName) => {
          video.addEventListener(eventName, () => syncHeroWatchControl(video, label));
        });
      }
      syncHeroWatchControl(video, label);
    });
    document.querySelectorAll(".production-video-replay").forEach((button) => {
      if (button.textContent !== "WATCH →") button.textContent = "WATCH →";
      button.setAttribute("aria-label", "サンプル");
    });
    if (!heroVideoInteractionBound) {
      heroVideoInteractionBound = true;
      window.addEventListener("click", (event) => {
        if (event.target?.closest?.(".production-video-replay")) return;
        const card = event.target?.closest?.('[data-hero-card="true"]');
        if (!card) return;
        const control = event.target?.closest?.('[data-card-watch-ui="true"]');
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (control) {
          const video = card.querySelector("video");
          if (video) playHeroVideo(video);
        }
      }, true);
      window.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        const control = event.target?.closest?.('[data-card-watch-ui="true"]');
        if (!control) return;
        const video = control.closest('[data-hero-card="true"]')?.querySelector("video");
        if (!video) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        playHeroVideo(video);
      }, true);
    }
  }

  function patchStickyMembershipNavigation() {
    const sticky = stickyPromoElement();
    if (!sticky) return;
    const grid = sticky.querySelector(".grid");
    if (!grid) return;
    Array.from(grid.children).slice(0, 2).forEach((item) => {
      let link = item;
      if (item.tagName !== "A") {
        link = document.createElement("a");
        link.className = item.className;
        link.innerHTML = item.innerHTML;
        item.replaceWith(link);
      }
      if (link.dataset.productionMembershipLink === "true") return;
      link.dataset.productionMembershipLink = "true";
      link.setAttribute("href", "/#membership");
      link.setAttribute("aria-label", "サンプル");
      link.style.cursor = "pointer";
      link.addEventListener("keydown", (event) => {
        if (event.key !== " ") return;
        event.preventDefault();
        link.click();
      }, true);
    });
  }

  function ensureContactNavigation() {
    const items = [
      ["/#facility", "Facility"],
      ["/#programs", "Programs"],
      ["/#coaches", "Coaches"],
      ["/#membership", "Membership"],
      ["/#schedule", "Schedule"],
      ["/#access", "Access"],
      ["/#contact", "CONTACT"],
    ];
    const headerNav = document.querySelector('[data-global-header="true"] nav[aria-label="Global navigation"]');
    if (headerNav) {
      const reference = headerNav.querySelector("a");
      const existing = Array.from(headerNav.querySelectorAll("a"));
      items.forEach(([href, label]) => {
        const link = existing.find((candidate) => candidate.getAttribute("href") === href) || document.createElement("a");
        link.href = href;
        link.className = link.className || reference?.className || "relative z-10 rounded-full px-3 py-2 text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-300";
        link.textContent = label;
        link.setAttribute("aria-label", label);
        headerNav.appendChild(link);
      });
    }

    const mobileNav = document.querySelector('[data-global-header="true"] nav[aria-label="Mobile navigation"]');
    if (mobileNav && mobileNav.dataset.productionNavigationRestored !== "true") {
      mobileNav.dataset.productionNavigationRestored = "true";
      const trial = Array.from(mobileNav.querySelectorAll("a")).find((link) => /trial/i.test(link.textContent || ""));
      const reference = mobileNav.querySelector('a[href^="/#"], button');
      const sectionClass = reference?.className || "flex w-full items-center justify-between rounded-[1.2rem] border border-white/8 px-4 py-4 text-left text-[0.92rem] uppercase tracking-[0.1em] text-white/86 transition-colors duration-300 hover:bg-white/6";
      mobileNav.replaceChildren();
      items.forEach(([href, label]) => {
        const link = document.createElement("a");
        link.href = href;
        link.className = sectionClass;
        link.innerHTML = `<span>${label}</span><span class="text-white/36">→</span>`;
        mobileNav.appendChild(link);
      });
      const trialLink = trial || document.createElement("a");
      trialLink.href = bookingTrialUrl;
      trialLink.target = "_blank";
      trialLink.rel = "noopener noreferrer";
      trialLink.className = trial?.className || "mt-3 flex w-full items-center justify-between rounded-[1.2rem] bg-[#d4ff3f] px-4 py-4 text-[0.92rem] uppercase tracking-[0.1em] text-[#050505]";
      trialLink.innerHTML = '<span>TRIAL</span><span aria-hidden="true">↗</span>';
      mobileNav.appendChild(trialLink);
    }

    const footerNav = document.querySelector('footer nav[aria-label="Footer navigation"]');
    if (footerNav) {
      const reference = footerNav.querySelector("a");
      const existing = Array.from(footerNav.querySelectorAll("a"));
      items.forEach(([href, label]) => {
        const link = existing.find((candidate) => candidate.getAttribute("href") === href) || document.createElement("a");
        link.href = href;
        link.className = link.className || reference?.className || "transition-colors duration-300 hover:text-white";
        link.textContent = label;
        footerNav.appendChild(link);
      });
    }
  }

  function contactStatusMessage() {
    const status = new URLSearchParams(window.location.search || "").get("contact");
    if (status === "sent") {
      return '<div class="border border-[#d4ff3f]/40 bg-[#d4ff3f]/12 px-4 py-3 text-[0.9rem] leading-[1.7] text-[#d4ff3f]">サンプルの文章です。</div>';
    }
    if (status === "error") {
      return '<div class="border border-red-300/30 bg-red-400/10 px-4 py-3 text-[0.9rem] leading-[1.7] text-red-100">サンプルの文章です。</div>';
    }
    return "";
  }

  function ensureContactSection() {
    if (document.querySelector("#contact")) return;
    const footer = document.querySelector("footer");
    if (!footer?.parentElement) return;
    const section = document.createElement("section");
    section.id = "contact";
    section.setAttribute("data-home-section", "true");
    section.setAttribute("data-theme", "dark");
    section.setAttribute("data-title", "CONTACT");
    section.className = "hero-grain relative overflow-hidden bg-[#050505] px-4 pb-20 pt-18 text-[#f4f0e6] sm:px-6 lg:px-10 lg:pb-24 lg:pt-24";
    section.innerHTML = `
      <div class="pointer-events-none absolute inset-0"><div class="hero-noise"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(212,255,63,0.08),transparent_16%),radial-gradient(circle_at_16%_80%,rgba(255,255,255,0.05),transparent_20%)]"></div></div>
      <div aria-hidden="true" class="pointer-events-none absolute inset-x-[-8%] top-10 font-sans text-[18vw] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.04]">CONTACT</div>
      <div class="relative z-10 mx-auto grid max-w-[1680px] gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(28rem,0.92fr)] lg:items-start lg:gap-14">
        <div><div class="text-[0.82rem] uppercase tracking-[0.1em] text-white/54">CONTACT</div><h2 class="fitone-heading-balance mt-5 max-w-[9em] font-sans font-medium leading-[0.94] tracking-[-0.03em] text-[#f4f0e6]">サンプル</h2><p class="mt-6 max-w-[34rem] text-[1rem] leading-[1.9] text-white/68">サンプルの文章です。</p></div>
        <form action="${contactApiUrl}" method="post" accept-charset="UTF-8" class="grid gap-5 border border-white/10 bg-white/[0.035] p-5 sm:p-6 lg:p-7" data-production-contact-form="true">
          ${contactStatusMessage()}
          <div class="grid gap-4 sm:grid-cols-2"><label class="grid gap-2 text-[0.76rem] uppercase tracking-[0.1em] text-white/54"><span class="production-contact-label">サンプル <span aria-hidden="true">*</span></span><input name="last_name" autocomplete="family-name" required maxlength="80" class="min-h-[52px] border border-white/12 bg-black/24 px-4 text-[1rem] text-[#f4f0e6] outline-none focus:border-[#d4ff3f]/70" placeholder="サンプル"/></label><label class="grid gap-2 text-[0.76rem] uppercase tracking-[0.1em] text-white/54"><span class="production-contact-label">サンプル <span aria-hidden="true">*</span></span><input name="first_name" autocomplete="given-name" required maxlength="80" class="min-h-[52px] border border-white/12 bg-black/24 px-4 text-[1rem] text-[#f4f0e6] outline-none focus:border-[#d4ff3f]/70" placeholder="サンプル"/></label></div>
          <label class="grid gap-2 text-[0.76rem] uppercase tracking-[0.1em] text-white/54"><span class="production-contact-label">サンプル <span aria-hidden="true">*</span></span><input type="email" name="email" autocomplete="email" inputmode="email" required maxlength="160" class="min-h-[52px] border border-white/12 bg-black/24 px-4 text-[1rem] text-[#f4f0e6] outline-none focus:border-[#d4ff3f]/70" placeholder="sample@example.com"/></label>
          <label class="grid gap-2 text-[0.76rem] uppercase tracking-[0.1em] text-white/54"><span class="production-contact-label">サンプル <span aria-hidden="true">*</span></span><input type="tel" name="phone" autocomplete="tel" required maxlength="40" class="min-h-[52px] border border-white/12 bg-black/24 px-4 text-[1rem] text-[#f4f0e6] outline-none focus:border-[#d4ff3f]/70" placeholder="000-0000-0000"/></label>
          <label class="grid gap-2 text-[0.76rem] uppercase tracking-[0.1em] text-white/54"><span class="production-contact-label">サンプル <span aria-hidden="true">*</span></span><textarea name="message" required maxlength="4000" rows="7" class="min-h-[12rem] resize-y border border-white/12 bg-black/24 px-4 py-4 text-[1rem] leading-[1.75] text-[#f4f0e6] outline-none focus:border-[#d4ff3f]/70" placeholder="サンプル"></textarea></label>
          <div class="production-contact-honeypot" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"/></label></div>
          <p class="text-[0.78rem] leading-[1.7] text-white/42">サンプルの文章です。</p>
          <button type="submit" class="inline-flex min-h-[52px] items-center justify-center gap-3 border border-[#d4ff3f] bg-[#d4ff3f] px-5 py-3 text-[0.92rem] tracking-[0.08em] text-[#050505] transition-colors duration-300 hover:bg-[#e0ff67]"><span>サンプル</span><span aria-hidden="true">→</span></button>
        </form>
      </div>`;
    footer.parentElement.insertBefore(section, footer);
    patchContactFormValidation();
  }

  function patchContactFormValidation() {
    const form = document.querySelector('[data-production-contact-form="true"]');
    if (!form || form.dataset.productionValidationBound === "true") return;
    form.dataset.productionValidationBound = "true";
    const email = form.querySelector('input[name="email"]');
    const requiredFields = Array.from(form.querySelectorAll("[required]"));
    const emailPattern = /^[^@\s]+@[^@\s]+$/;
    const updateValidity = (field) => {
      const value = String(field.value || "").trim();
      field.setCustomValidity("");
      if (!value) field.setCustomValidity("サンプル");
      else if (field === email && !emailPattern.test(value)) field.setCustomValidity("サンプル");
      field.toggleAttribute("aria-invalid", !field.validity.valid);
      return field.validity.valid;
    };
    requiredFields.forEach((field) => {
      field.addEventListener("input", () => updateValidity(field));
      field.addEventListener("invalid", () => updateValidity(field));
    });
    form.addEventListener("submit", async (event) => {
      const firstInvalid = requiredFields.find((field) => !updateValidity(field));
      if (firstInvalid || !form.checkValidity()) {
        event.preventDefault();
        firstInvalid?.reportValidity();
        firstInvalid?.focus();
        return;
      }
      event.preventDefault();
      const submit = form.querySelector('button[type="submit"]');
      if (submit?.dataset.productionSending === "true") return;
      if (submit) { submit.dataset.productionSending = "true"; submit.disabled = true; }
      const field = (name) => String(form.querySelector(`[name="${name}"]`)?.value || "").trim();
      try {
        const response = await fetch(contactApiUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lastName: field("last_name"), firstName: field("first_name"), email: field("email"), phone: field("phone"), message: field("message"), website: field("website") }) });
        if (!response.ok) throw new Error("contact request failed");
        window.location.assign("/?contact=sent#contact");
      } catch {
        window.location.assign("/?contact=error#contact");
      } finally {
        if (submit) { submit.disabled = false; delete submit.dataset.productionSending; }
      }
    });
  }

  function patchAccessSection() {
    const section = document.querySelector("#access");
    if (!section) return;
    const heading = section.querySelector("h2");
    const wrapper = section.querySelector(".relative.z-10") || section;
    const eyebrow = Array.from(wrapper.children).find((child) => child.tagName === "DIV" && /shibuya|tokyo|access/i.test((child.textContent || "").trim()));
    if (eyebrow && eyebrow.textContent !== "ACCESS") eyebrow.textContent = "ACCESS";
    if (heading) {
      if (heading.textContent !== "アクセス") heading.textContent = "アクセス";
      heading.setAttribute("aria-label", "アクセス");
    }
  }

  function patchMembershipHeading() {
    const heading = document.querySelector("#membership-heading");
    if (!heading) return;
    const spans = heading.querySelectorAll("span");
    if (spans[0] && spans[0].textContent !== "サンプル") {
      spans[0].textContent = "サンプル";
    }
    if (spans[1] && spans[1].textContent !== "MEMBERSHIP") spans[1].textContent = "MEMBERSHIP";
  }

  function fitCheckOptionNumber(button) {
    const number = (button?.querySelector("span")?.textContent || "").trim();
    return /^0[1-6]$/.test(number) ? number : "";
  }

  function setFitCheckStateClasses(element, activeClasses, inactiveClasses, active) {
    if (!element) return;
    activeClasses.forEach((className) => element.classList.toggle(className, active));
    inactiveClasses.forEach((className) => element.classList.toggle(className, !active));
  }

  function syncFitCheckOption(button, active) {
    button.removeAttribute("aria-current");
    button.setAttribute("role", "button");
    button.setAttribute("aria-pressed", active ? "true" : "false");
    const isDesktopOption = button.classList.contains("absolute");
    const content = isDesktopOption ? button.firstElementChild : button;
    const number = content?.children[0];
    const label = content?.children[1];
    const line = isDesktopOption ? button.children[1] : null;

    setFitCheckStateClasses(
      button,
      ["opacity-100"],
      isDesktopOption ? ["opacity-42", "hover:opacity-72"] : ["opacity-48"],
      active,
    );
    setFitCheckStateClasses(
      number,
      isDesktopOption ? ["translate-x-1", "text-white/86"] : ["text-white/86"],
      isDesktopOption
        ? ["text-white/36", "group-hover:translate-x-1", "group-hover:text-white/58"]
        : ["text-white/38"],
      active,
    );
    setFitCheckStateClasses(
      label,
      ["text-[#f4f0e6]"],
      isDesktopOption ? ["text-white/66", "group-hover:text-white/86"] : ["text-white/78"],
      active,
    );
    setFitCheckStateClasses(
      line,
      ["bg-white/46", "scale-x-100"],
      ["bg-white/16", "scale-x-75", "group-hover:bg-white/32", "group-hover:scale-x-100"],
      active,
    );
  }

  function setFitCheckText(element, text) {
    if (element && element.textContent !== text) element.textContent = text;
  }

  function selectFitCheckRecommendation(section, number) {
    const selected = fitCheckRecommendations.find((item) => item.number === number) || fitCheckRecommendations[0];
    const options = Array.from(section.querySelectorAll('[data-fitcheck-option="true"]'));
    options.forEach((button) => syncFitCheckOption(button, fitCheckOptionNumber(button) === selected.number));

    const response = section.querySelector('[data-fitcheck-response="true"]');
    if (!response) return;
    const eyebrow = response.children[0];
    const title = response.children[1];
    const body = response.querySelector(":scope > p");
    const footer = response.lastElementChild;
    const recommendation = footer?.querySelector(":scope > div");
    const cta = footer?.querySelector('[data-fitcheck-cta="true"]');

    setFitCheckText(eyebrow, `${selected.number} — Your Fit`);
    setFitCheckText(title, selected.title);
    setFitCheckText(body, selected.body);
    setFitCheckText(recommendation, selected.recommendation);
    if (cta) {
      cta.setAttribute("href", bookingTrialUrl);
      cta.setAttribute("target", "_blank");
      cta.setAttribute("rel", "noopener noreferrer");
      cta.setAttribute("aria-label", `サンプル`);
      const arrow = cta.querySelector('[aria-hidden="true"]');
      setFitCheckText(arrow, "↗");
    }
    section.dataset.productionFitcheckSelected = selected.number;
  }

  function patchFitCheckSection() {
    const section = document.querySelector("#for-you");
    if (!section) return;
    const options = Array.from(section.querySelectorAll('[data-fitcheck-option="true"]'));
    if (options.length !== 12) return;

    options.forEach((button) => {
      const number = fitCheckOptionNumber(button);
      if (!number) return;
      button.dataset.productionFitcheckNumber = number;
      if (button.dataset.productionFitcheckBound === "true") return;
      button.dataset.productionFitcheckBound = "true";
      button.addEventListener("click", () => selectFitCheckRecommendation(section, number));
    });

    const selected = section.dataset.productionFitcheckSelected ||
      fitCheckOptionNumber(options.find((button) => button.getAttribute("aria-pressed") === "true")) ||
      "01";
    selectFitCheckRecommendation(section, selected);
    section.dataset.productionFitcheckBound = "true";
  }


  function renderScheduleDay(dayKey) {
    const day = dayDetails.find(([key]) => key === dayKey) || dayDetails[0];
    return `<div class="production-day-heading-restored">${dayEnglish[day[0]]} / ${day[1]}</div><div class="production-day-list-restored">${day[2].map(([time, type]) => `<div class="production-day-slot-restored"><span>${time}</span><strong class="${type === "HYROX" ? "is-hyrox" : type === "RUN CLUB" ? "is-run" : "is-open"}">${type}</strong></div>`).join("")}</div>`;
  }

  let scheduleInteractionBound = false;
  function activateScheduleButton(button) {
    const section = button?.closest("#schedule");
    if (!section) return;
    const labels = new Map(dayDetails.map(([key, label]) => [label, key]));
    const buttons = Array.from(section.querySelectorAll("button")).filter((candidate) => labels.has((candidate.textContent || "").trim()));
    const tabs = buttons[0]?.parentElement;
    const output = tabs?.nextElementSibling;
    if (!output) return;
    const activeClass = section.dataset.productionScheduleActiveClass || buttons.find((candidate) => candidate.getAttribute("aria-selected") === "true")?.className || buttons[0]?.className || "";
    const inactiveClass = section.dataset.productionScheduleInactiveClass || buttons.find((candidate) => candidate.getAttribute("aria-selected") !== "true")?.className || buttons[1]?.className || "";
    section.dataset.productionScheduleActiveClass = activeClass;
    section.dataset.productionScheduleInactiveClass = inactiveClass;
    const dayKey = button.dataset.productionDay || labels.get((button.textContent || "").trim()) || "mon";
    buttons.forEach((candidate) => {
      const active = candidate === button;
      candidate.dataset.productionDay = labels.get((candidate.textContent || "").trim());
      candidate.className = active ? activeClass : inactiveClass;
      candidate.setAttribute("aria-selected", active ? "true" : "false");
    });
    output.dataset.productionDayDetail = "true";
    output.innerHTML = renderScheduleDay(dayKey);
  }

  function bindScheduleInteraction() {
    if (scheduleInteractionBound) return;
    scheduleInteractionBound = true;
    window.addEventListener("click", (event) => {
      const schedule = event.target?.closest?.("#schedule");
      if (!schedule) return;
      const button = event.target?.closest?.("#schedule button");
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      if (button && dayDetails.some(([, label]) => label === (button.textContent || "").trim())) {
        activateScheduleButton(button);
      }
    }, true);
    window.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const button = event.target?.closest?.("#schedule button");
      if (!button || !dayDetails.some(([, label]) => label === (button.textContent || "").trim())) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      activateScheduleButton(button);
    }, true);
  }

  function patchScheduleSection() {
    const section = document.querySelector("#schedule");
    if (!section) return;
    if (section.dataset.productionScheduleBound === "true") return;
    section.dataset.productionSchedulePatched = "true";
    section.querySelector(".production-schedule-restored")?.remove();
    const labels = new Map(dayDetails.map(([key, label]) => [label, key]));
    const buttons = Array.from(section.querySelectorAll("button")).filter((button) => labels.has((button.textContent || "").trim()));
    if (buttons.length !== 7) {
      section.dataset.productionScheduleBound = "true";
      return;
    }
    const tabs = buttons[0].parentElement;
    const output = tabs?.nextElementSibling;
    if (!output) return;
    output.dataset.productionDayDetail = "true";
    section.dataset.productionScheduleActiveClass = buttons[0].className;
    section.dataset.productionScheduleInactiveClass = buttons[1].className;
    buttons.forEach((button) => {
      button.type = "button";
      button.setAttribute("role", "tab");
      button.dataset.productionDay = labels.get((button.textContent || "").trim());
    });
    bindScheduleInteraction();
    section.dataset.productionScheduleBound = "true";
    const selected = buttons.find((button) => button.getAttribute("aria-selected") === "true") || buttons[0];
    activateScheduleButton(selected);
  }

  function isMobileViewport() {
    return window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function prefersReducedData() {
    return Boolean(navigator.connection && navigator.connection.saveData);
  }

  function clamp(value, min = 0, max = 1) {
    return Math.min(max, Math.max(min, value));
  }

  function scrollToHomeSection(target) {
    const match = String(target || "").match(/^\/?#([A-Za-z0-9_-]+)$/);
    if (!match || (location.pathname !== "/" && location.pathname !== "/index.html")) return false;
    const section = document.getElementById(match[1]);
    if (!section) return false;
    if (location.hash !== "#" + match[1]) window.history.pushState(null, "", "/#" + match[1]);
    const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 0;
    const top = Math.max(0, section.getBoundingClientRect().top + window.scrollY - Math.min(headerHeight, 88));
    window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    return true;
  }

  function setMotionStage(stage) {
    document.querySelectorAll("[data-motion-stage]").forEach((element) => {
      element.setAttribute("data-motion-stage", stage);
    });
  }

  function isHeroVideo(video) {
    return Boolean(video.closest("[data-hero-card], [data-op-cut]"));
  }

  function isProgramVideo(video) {
    return Boolean(video.closest("[data-program-frame]"));
  }

  function rememberVideoSource(video) {
    const poster = stripAssetVersion(video.getAttribute("poster") || "");
    const currentSrc = canonicalVideoSource(video.getAttribute("src") || "");
    const deferredSrc = canonicalVideoSource(video.dataset.productionSrc || "");
    const originalSrc = canonicalVideoSource(video.dataset.productionOriginalSrc || "");
    const inferredSource = poster === "/posters/community.jpg"
      ? (video.closest("[data-community-media]") ? "/videos/community.mp4" : "/videos/facility-functional-zone.mp4")
      : videoSourceByPoster[poster] || "";
    const source = deferredSrc ||
      originalSrc ||
      inferredSource ||
      (currentSrc === placeholderVideoSrc ? "" : currentSrc);
    if (source) {
      video.dataset.productionSrc = source;
      video.dataset.productionOriginalSrc = source;
    }
    return source;
  }

  function clearVideoPlaybackTimers(video) {
    const timers = videoPlaybackTimers.get(video);
    if (!timers) return;
    if (timers.startup) window.clearTimeout(timers.startup);
    if (timers.stall) window.clearTimeout(timers.stall);
    videoPlaybackTimers.delete(video);
  }

  function clearVideoPlaybackTimer(video, name) {
    const timers = videoPlaybackTimers.get(video);
    if (!timers?.[name]) return;
    window.clearTimeout(timers[name]);
    timers[name] = 0;
    if (!timers.startup && !timers.stall) videoPlaybackTimers.delete(video);
  }

  function setVideoPlaybackTimer(video, name, callback, delay) {
    const timers = videoPlaybackTimers.get(video) || {};
    if (timers[name]) window.clearTimeout(timers[name]);
    timers[name] = window.setTimeout(() => {
      timers[name] = 0;
      callback();
    }, delay);
    videoPlaybackTimers.set(video, timers);
  }

  function beginVideoPlaybackAttempt(video) {
    const attempt = String(Number(video.dataset.productionPlaybackAttempt || 0) + 1);
    video.dataset.productionPlaybackAttempt = attempt;
    return attempt;
  }

  function invalidateVideoPlaybackAttempt(video) {
    beginVideoPlaybackAttempt(video);
    clearVideoPlaybackTimers(video);
  }

  function isCurrentVideoPlaybackAttempt(video, attempt, source) {
    return video.dataset.productionPlaybackAttempt === attempt &&
      stripAssetVersion(video.getAttribute("src") || video.currentSrc || "") === source;
  }

  function retryVideoAsMp4(video) {
    if (video.dataset.productionIntroReleased === "true") return false;
    const currentSource = stripAssetVersion(video.getAttribute("src") || video.currentSrc || "");
    if (!/\.webm(\?|#|$)/.test(currentSource) || video.dataset.productionPreferMp4 === "true") {
      return false;
    }
    video.dataset.productionPreferMp4 = "true";
    delete video.dataset.productionPreferWebM;
    delete video.dataset.productionUseCompat;
    delete video.dataset.productionLoaded;
    delete video.dataset.productionPlaybackManaged;
    const source = rememberVideoSource(video);
    const mp4Source = withAssetVersion(selectedVideoSource(source, video));
    if (!source || video.getAttribute("src") === mp4Source) return false;
    removeVideoPosterFallback(video);
    video.dataset.productionSourceRemoval = "true";
    video.setAttribute("src", mp4Source);
    video.dataset.productionLoaded = "true";
    video.load();
    window.setTimeout(() => delete video.dataset.productionSourceRemoval, 0);
    attemptVideoPlayback(video);
    return true;
  }

  function retryVideoWithCompatibilityMp4(video) {
    if (video.dataset.productionIntroReleased === "true") return false;
    if (video.dataset.productionCompatibilityAttempted === "true") return false;
    const source = rememberVideoSource(video);
    const canonicalSource = canonicalVideoSource(source);
    if (!compatibilityVideoSources[canonicalSource]) return false;
    video.dataset.productionCompatibilityAttempted = "true";
    video.dataset.productionUseCompat = "true";
    video.dataset.productionPreferMp4 = "true";
    delete video.dataset.productionPreferWebM;
    delete video.dataset.productionLoaded;
    delete video.dataset.productionPlaybackManaged;
    const compatibilitySource = withAssetVersion(selectedVideoSource(source, video));
    if (!compatibilitySource || video.getAttribute("src") === compatibilitySource) return false;
    removeVideoPosterFallback(video);
    video.dataset.productionSourceRemoval = "true";
    video.setAttribute("src", compatibilitySource);
    video.dataset.productionLoaded = "true";
    video.load();
    window.setTimeout(() => delete video.dataset.productionSourceRemoval, 0);
    attemptVideoPlayback(video);
    return true;
  }

  function retryVideoAsWebM(video) {
    if (
      video.dataset.productionIntroReleased === "true" ||
      video.dataset.productionWebMAttempted === "true" ||
      !supportsWebMVideo()
    ) return false;
    const source = rememberVideoSource(video);
    const canonicalSource = canonicalVideoSource(source);
    if (!/\.mp4$/.test(canonicalSource)) return false;
    video.dataset.productionWebMAttempted = "true";
    video.dataset.productionPreferWebM = "true";
    delete video.dataset.productionUseCompat;
    delete video.dataset.productionLoaded;
    delete video.dataset.productionPlaybackManaged;
    const webmSource = withAssetVersion(selectedVideoSource(source, video));
    if (!webmSource || video.getAttribute("src") === webmSource) return false;
    removeVideoPosterFallback(video);
    video.dataset.productionSourceRemoval = "true";
    video.setAttribute("src", webmSource);
    video.dataset.productionLoaded = "true";
    video.load();
    window.setTimeout(() => delete video.dataset.productionSourceRemoval, 0);
    attemptVideoPlayback(video);
    return true;
  }

  function handleVideoPlaybackFailure(video, reason) {
    clearVideoPlaybackTimers(video);
    if (video.dataset.productionUserInitiated === "true") {
      showVideoPosterFallback(video, reason);
      return;
    }
    if (retryVideoAsMp4(video)) return;
    if (retryVideoWithCompatibilityMp4(video)) return;
    if (retryVideoAsWebM(video)) return;
    showVideoPosterFallback(video, reason);
  }

  function monitorVideoStartup(video, attempt, source) {
    const initialTime = Number.isFinite(video.currentTime) ? video.currentTime : 0;
    video.dataset.productionPlaybackStartTime = String(initialTime);
    video.dataset.productionPlaybackLastTime = String(initialTime);
    video.dataset.productionPlaybackProgressed = "false";
    setVideoPlaybackTimer(video, "startup", () => {
      if (!isCurrentVideoPlaybackAttempt(video, attempt, source)) return;
      if (
        video.dataset.productionPlaybackProgressed === "true" ||
        (!video.paused && video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA)
      ) return;
      handleVideoPlaybackFailure(video, "startup-timeout");
    }, videoStartupTimeoutMs);
  }

  function handleVideoPlayRejection(video, error, attempt, source) {
    if (!isCurrentVideoPlaybackAttempt(video, attempt, source)) return;
    clearVideoPlaybackTimers(video);
    if (error?.name === "AbortError") return;
    if (error?.name === "NotAllowedError") {
      showVideoPosterFallback(video, "autoplay-blocked");
      return;
    }
    handleVideoPlaybackFailure(video, "play-rejected");
  }

  function attemptVideoPlayback(video, { userInitiated = false } = {}) {
    if (
      document.visibilityState === "hidden" ||
      video.dataset.productionIntroReleased === "true" ||
      !video.getAttribute("src") ||
      video.dataset.productionPosterFallback === "true"
    ) return;
    if (userInitiated) video.dataset.productionUserInitiated = "true";
    else delete video.dataset.productionUserInitiated;
    video.dataset.productionPlaybackManaged = "true";
    const attempt = beginVideoPlaybackAttempt(video);
    const source = stripAssetVersion(video.getAttribute("src") || video.currentSrc || "");
    monitorVideoStartup(video, attempt, source);
    let playback;
    try {
      playback = video.play();
    } catch (error) {
      handleVideoPlayRejection(video, error, attempt, source);
      return;
    }
    if (playback && typeof playback.catch === "function") {
      playback.catch((error) => handleVideoPlayRejection(video, error, attempt, source));
    }
  }

  function attachVideoFallback(video) {
    if (video.dataset.productionFallbackBound === "true") return;
    video.dataset.productionFallbackBound = "true";
    video.addEventListener("error", () => {
      if (!video.getAttribute("src") || video.dataset.productionIntroReleased === "true") return;
      handleVideoPlaybackFailure(video, "media-error");
    });
    video.addEventListener("timeupdate", () => {
      const previousTime = Number(video.dataset.productionPlaybackLastTime || 0);
      const currentTime = Number.isFinite(video.currentTime) ? video.currentTime : 0;
      if (Math.abs(currentTime - previousTime) > 0.04 || currentTime < previousTime) {
        video.dataset.productionPlaybackProgressed = "true";
        clearVideoPlaybackTimer(video, "startup");
      }
      video.dataset.productionPlaybackLastTime = String(currentTime);
    });
    video.addEventListener("playing", () => {
      clearVideoPlaybackTimer(video, "stall");
      delete video.dataset.productionUserInitiated;
    });
    const watchForStall = () => {
      if (!video.getAttribute("src") || video.dataset.productionPosterFallback === "true") return;
      const source = stripAssetVersion(video.getAttribute("src") || video.currentSrc || "");
      setVideoPlaybackTimer(
        video,
        "stall",
        () => {
          const currentSource = stripAssetVersion(video.getAttribute("src") || video.currentSrc || "");
          if (currentSource !== source) return;
          if (!video.paused && video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) return;
          handleVideoPlaybackFailure(video, "playback-stalled");
        },
        videoStallTimeoutMs,
      );
    };
    video.addEventListener("waiting", watchForStall);
    video.addEventListener("stalled", watchForStall);
    video.addEventListener("abort", () => {
      if (video.dataset.productionSourceRemoval !== "true") {
        handleVideoPlaybackFailure(video, "media-aborted");
      }
    });
  }

  function removeVideoPosterFallback(video) {
    if (!video.parentElement) return;
    const posterLayer = video.parentElement.querySelector(".production-video-poster-fallback");
    if (posterLayer) posterLayer.remove();
    delete video.dataset.productionPosterFallback;
    delete video.dataset.productionFallbackReason;
    video.style.display = "";
  }

  function showVideoPosterFallback(video, reason = "media-error") {
    if (!video.parentElement || video.dataset.productionPosterFallback === "true") return;
    const poster = stripAssetVersion(video.getAttribute("poster") || video.dataset.productionOriginalPoster || "");
    if (!poster) return;
    let posterLayer = video.parentElement.querySelector(".production-video-poster-fallback");
    if (!posterLayer) {
      posterLayer = document.createElement("div");
      posterLayer.className = "production-video-poster-fallback";
      video.insertAdjacentElement("beforebegin", posterLayer);
    }
    let replayButton = posterLayer.querySelector(".production-video-replay");
    if (!replayButton) {
      replayButton = document.createElement("button");
      replayButton.type = "button";
      replayButton.className = "production-video-replay";
      replayButton.setAttribute("aria-label", "サンプル");
      const heroCard = video.closest('[data-hero-card="true"]');
      if (heroCard) {
        const heroCards = Array.from(document.querySelectorAll('[data-hero-card="true"]'));
        replayButton.dataset.productionPlacement = heroCards.indexOf(heroCard) === 0 ? "left" : "right";
      }
      replayButton.textContent = "WATCH →";
      replayButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        playHeroVideo(video);
      });
      posterLayer.appendChild(replayButton);
    }
    posterLayer.style.backgroundImage = 'url("' + withAssetVersion(poster) + '")';
    posterLayer.style.backgroundPosition = video.style.objectPosition || "center center";
    video.dataset.productionPosterFallback = "true";
    video.dataset.productionFallbackReason = reason;
    video.dataset.productionPlaybackManaged = "true";
    invalidateVideoPlaybackAttempt(video);
    video.pause();
    video.removeAttribute("autoplay");
    video.style.display = "none";
    video.setAttribute("aria-hidden", "true");
  }

  function restoreVideoSource(video, forceReload = false) {
    const source = rememberVideoSource(video);
    attachVideoFallback(video);
    const versionedSource = withAssetVersion(selectedVideoSource(source, video));
    if (!source) return;
    const sourceIsCurrent = video.getAttribute("src") === versionedSource;
    if (sourceIsCurrent && !forceReload) {
      video.dataset.productionLoaded = "true";
      return;
    }
    removeVideoPosterFallback(video);
    invalidateVideoPlaybackAttempt(video);
    video.dataset.productionSourceRemoval = "true";
    if (!sourceIsCurrent) video.setAttribute("src", versionedSource);
    video.dataset.productionLoaded = "true";
    delete video.dataset.productionPlaybackManaged;
    video.load();
    window.setTimeout(() => delete video.dataset.productionSourceRemoval, 250);
  }

  function removeVideoSource(video) {
    invalidateVideoPlaybackAttempt(video);
    video.pause();
    video.removeAttribute("autoplay");
    if (video.getAttribute("src")) {
      video.dataset.productionSourceRemoval = "true";
      video.removeAttribute("src");
      video.load();
      window.setTimeout(() => delete video.dataset.productionSourceRemoval, 250);
    }
    delete video.dataset.productionUserInitiated;
    delete video.dataset.productionPlaybackManaged;
  }

  function isLazyVideoCandidate(video) {
    return !isHeroVideo(video);
  }

  function patchMedia() {
    const reduceMotion = prefersReducedMotion();
    document.querySelectorAll("video").forEach((video) => {
      attachVideoFallback(video);
      const source = rememberVideoSource(video);
      video.setAttribute("preload", isHeroVideo(video) ? "metadata" : "none");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      if (!video.hasAttribute("aria-label")) video.setAttribute("aria-hidden", "true");
      if (video.dataset.productionIntroReleased === "true") return;
      if (reduceMotion && video.dataset.productionMotionOverride !== "true") {
        removeVideoSource(video);
        showVideoPosterFallback(video, "reduced-motion");
        return;
      }
      const isMainHeroVideo = Boolean(video.closest('[data-hero-card="true"]'));
      const heroIntroIsActive = document.body?.classList.contains("production-hero-intro-active");
      if (isMainHeroVideo && heroIntroIsActive && video.dataset.productionPlaybackManaged !== "true") {
        removeVideoSource(video);
        return;
      }
      if (
        !reduceMotion &&
        !isProgramVideo(video) &&
        video.getAttribute("src") === placeholderVideoSrc
      ) {
        restoreVideoSource(video);
      }
      if (isMainHeroVideo && source && !heroIntroIsActive) {
        const expectedSource = selectedVideoSource(source, video);
        const currentSource = stripAssetVersion(video.getAttribute("src") || "");
        if (!video.hasAttribute("autoplay")) video.setAttribute("autoplay", "");
        if (currentSource !== expectedSource) restoreVideoSource(video);
      }
      if (
        isHeroVideo(video) &&
        video.hasAttribute("autoplay") &&
        video.getAttribute("src") &&
        video.dataset.productionPlaybackManaged !== "true"
      ) {
        attemptVideoPlayback(video);
      }
    });
  }

  let lazyVideoObserver;
  function patchLazyVideoLoading() {
    const mobile = isMobileViewport();
    const reduceMotion = prefersReducedMotion();
    const reduceData = prefersReducedData();
    const videos = Array.from(document.querySelectorAll("video")).filter(isLazyVideoCandidate);
    if (lazyVideoObserver) lazyVideoObserver.disconnect();

    videos.forEach((video) => {
      rememberVideoSource(video);
      video.dataset.productionLazyVideo = "true";
      if (
        (reduceMotion && video.dataset.productionMotionOverride !== "true") ||
        (isProgramVideo(video) && (mobile || reduceData))
      ) {
        removeVideoSource(video);
        delete video.dataset.productionLoaded;
        if (reduceMotion) showVideoPosterFallback(video, "reduced-motion");
        return;
      }
      const source = rememberVideoSource(video);
      const expectedSource = selectedVideoSource(source, video);
      const currentSource = stripAssetVersion(video.getAttribute("src") || "");
      if (
        video.dataset.productionLoaded === "true" &&
        currentSource &&
        currentSource !== expectedSource
      ) {
        delete video.dataset.productionLoaded;
        removeVideoSource(video);
      }
      if (video.dataset.productionLoaded !== "true" && video.getAttribute("src")) {
        removeVideoSource(video);
      }
      if (!("IntersectionObserver" in window)) {
        restoreVideoSource(video);
      }
    });

    if (reduceMotion || !("IntersectionObserver" in window)) return;

    lazyVideoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (!entry.isIntersecting) {
          if (video.getAttribute("src")) {
            clearVideoPlaybackTimers(video);
            video.pause();
            video.removeAttribute("autoplay");
            delete video.dataset.productionPlaybackManaged;
          }
          return;
        }
        if (isProgramVideo(video) && (isMobileViewport() || prefersReducedData())) {
          removeVideoSource(video);
          lazyVideoObserver.unobserve(video);
          return;
        }
        restoreVideoSource(video);
        if (!video.hasAttribute("autoplay")) video.setAttribute("autoplay", "");
        attemptVideoPlayback(video);
      });
    }, { rootMargin: "360px 0px", threshold: 0.01 });

    videos.forEach((video) => lazyVideoObserver.observe(video));
  }

  function normalizeProgramPoster(video, poster) {
    const panel = video.closest("[data-program-panel]");
    const label = panel && panel.querySelector("[data-program-label]");
    const programName = (label && label.textContent || "").trim();
    if (programName === "COACH LESSON" || poster === "/posters/coaching.jpg") {
      return "/posters/program-coach-lesson.jpg";
    }
    if (
      programName === "OPEN GYM" ||
      poster === "/posters/floor.jpg" ||
      poster === "/posters/program-open-gym.jpg" ||
      poster === "/posters/program-open-gym-back.jpg"
    ) {
      return "/posters/program-open-gym-wallball.jpg";
    }
    return poster;
  }

  function patchMobileProgramMedia() {
    const isMobile = window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
    document.querySelectorAll("[data-program-frame] video").forEach((video) => {
      if (!video.dataset.productionOriginalSrc) {
        video.dataset.productionOriginalSrc = video.dataset.productionSrc || video.getAttribute("src") || "";
      }
      const normalizedPoster = normalizeProgramPoster(video, stripAssetVersion(video.getAttribute("poster") || ""));
      const versionedPoster = withAssetVersion(normalizedPoster);
      if (normalizedPoster && video.getAttribute("poster") !== versionedPoster) {
        video.setAttribute("poster", versionedPoster);
      }
      if (!video.dataset.productionOriginalPoster || video.dataset.productionOriginalPoster === "/posters/coaching.jpg") {
        video.dataset.productionOriginalPoster = normalizedPoster;
      }

      const originalSrc = canonicalVideoSource(video.dataset.productionOriginalSrc || "");
      const originalPoster = video.dataset.productionOriginalPoster;
      let posterLayer = video.parentElement && video.parentElement.querySelector(".production-mobile-program-poster");

      if (!isMobile) {
        if (originalPoster) video.setAttribute("poster", withAssetVersion(originalPoster));
        video.style.display = "";
        video.removeAttribute("aria-hidden");
        if (posterLayer) posterLayer.remove();
        if (video.dataset.productionLoaded === "true" || video.getAttribute("src")) {
          const versionedOriginalSrc = withAssetVersion(selectedVideoSource(originalSrc, video));
          if (originalSrc && video.getAttribute("src") !== versionedOriginalSrc) {
            removeVideoPosterFallback(video);
            video.setAttribute("src", versionedOriginalSrc);
            video.dataset.productionLoaded = "true";
            video.load();
          }
          if (video.getAttribute("src") && !video.hasAttribute("autoplay")) video.setAttribute("autoplay", "");
        }
        return;
      }

      if (!posterLayer) {
        posterLayer = document.createElement("div");
        posterLayer.className = "production-mobile-program-poster";
        video.insertAdjacentElement("beforebegin", posterLayer);
      }
      posterLayer.style.backgroundImage = originalPoster ? 'url("' + withAssetVersion(originalPoster) + '")' : "";
      posterLayer.style.backgroundPosition = video.style.objectPosition || "center center";
      video.pause();
      video.removeAttribute("autoplay");
      if (video.getAttribute("src")) {
        video.removeAttribute("src");
        video.load();
      }
      video.style.display = "none";
      video.setAttribute("aria-hidden", "true");
    });
  }

  function patchTrialForm() {
    if (!location.pathname.startsWith("/trial")) return;
    const form = document.querySelector("form");
    if (!form || form.dataset.productionPatched === "true") return;
    form.dataset.productionPatched = "true";

    const heading = Array.from(form.querySelectorAll("h2")).find((el) => /予約リクエスト/.test(el.textContent || ""));
    const notice = document.createElement("div");
    notice.className = "production-reservation-notice";
    notice.setAttribute("role", "status");
    notice.textContent =
      "サンプルの文章です。";
    (heading || form).insertAdjacentElement(heading ? "afterend" : "afterbegin", notice);

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.disabled = true;
      field.setAttribute("aria-disabled", "true");
    });

    const submit = form.querySelector('button[type="submit"]');
    if (submit) {
      submit.disabled = true;
      submit.classList.add("production-disabled-submit");
      submit.setAttribute("aria-disabled", "true");
      const label = submit.querySelector("span") || submit;
      label.textContent = "サンプル";
    }

    const consent = form.querySelector('input[name="consent"]');
    if (consent) {
      const label = consent.closest("label");
      if (label && !label.querySelector(".production-consent-links")) {
        const links = document.createElement("span");
        links.className = "production-consent-links";
        links.innerHTML = ' <a href="/privacy-policy/">プライバシーポリシー</a>、<a href="/terms/">利用規約</a>サンプル。';
        label.appendChild(links);
      }
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      notice.textContent =
        "サンプルの文章です。";
      return false;
    }, true);
  }

  function patchStaticRuntimeFallbacks() {
    if (document.body) document.body.classList.add("production-static-runtime");

    if (!document.body || !document.body.classList.contains("production-hero-intro-active")) {
      setMotionStage("ready");
    }

    document.querySelectorAll('[data-hero-grain-layer="true"]').forEach((layer) => {
      layer.style.opacity = "1";
      layer.style.visibility = "visible";
    });

    document.querySelectorAll("[data-hero-card] video, [data-op-cut] video").forEach((video) => {
      if (video.style.opacity === "0") video.style.opacity = "";
      video.style.filter = "none";
    });

    const sticky = Array.from(document.querySelectorAll("div.fixed.inset-x-0.bottom-0")).find((element) => {
      const text = element.textContent || "";
      return element.dataset.p0StickyPromo === "true" || text.includes("先着100名") || text.includes("Limited Entry");
    });
    if (sticky) {
      sticky.classList.remove("production-sticky-promo-visible");
      sticky.classList.add("opacity-0", "translate-y-8");
      sticky.setAttribute("aria-hidden", "true");
    }
  }

  function stickyPromoElement() {
    return Array.from(document.querySelectorAll("div.fixed.inset-x-0.bottom-0")).find((element) => {
      const text = element.textContent || "";
      return element.dataset.p0StickyPromo === "true" || text.includes("先着100名") || text.includes("Limited Entry");
    });
  }

  function setStickyPromoVisible(visible) {
    const sticky = stickyPromoElement();
    if (!sticky) return;
    sticky.classList.toggle("production-sticky-promo-visible", visible);
    sticky.classList.toggle("production-sticky-promo-hidden", !visible);
    sticky.classList.toggle("opacity-0", !visible);
    sticky.classList.toggle("translate-y-8", !visible);
    sticky.setAttribute("aria-hidden", visible ? "false" : "true");
  }

  let stickyPromoPatched = false;
  function patchStickyPromoVisibility() {
    const update = () => {
      const facility = document.querySelector("#facility");
      if (!facility) {
        setStickyPromoVisible(false);
        return;
      }
      const rect = facility.getBoundingClientRect();
      const visible = window.scrollY > 0 && rect.top <= window.innerHeight;
      setStickyPromoVisible(visible);
    };
    const scheduleUpdate = () => window.requestAnimationFrame(update);
    update();
    if (stickyPromoPatched) return;
    stickyPromoPatched = true;
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("hashchange", () => window.setTimeout(scheduleUpdate, 50), { passive: true });
    window.addEventListener("popstate", scheduleUpdate, { passive: true });
    window.addEventListener("pageshow", scheduleUpdate, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) scheduleUpdate();
    });
  }

  function resetHeroScrollMotion() {
    document.querySelectorAll('[data-hero-card="true"], [data-hero-copy="true"], [data-hero-bg-inner="true"]').forEach((element) => {
      element.style.opacity = "";
      element.style.transform = "";
      element.style.visibility = "";
    });
    document.querySelectorAll('[data-card-label-ui="true"], [data-card-watch-ui="true"]').forEach((element) => {
      element.style.removeProperty("opacity");
      element.style.removeProperty("transform");
      element.style.removeProperty("visibility");
    });
    document.querySelectorAll('[data-theme="hero"] [data-manifest-preview-word="true"]').forEach((element) => {
      element.style.setProperty("opacity", "0.02", "important");
      element.style.removeProperty("transform");
    });
    document.querySelectorAll('[data-theme="hero"] [data-manifest-preview-card="true"]').forEach((element) => {
      element.style.setProperty("opacity", "0", "important");
      element.style.removeProperty("transform");
    });
    const bg = document.querySelector('[data-hero-bg="true"]');
    if (bg) bg.style.opacity = "";
  }

  let heroScrollMotionPatched = false;
  function patchHeroScrollMotion() {
    const update = () => {
      const isHome = location.pathname === "/" || location.pathname === "/index.html";
      const wrapper = document.querySelector('[data-hero-wrapper="true"]');
      if (!isHome || !wrapper || prefersReducedMotion() || !window.matchMedia("(min-width: 1024px)").matches) {
        resetHeroScrollMotion();
        return;
      }

      const y = Math.max(0, -wrapper.getBoundingClientRect().top);
      const viewport = Math.max(1, window.innerHeight);
      const animationDistance = Math.max(1, wrapper.offsetHeight - viewport);
      const progress = clamp(y / animationDistance);
      const copyProgress = clamp(y / Math.max(1, animationDistance * 0.78));

      const bg = document.querySelector('[data-hero-bg="true"]');
      const bgInner = document.querySelector('[data-hero-bg-inner="true"]');
      if (bg) bg.style.opacity = "1";
      if (bgInner) {
        const bgOpacity = Math.max(0.05, 0.48 * (1 - Math.pow(progress, 1.4) * 1.2));
        const bgScale = 1.02 + Math.pow(progress, 0.8) * 0.12;
        const bgY = -6 * (1 - progress);
        bgInner.style.opacity = String(bgOpacity);
        bgInner.style.transform = "translate3d(0, " + bgY.toFixed(2) + "px, 0) scale(" + bgScale.toFixed(4) + ")";
      }

      const copy = document.querySelector('[data-hero-copy="true"]');
      if (copy) {
        const opacity = clamp(1 - Math.pow(copyProgress, 1.2));
        const translateY = -62 * clamp(copyProgress * 1.1);
        copy.style.opacity = String(opacity);
        copy.style.transform = "translate3d(0, " + translateY.toFixed(2) + "px, 0)";
        copy.style.visibility = opacity < 0.035 ? "hidden" : "visible";
      }

      document.querySelectorAll('[data-theme="hero"] [data-manifest-preview-word="true"]').forEach((element) => {
        const opacity = 0.02 + Math.pow(progress, 2.6) * 0.14;
        const translateY = 1.4 * progress;
        element.style.setProperty("opacity", opacity.toFixed(4), "important");
        element.style.transform = "translate3d(0, " + translateY.toFixed(2) + "px, 0)";
      });

      const manifestCards = Array.from(document.querySelectorAll('[data-theme="hero"] [data-manifest-preview-card="true"]'));
      const manifestMax = [0.324, 0.29, 0.257];
      const manifestStart = [0.54, 0.64, 0.72];
      manifestCards.forEach((card, index) => {
        const local = clamp((progress - (manifestStart[index] || 0.64)) / (1 - (manifestStart[index] || 0.64)));
        const opacity = Math.pow(local, 1.6) * (manifestMax[index] || 0.29);
        const translateX = (2 + index * 0.75) * local;
        const translateY = -9.3 + index * 3.45;
        card.style.setProperty("opacity", opacity.toFixed(4), "important");
        card.style.transform = "translate3d(" + translateX.toFixed(2) + "px, " + (translateY * local).toFixed(2) + "px, 0)";
      });

      const cards = Array.from(document.querySelectorAll('[data-hero-card="true"]'));
      const config = [
        { opacity: 0.42, x: -240, y: -24 },
        { opacity: 0.58, x: -158, y: -60 },
        { opacity: 0.36, x: -77, y: -33 },
      ];
      cards.forEach((card, index) => {
        const c = config[index] || config[1];
        const move = Math.pow(progress, 1.55);
        const fade = progress <= 0.35 ? 0 : clamp((progress - 0.35) / 0.65);
        const opacity = 1 - fade * (1 - c.opacity);
        const labelOpacity = 1 - clamp((progress - 0.42) / 0.34);
        const scale = progress <= 0.35
          ? 1 + (progress / 0.35) * 0.035
          : 1.035 - ((progress - 0.35) / 0.65) * 0.115;
        const waveY = -40 * Math.sin(Math.min(1, progress) * Math.PI);
        const x = c.x * move;
        const translateY = waveY + c.y * progress;
        card.style.opacity = String(opacity);
        card.style.transform = "translate3d(" + x.toFixed(2) + "px, " + translateY.toFixed(2) + "px, 0) scale(" + scale.toFixed(4) + ")";
        card.style.visibility = opacity < 0.08 ? "hidden" : "visible";
        card.querySelectorAll('[data-card-label-ui="true"], [data-card-watch-ui="true"]').forEach((label) => {
          label.style.setProperty("opacity", String(labelOpacity), "important");
          label.style.setProperty("transform", "translate3d(0, " + (-10 * (1 - labelOpacity)).toFixed(2) + "px, 0)", "important");
          label.style.setProperty("visibility", labelOpacity < 0.04 ? "hidden" : "visible", "important");
        });
      });
    };

    update();
    if (heroScrollMotionPatched) return;
    heroScrollMotionPatched = true;
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("hashchange", () => window.setTimeout(update, 50), { passive: true });
  }

  let heroIntroStarted = false;
  function releaseHeroIntroVideos(intro) {
    intro.querySelectorAll("video").forEach((video) => {
      invalidateVideoPlaybackAttempt(video);
      video.dataset.productionIntroReleased = "true";
      removeVideoPosterFallback(video);
      video.pause();
      if (video.getAttribute("src")) {
        video.dataset.productionSourceRemoval = "true";
        video.removeAttribute("src");
      }
      video.removeAttribute("poster");
      video.load();
      window.setTimeout(() => delete video.dataset.productionSourceRemoval, 250);
    });
  }

  function playHeroIntro() {
    if (heroIntroStarted) return;
    const intro = document.querySelector('[data-hero-intro="true"]');
    if (!intro || !document.body) return;
    heroIntroStarted = true;
    const isHome = location.pathname === "/" || location.pathname === "/index.html";
    const shouldPlay = isHome && (!location.hash || location.hash === "#hero");
    const finish = () => {
      releaseHeroIntroVideos(intro);
      document.body.classList.remove("production-hero-intro-active");
      document.body.classList.remove("production-hero-main-revealed");
      document.body.classList.add("production-hero-intro-complete");
      intro.setAttribute("aria-hidden", "true");
      setMotionStage("ready");
      patchHeroScrollMotion();
      patchStickyPromoVisibility();
      patchMedia();
      patchVideoLabels();
    };

    if (!shouldPlay || prefersReducedMotion()) {
      finish();
      return;
    }

    intro.setAttribute("aria-hidden", "true");
    intro.style.display = "";
    setMotionStage("running");
    document.body.classList.remove("production-hero-intro-complete");
    document.body.classList.remove("production-hero-main-revealed");
    document.body.classList.add("production-hero-intro-active");
    intro.querySelectorAll("video").forEach((video) => {
      video.muted = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("autoplay", "");
      restoreVideoSource(video);
      attemptVideoPlayback(video);
    });
    let introFinished = false;
    const revealMain = () => {
      if (!document.body || introFinished) return;
      document.body.classList.add("production-hero-main-revealed");
    };
    const finishOnce = () => {
      if (introFinished) return;
      introFinished = true;
      finish();
    };
    window.setTimeout(revealMain, 920);
    const scheduleFinish = () => window.setTimeout(finishOnce, 1450);
    if (document.readyState === "complete") {
      window.requestAnimationFrame(scheduleFinish);
    } else {
      window.addEventListener("load", scheduleFinish, { once: true });
      window.setTimeout(finishOnce, 3000);
    }
  }

  let fixedBrandOverlapPatched = false;
  function patchFixedBrandOverlap() {
    if (!document.body || fixedBrandOverlapPatched) return;
    fixedBrandOverlapPatched = true;
    const update = () => {
      const isHome = location.pathname === "/" || location.pathname === "/index.html";
      const hide = isHome && window.scrollY < Math.max(420, window.innerHeight * 0.82);
      document.body.classList.toggle("production-hide-fixed-brand", hide);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("hashchange", () => window.setTimeout(update, 50), { passive: true });
  }

  function mobileMenuPanel(nav) {
    return nav ? nav.parentElement : null;
  }

  function mobileMenuBackdrop(panel) {
    const header = panel && panel.closest('[data-global-header="true"]');
    if (!header) return null;
    return Array.from(header.children).find((element) => {
      if (element === panel) return false;
      const className = element.className || "";
      return className.includes("fixed") && className.includes("inset-0") && className.includes("lg:hidden");
    });
  }

  function setMobileMenuOpen(button, nav, open) {
    const panel = mobileMenuPanel(nav);
    const backdrop = mobileMenuBackdrop(panel);
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    document.body?.classList.toggle("production-mobile-menu-open", open);
    const label = button.querySelector("span");
    const menuLabel = open ? "Close" : "Menu";
    if (label && label.textContent !== menuLabel) label.textContent = menuLabel;
    if (panel) {
      panel.classList.toggle("production-mobile-menu-panel-open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
      panel.style.pointerEvents = open ? "auto" : "none";
      panel.style.visibility = open ? "visible" : "hidden";
      if ("inert" in panel) panel.inert = !open;
    }
    if (backdrop) {
      backdrop.classList.toggle("production-mobile-menu-backdrop-open", open);
      backdrop.setAttribute("aria-hidden", open ? "false" : "true");
      backdrop.style.pointerEvents = open ? "auto" : "none";
      backdrop.style.visibility = open ? "visible" : "hidden";
    }
  }

  function menuTargetForText(text) {
    const normalized = (text || "").toLowerCase();
    if (normalized.includes("facility")) return "/#facility";
    if (normalized.includes("programs")) return "/#programs";
    if (normalized.includes("coaches")) return "/#coaches";
    if (normalized.includes("料金") || normalized.includes("membership")) return "/#membership";
    return "";
  }

  function patchMenuA11y() {
    const header = document.querySelector('[data-global-header="true"]');
    const button = header && header.querySelector('button[aria-label="Open navigation menu"], button[aria-label="Close navigation menu"], button[aria-expanded]');
    const nav = header && header.querySelector('nav[aria-label="Mobile navigation"]');
    if (!button || !nav) return;
    if (!nav.id) nav.id = "mobile-navigation";
    button.setAttribute("aria-controls", nav.id);

    if (button.dataset.productionMenuPatched !== "true") {
      button.dataset.productionMenuPatched = "true";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        setMobileMenuOpen(button, nav, button.getAttribute("aria-expanded") !== "true");
      }, true);

      const panel = mobileMenuPanel(nav);
      const backdrop = mobileMenuBackdrop(panel);
      if (backdrop) {
        backdrop.addEventListener("click", () => setMobileMenuOpen(button, nav, false), true);
      }

      window.addEventListener("hashchange", () => setMobileMenuOpen(button, nav, false), { passive: true });

      nav.querySelectorAll("button").forEach((item) => {
        const target = menuTargetForText(item.textContent || "");
        if (!target || item.dataset.productionMenuItemPatched === "true") return;
        item.dataset.productionMenuItemPatched = "true";
        item.addEventListener("click", (event) => {
          event.preventDefault();
          setMobileMenuOpen(button, nav, false);
          if (!scrollToHomeSection(target)) window.location.href = target;
        }, true);
      });
    }

    nav.querySelectorAll('a[href^="/#"]').forEach((item) => {
      if (item.dataset.productionMenuAnchorPatched === "true") return;
      item.dataset.productionMenuAnchorPatched = "true";
      item.addEventListener("click", (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const target = item.getAttribute("href") || "";
        event.preventDefault();
        setMobileMenuOpen(button, nav, false);
        if (!scrollToHomeSection(target)) window.location.href = target;
      }, true);
    });

    setMobileMenuOpen(button, nav, button.getAttribute("aria-expanded") === "true");
  }

  function setFaqOpen(button, open) {
    const panel = button.nextElementSibling;
    const icon = button.querySelector("span:last-child");
    button.setAttribute("aria-expanded", open ? "true" : "false");
    if (icon) icon.textContent = open ? "−" : "+";
    if (!panel) return;
    panel.classList.toggle("production-faq-panel-open", open);
    panel.classList.toggle("production-faq-panel-closed", !open);
    panel.style.gridTemplateRows = open ? "1fr" : "0fr";
    panel.style.marginTop = open ? "1rem" : "0";
    panel.style.opacity = open ? "1" : "0.64";
  }

  function patchFaqFallback() {
    document.querySelectorAll('#faq article').forEach((article) => {
      if (article.dataset.productionFaqNative === "true") return;
      const button = article.querySelector(':scope > button[aria-expanded]');
      const panel = button ? button.nextElementSibling : null;
      if (!button || !panel) return;

      const details = document.createElement("details");
      details.className = "production-faq-details";
      details.open = false;
      details.dataset.productionFaqNative = "true";

      const summary = document.createElement("summary");
      summary.className = button.className + " production-faq-summary";
      summary.innerHTML = button.innerHTML;
      summary.setAttribute("aria-expanded", details.open ? "true" : "false");

      const content = document.createElement("div");
      content.className = panel.className + " production-faq-details-panel";
      while (panel.firstChild) content.appendChild(panel.firstChild);

      const sync = () => {
        summary.setAttribute("aria-expanded", details.open ? "true" : "false");
        const icon = summary.querySelector("span:last-child");
        if (icon) icon.textContent = details.open ? "−" : "+";
      };
      details.addEventListener("toggle", sync);
      sync();

      details.append(summary, content);
      button.replaceWith(details);
      panel.remove();
      article.dataset.productionFaqNative = "true";
    });
  }

  function ensureLegalFooter() {
    const siteFooter = document.querySelector("footer");
    let footer = document.querySelector(".production-legal-footer");
    if (!footer) {
      footer = document.createElement("nav");
      footer.className = "production-legal-footer";
      footer.setAttribute("aria-label", "Legal and site policy links");
    }
    const legalMarkup = legalLinks.map(([href, text]) => {
      const external = href.startsWith("http");
      return '<a href="' + href + '"' + (external ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + text + "</a>";
    }).join("");
    if (footer.innerHTML !== legalMarkup) footer.innerHTML = legalMarkup;
    const target = siteFooter || document.body;
    if (footer.parentElement !== target) target.appendChild(footer);
  }

  function applyHeaderFooterNavigationPolicy() {
    const isHomePage = location.pathname === "/" || location.pathname === "/index.html";
    document.querySelectorAll('[data-global-header="true"] a[href], footer a[href]').forEach((link) => {
      const href = link.getAttribute("href") || "";
      const inHeader = Boolean(link.closest('[data-global-header="true"]'));
      const footerLabel = (link.textContent || "").trim();
      if (!inHeader && /^(?:Facility|Programs|Coaches|Membership|Schedule|Access|Contact|Trial)$/i.test(footerLabel)) {
        link.textContent = footerLabel.toUpperCase();
      }
      const isInternalSection = /^\/?#[A-Za-z0-9_-]+$/.test(href);
      const isBooking = /^https:\/\/(?:fitone-shibuya-booking\.vercel\.app|fitone\.hacomono\.jp)\//.test(href);
      const isSocial = /^https:\/\/(?:www\.)?(?:instagram\.com|youtube\.com)\//.test(href);
      const isLegal = /^\/(?:privacy-policy|terms|cancellation-policy)\/?$/.test(href)
        || /^https:\/\/fitone\.notion\.site\/legal-information/.test(href);
      const opensNewTab = isBooking || (!inHeader && (isSocial || isLegal));

      if (opensNewTab) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      } else {
        link.removeAttribute("target");
        link.removeAttribute("rel");
      }

      if (!isHomePage || !isInternalSection || link.dataset.productionSmoothNavBound === "true") return;
      link.dataset.productionSmoothNavBound = "true";
      link.addEventListener("click", (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        scrollToHomeSection(href);
      }, true);
    });
  }

  function patchStickyPromoText() {
    document.querySelectorAll("div, span").forEach((element) => {
      if ((element.textContent || "").trim() !== "Limited Entry") return;
      element.classList.add("production-sticky-promo-label");
      element.style.color = "#050505";
    });
  }

  function patchNonInteractiveSectionGuards() {
    const interactiveSelector = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "label",
      '[role="button"]',
      '[role="link"]',
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");
    document.querySelectorAll("main section").forEach((section) => {
      if (section.dataset.productionClickGuardBound === "true") return;
      section.dataset.productionClickGuardBound = "true";
      ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"].forEach((eventName) => {
        section.addEventListener(eventName, (event) => {
          if (event.target?.closest?.(interactiveSelector)) return;
          if (eventName === "click") event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }, true);
      });
    });
  }

  function patch() {
    patchStaticRuntimeFallbacks();
    patchPageMeta();
    normalizeLinks();
    patchSemanticLinks();
    patchBookingLinks();
    patchCoachProfileLabels();
    ensureContactSection();
    ensureContactNavigation();
    patchAccessSection();
    patchMembershipHeading();
    patchFitCheckSection();
    patchScheduleSection();
    playHeroIntro();
    patchMedia();
    patchVideoLabels();
    patchLazyVideoLoading();
    patchMobileProgramMedia();
    patchTrialForm();
    patchMenuA11y();
    patchFaqFallback();
    ensureLegalFooter();
    applyHeaderFooterNavigationPolicy();
    patchStickyPromoText();
    patchStickyMembershipNavigation();
    patchStickyPromoVisibility();
    patchNonInteractiveSectionGuards();
    patchHeroScrollMotion();
    patchFixedBrandOverlap();
    document.body?.classList.add("production-runtime-enhanced");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", patch);
  } else {
    patch();
  }
  window.addEventListener("load", () => setTimeout(patch, 500));
  let queued = false;
  const observerOptions = { childList: true, subtree: true };
  const observerDeadline = Date.now() + 10000;
  let observer;
  const schedulePatch = () => {
    if (queued) return;
    queued = true;
    window.setTimeout(() => {
      queued = false;
      observer?.disconnect();
      patch();
      if (document.body && Date.now() < observerDeadline) {
        observer.observe(document.body, observerOptions);
      }
    }, 50);
  };
  observer = new MutationObserver(schedulePatch);
  if (document.body) {
    observer.observe(document.body, observerOptions);
    window.setTimeout(() => observer.disconnect(), 10000);
  }
  window.addEventListener("resize", schedulePatch, { passive: true });

  let mediaLifecycleBound = false;
  function refreshMediaPlayback() {
    document.querySelectorAll("video").forEach((video) => {
      if (
        video.paused &&
        video.hasAttribute("autoplay") &&
        video.getAttribute("src") &&
        video.dataset.productionPosterFallback !== "true" &&
        video.dataset.productionIntroReleased !== "true"
      ) {
        invalidateVideoPlaybackAttempt(video);
        delete video.dataset.productionPlaybackManaged;
      }
    });
    patchMedia();
    patchLazyVideoLoading();
  }

  function bindMediaLifecycle() {
    if (mediaLifecycleBound) return;
    mediaLifecycleBound = true;
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        document.querySelectorAll("video").forEach(clearVideoPlaybackTimers);
        return;
      }
      refreshMediaPlayback();
    });
    window.addEventListener("pageshow", refreshMediaPlayback);
    window.addEventListener("online", refreshMediaPlayback);
    const reducedMotionQuery = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionQuery?.addEventListener?.("change", refreshMediaPlayback);
  }

  bindMediaLifecycle();
})();

/* FITONE Phase 7 Safe Unit A reproducible JS fragment */
(() => {
  "use strict";

  const startupTimeoutMs = 8000;

  function showVideoFallback(video, reason) {
    const card = video.closest('[data-hero-card="true"]');
    if (!card) return;
    card.classList.add("phase7-video-fallback");
    card.dataset.phase7VideoFallbackReason = reason;
    video.pause();
  }

  function bindHeroVideo(video) {
    if (video.dataset.phase7FallbackBound === "true") return;
    video.dataset.phase7FallbackBound = "true";
    const card = video.closest('[data-hero-card="true"]');
    const fallbackLink = card?.querySelector(".production-video-static-fallback");
    if (!card || !fallbackLink) return;

    let startupTimer;
    const clearStartupTimer = () => window.clearTimeout(startupTimer);
    const attemptPlayback = () => {
      card.classList.remove("phase7-video-fallback");
      clearStartupTimer();
      startupTimer = window.setTimeout(() => {
        if (video.paused || video.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
          showVideoFallback(video, "startup-timeout");
        }
      }, startupTimeoutMs);
      try {
        const playback = video.play();
        playback?.catch?.((error) => {
          showVideoFallback(video, error?.name === "NotAllowedError" ? "autoplay-blocked" : "play-rejected");
        });
      } catch {
        showVideoFallback(video, "play-threw");
      }
    };

    video.addEventListener("playing", clearStartupTimer);
    video.addEventListener("error", () => showVideoFallback(video, "media-error"));
    video.addEventListener("stalled", () => showVideoFallback(video, "playback-stalled"));
    video.addEventListener("abort", () => showVideoFallback(video, "media-aborted"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showVideoFallback(video, "reduced-motion");
    } else {
      attemptPlayback();
    }
  }

  function bindFitCheckKeyboard(link) {
    if (link.dataset.phase7KeyboardBound === "true") return;
    link.dataset.phase7KeyboardBound = "true";
    link.addEventListener("keydown", (event) => {
      if (event.key !== " ") return;
      event.preventDefault();
      link.click();
    });
  }

  function enhancePhase7Ui() {
    document.querySelectorAll('[data-hero-card="true"] video').forEach(bindHeroVideo);
    document.querySelectorAll('[data-fitcheck-option="true"]').forEach(bindFitCheckKeyboard);
    document.body?.classList.add("production-runtime-enhanced");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhancePhase7Ui, { once: true });
  } else {
    enhancePhase7Ui();
  }
})();

/* FITONE Phase 7 hero playback and FIT CHECK corrections */
(() => {
  "use strict";

  function isPlaying(video) {
    return !video.paused && !video.ended && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;
  }

  function normalizeWatchControl(control, recoveryVisible) {
    if (!control) return;
    const label = "WATCH →";
    if (control.textContent !== label) control.textContent = label;
    if (control.hidden === recoveryVisible) control.hidden = !recoveryVisible;
    control.setAttribute("aria-hidden", recoveryVisible ? "false" : "true");
    control.style.pointerEvents = recoveryVisible ? "auto" : "none";
  }

  function syncHeroVideoUi(video) {
    const card = video.closest('[data-hero-card="true"]');
    if (!card) return;
    const playing = isPlaying(video);
    if (playing) {
      card.classList.remove("phase7-video-fallback");
      delete card.dataset.phase7VideoFallbackReason;
    }
    const recoveryVisible = card.classList.contains("phase7-video-fallback") || Boolean(card.querySelector(".production-video-replay"));
    normalizeWatchControl(card.querySelector('[data-card-watch-ui="true"]'), recoveryVisible);
    const staticFallback = card.querySelector(".production-video-static-fallback");
    if (staticFallback) {
      const text = staticFallback.querySelector("span");
      if (text && text.textContent !== "WATCH") text.textContent = "WATCH";
      if (staticFallback.hidden === recoveryVisible) staticFallback.hidden = !recoveryVisible;
      staticFallback.setAttribute("aria-hidden", recoveryVisible ? "false" : "true");
    }
    normalizeWatchControl(card.querySelector(".production-video-replay"), recoveryVisible);
  }

  function syncScrollLabels() {
    const wrapper = document.querySelector('[data-hero-wrapper="true"]');
    if (!wrapper || !window.matchMedia("(min-width: 1024px)").matches) return;
    const distance = Math.max(1, wrapper.offsetHeight - window.innerHeight);
    const progress = Math.max(0, -wrapper.getBoundingClientRect().top) / distance;
    document.querySelectorAll('[data-hero-card="true"] [data-card-label-ui="true"], [data-hero-card="true"] [data-card-watch-ui="true"]').forEach((label) => {
      if (progress > 0.16) {
        label.style.setProperty("opacity", "0", "important");
        label.style.setProperty("visibility", "hidden", "important");
        label.style.setProperty("pointer-events", "none", "important");
      } else {
        label.style.removeProperty("opacity");
        label.style.removeProperty("visibility");
        label.style.removeProperty("pointer-events");
      }
    });
  }

  function bindHeroCorrections() {
    document.querySelectorAll('[data-hero-card="true"] video').forEach((video) => {
      if (video.dataset.phase7WatchCorrectionBound !== "true") {
        video.dataset.phase7WatchCorrectionBound = "true";
        ["playing", "play", "pause", "ended", "waiting", "stalled", "error"].forEach((eventName) => {
          video.addEventListener(eventName, () => window.requestAnimationFrame(() => syncHeroVideoUi(video)));
        });
      }
      syncHeroVideoUi(video);
    });
    syncScrollLabels();
  }

  function bindFitCheckNavigation(link) {
    if (link.dataset.phase7FitCheckNavigationBound === "true") return;
    link.dataset.phase7FitCheckNavigationBound = "true";
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        const result = document.getElementById("fitcheck-result");
        if (!result) return;
        history.replaceState(history.state, "", "#fitcheck-result");
        result.focus({ preventScroll: true });
        const rect = result.getBoundingClientRect();
        const target = Math.max(0, rect.top + window.scrollY - Math.max(88, (window.innerHeight - rect.height) / 2));
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (window.__fitoneLenis?.scrollTo) {
          window.__fitoneLenis.scrollTo(target, reducedMotion ? { immediate: true } : { duration: 0.72 });
        } else {
          window.scrollTo({ top: target, behavior: reducedMotion ? "auto" : "smooth" });
        }
      }));
    });
  }

  function bindFitCheckCorrections() {
    document.querySelectorAll('#for-you [data-fitcheck-option="true"]').forEach(bindFitCheckNavigation);
  }

  function bindStickyPromoStability() {
    Array.from(document.querySelectorAll("div.fixed.inset-x-0.bottom-0")).forEach((element) => {
      const text = element.textContent || "";
      if (element.dataset.p0StickyPromo === "true" || text.includes("先着100名") || text.includes("Limited Entry")) {
        element.classList.add("production-sticky-promo");
      }
    });
  }

  const observer = new MutationObserver(bindHeroCorrections);
  const start = () => {
    bindHeroCorrections();
    bindFitCheckCorrections();
    bindStickyPromoStability();
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", syncScrollLabels, { passive: true });
    window.addEventListener("resize", syncScrollLabels, { passive: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();

/* FITONE P0 official-site corrections */
(() => {
  "use strict";
  const deadlineMs = Date.UTC(2026, 6, 31, 14, 59, 59);
  const assetQuery = (() => {
    const script = [...document.scripts].find((element) => element.src.includes("/assets/production-hardening.js"));
    return script ? new URL(script.src).search : "";
  })();

  function normalizeBrandLogos() {
    const createImage = ({ kind, src, alt, width, height, priority = false }) => {
      const image = document.createElement("img");
      image.dataset.p0BrandLogo = kind;
      image.src = src;
      image.alt = alt;
      image.width = width;
      image.height = height;
      image.decoding = "async";
      if (priority) image.fetchPriority = "high";
      return image;
    };
    const fixed = document.querySelector('[data-global-header="true"] a[aria-label="FITONE home"]');
    const fixedImage = fixed?.querySelector('[data-p0-brand-logo="fixed"]');
    if (fixed && (!fixedImage || fixedImage.getAttribute("src") !== `/assets/fitone-logo-white.png${assetQuery}` || fixed.children.length !== 1)) fixed.replaceChildren(createImage({ kind: "fixed", src: `/assets/fitone-logo-white.png${assetQuery}`, alt: "FITONE", width: 1881, height: 348 }));
    const hero = document.querySelector('[data-hero-logo="true"]');
    const lockup = hero?.querySelector('[data-p0-brand-lockup="hero"]');
    const fitone = lockup?.querySelector('[data-p0-brand-logo="hero-fitone"]');
    const shibuya = lockup?.querySelector('[data-p0-brand-logo="hero-shibuya"]');
    const validHero = lockup && hero.children.length === 1 && lockup.children.length === 2 && fitone?.getAttribute("src") === `/assets/fitone-logo-white.png${assetQuery}` && shibuya?.getAttribute("src") === `/assets/shibuya-logo-white.png${assetQuery}`;
    if (hero && !validHero) {
      const wrapper = document.createElement("span");
      wrapper.dataset.p0BrandLockup = "hero";
      wrapper.append(createImage({ kind: "hero-fitone", src: `/assets/fitone-logo-white.png${assetQuery}`, alt: "FITONE", width: 1881, height: 348, priority: true }));
      wrapper.append(createImage({ kind: "hero-shibuya", src: `/assets/shibuya-logo-white.png${assetQuery}`, alt: "SHIBUYA", width: 2368, height: 380, priority: true }));
      hero.replaceChildren(wrapper);
    }
  }

  function countdownParts(nowMs) {
    const ended = nowMs > deadlineMs;
    const remainingMs = Math.max(0, deadlineMs - nowMs);
    const totalMinutes = Math.ceil(remainingMs / 60000);
    return { ended, days: Math.floor(totalMinutes / 1440), hours: Math.floor((totalMinutes % 1440) / 60), minutes: totalMinutes % 60 };
  }

  function updateCountdown(nowMs = Date.now()) {
    const root = document.querySelector('[data-p0-countdown="true"]');
    if (!root) return;
    const state = countdownParts(nowMs);
    root.querySelectorAll("[data-p0-countdown-part]").forEach((element) => {
      const key = element.dataset.p0CountdownPart;
      element.textContent = String(state[key]).padStart(2, "0");
    });
    root.dataset.p0CountdownEnded = String(state.ended);
    root.hidden = state.ended;
    root.setAttribute("aria-hidden", String(state.ended));
    document.documentElement.dataset.p0PresaleEnded = String(state.ended);
    document.querySelectorAll("[data-p0-presale-price]").forEach((element) => {
      element.textContent = state.ended ? element.dataset.p0GeneralPrice : element.dataset.p0PresaleOriginal;
    });
    document.querySelectorAll("[data-p0-session-price]").forEach((element) => {
      const value = state.ended ? element.dataset.p0GeneralPrice : element.dataset.p0PresaleOriginal;
      if (value) element.textContent = `${value}`;
    });
    document.querySelectorAll("[data-p0-presale-label]").forEach((element) => {
      element.textContent = state.ended ? element.dataset.p0EndedLabel : element.dataset.p0PresaleLabelText;
    });
  }

  function normalizeWatch() {
    document.querySelectorAll(".production-video-replay").forEach((control) => {
      if (control.textContent !== "WATCH →") control.textContent = "WATCH →";
      if (!control.getAttribute("aria-label")) control.setAttribute("aria-label", "サンプル");
    });
  }

  function bindMobileMembershipPlans() {
    const detail = document.querySelector('[data-p0-mobile-membership-detail="true"]');
    const buttons = [...document.querySelectorAll("[data-p0-membership-plan-selector]")];
    const sources = [...document.querySelectorAll('[data-membership-plan="true"][data-membership-plan-index]')];
    if (!detail || buttons.length !== 3 || sources.length < 3 || detail.dataset.p0MembershipBound === "true") return;
    detail.dataset.p0MembershipBound = "true";

    const show = (button) => {
      const plan = button.dataset.p0MembershipPlanSelector;
      const index = { base: "0", pro: "1", unlimited: "2" }[plan];
      const source = sources.find((article) => article.dataset.membershipPlanIndex === index);
      if (!source) return;
      buttons.forEach((candidate) => candidate.setAttribute("aria-pressed", String(candidate === button)));
      detail.innerHTML = source.innerHTML;
      updateCountdown();
    };

    buttons.forEach((button) => button.addEventListener("click", () => show(button)));
    show(buttons.find((button) => button.getAttribute("aria-pressed") === "true") || buttons[1]);
  }

  function bindSubplanKeyboardLinks() {
    document.querySelectorAll('a.p0-subplan[href]').forEach((link) => {
      if (link.dataset.p0KeyboardBound === "true") return;
      link.dataset.p0KeyboardBound = "true";
      link.addEventListener("keydown", (event) => {
        if (event.key !== " " && event.key !== "Spacebar") return;
        event.preventDefault();
        link.click();
      });
    });
  }

  const start = () => {
    normalizeBrandLogos();
    updateCountdown();
    normalizeWatch();
    bindMobileMembershipPlans();
    bindSubplanKeyboardLinks();
    window.setInterval(updateCountdown, 30_000);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) updateCountdown(); });
    new MutationObserver(() => { normalizeWatch(); normalizeBrandLogos(); }).observe(document.body, { childList: true, subtree: true });
  };
  window.__fitoneCountdown = { deadlineMs, countdownParts, update: updateCountdown };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
