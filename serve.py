# 学習用ローカルサーバー: 静的配信 + お問い合わせの模擬API（受け取った内容を表示するだけ。外部には送らない）
import http.server, json, os

class H(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        body = self.rfile.read(int(self.headers.get("Content-Length", 0)))
        print("\n[模擬API]", self.path, body.decode("utf-8", "replace"))
        self.send_response(200 if self.path == "/api/contact" else 404)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps({"ok": True}).encode())

os.chdir(os.path.join(os.path.dirname(__file__), "site"))
print("http://localhost:8765/")
http.server.ThreadingHTTPServer(("127.0.0.1", 8765), H).serve_forever()
