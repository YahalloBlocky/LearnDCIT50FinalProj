"""Tiny static server for local development (no caching)."""

import http.server
import os
import socketserver

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = 8081


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    def log_message(self, fmt, *args):
        pass


socketserver.TCPServer.allow_reuse_address = True
with http.server.ThreadingHTTPServer(("127.0.0.1", PORT), Handler) as httpd:
    print("Serving %s at http://127.0.0.1:%d/public/index.html" % (ROOT, PORT))
    httpd.serve_forever()
