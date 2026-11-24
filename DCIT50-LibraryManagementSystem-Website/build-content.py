"""
Build script: bundles the ES-module content files in src/content/ into a single
non-module script (public/js/content-data.js) that sets window.DCIT50Content.

Run from anywhere:  python build-content.py
"""

import io
import os
import re

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, "src", "content")
OUT = os.path.join(BASE, "public", "js", "content-data.js")

FILES = [
    ("javaFundamentals", "java-fundamentals.js"),
    ("codeExplorer", "code-explorer.js"),
    ("systemWalkthrough", "system-walkthrough.js"),
    ("practiceQa", "practice-questions.js"),
    ("quizzes", "quizzes.js"),
    ("debugging", "debugging.js"),
]

header = """/**
 * DCIT 50 Library Management System - Learning Hub
 * Content data bundle (non-module). Sets window.DCIT50Content.
 *
 * GENERATED FILE - do not edit by hand.
 * Edit src/content/*.js and run: python build-content.py
 */
window.DCIT50Content = window.DCIT50Content || {};

(function () {
"""

footer = """
})();
"""

parts = [header]
for name, filename in FILES:
    path = os.path.join(SRC, filename)
    text = io.open(path, encoding="utf-8", newline="").read()
    # Drop the trailing "export default <name>;" statement.
    text = re.sub(r"\n?\s*export\s+default\s+\w+\s*;?\s*$", "", text)
    if "export default" in text:
        raise SystemExit("Unexpected export statement left in " + filename)
    parts.append("\n/* ===== %s ===== */\n" % filename)
    parts.append(text)
    parts.append("\nwindow.DCIT50Content.%s = %s;\n" % (name, name))

parts.append(footer)

bundle = "".join(parts)
io.open(OUT, "w", encoding="utf-8", newline="").write(bundle)
print("Wrote %s (%d characters)" % (OUT, len(bundle)))
