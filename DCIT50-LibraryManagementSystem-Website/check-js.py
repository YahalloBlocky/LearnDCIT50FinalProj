"""Parse the site's JavaScript with esprima and report syntax errors."""
import io
import os
import re
import sys

import esprima

BASE = os.path.dirname(os.path.abspath(__file__))

FILES = (
    [os.path.join("src", "content", f) for f in sorted(os.listdir(os.path.join(BASE, "src", "content"))) if f.endswith(".js")]
    + [os.path.join("public", "js", f) for f in sorted(os.listdir(os.path.join(BASE, "public", "js"))) if f.endswith(".js")]
)

sys.stdout.reconfigure(encoding="utf-8")
bad = 0
for rel in FILES:
    path = os.path.join(BASE, rel)
    text = io.open(path, encoding="utf-8").read()
    # Source content modules use `export default x;` - blank it for parsing.
    text = re.sub(r"(?m)^export\s+default\s+\w+\s*;\s*$", "", text)
    try:
        esprima.parseScript(text)
        print("OK   %s" % rel)
    except Exception as exc:
        bad += 1
        print("FAIL %s: %s" % (rel, exc))
        err = getattr(exc, "description", "")
        line = getattr(exc, "lineNumber", 0)
        col = getattr(exc, "column", 0)
        if line:
            body = io.open(path, encoding="utf-8").read().split("\n")
            if 0 < line <= len(body):
                print("     line %s col %s: %r" % (line, col, body[line - 1][:160]))
print("\n%d failing file(s)" % bad)
