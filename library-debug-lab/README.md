# Library Debug Lab (DCIT 50, Group 1)

A beginner-friendly debugging classroom built on our real Library Management System code.
Plain HTML, CSS and JavaScript. No install, no build step, no backend.

## Files
- `index.html` – the page shell
- `css/style.css` – all styling (colors are variables at the top, light and dark mode)
- `js/data.js` – categories, quick lessons, exercises 1-14, and the answer checker (`chk`)
- `js/exercises-more.js` – exercises 15-24
- `js/course.js` – the "learn from scratch" course (13 lessons) and the Learn page
- `js/walk.js` + `js/walkthrough.js` – the full code walkthrough: all 23 Java files, cut into parts with explanations (walkthrough.js is generated, so the code is exact)
- `reference/` – untouched copies of the original Java source and data files
- `tools/build-walkthrough.js` – rebuilds walkthrough.js from the Java source; the explanations are written inside this file
- `js/app.js` – dashboard, practice, review, exercise page, router

## Run it
Double-click `index.html`, or in VS Code use the Live Server extension.

## Deploy on Vercel
1. Put this folder on GitHub (or keep it local).
2. vercel.com → Add New → Project → import it. Framework preset: **Other**. No build command. Output directory: leave empty.
3. Deploy. (CLI option: run `npx vercel` inside this folder.)

## Add or edit an exercise
Open `js/exercises-more.js` and copy one `E(...)` block. The fields in order are:
id, category (A-G), level, title, description, source file, broken code, expected, actual, hints[], must-match regexes[], must-not-match regexes[], solution, explanation[6].
In the regexes, all spaces and line breaks are removed first, and comments are ignored. Write them without spaces.

## Important
- The answer check is **simulated** (pattern rules). It does NOT run javac. Always compile the real project.
- Progress is saved in the browser (localStorage) and is per device and browser.
- The original Java project was never modified. Bugs exist only in these files.

## Change the walkthrough
Edit an explanation in `tools/build-walkthrough.js`, then run:
`node tools/build-walkthrough.js reference/src`
If the Java code changes, replace the files in `reference/src` first. The script warns if a part's starting line can no longer be found.
