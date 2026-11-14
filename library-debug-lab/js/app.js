// App screens: dashboard, practice, review, exercise page, router.
const $ = s => document.querySelector(s), app = $('#app');
const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
let S = {}; try { S = JSON.parse(localStorage.getItem('lmsdbg') || '{}') } catch (e) { }
const st = id => S[id] || (S[id] = { ok: false, bad: 0, hints: 0, rev: false, pts: 0 });
const save = () => { try { localStorage.setItem('lmsdbg', JSON.stringify(S)) } catch (e) { } };
const done = () => EX.filter(e => st(e.id).ok);
const pts = () => EX.reduce((a, e) => a + st(e.id).pts, 0);
const card = e => `<a class="card ex" href="#ex/${e.id}"><span class="tag ${e.l}">${e.l}</span><span class="tag">${CATS[e.c]}</span>${st(e.id).ok ? '✅' : st(e.id).bad || st(e.id).rev ? '🔁' : ''}<h3>${e.t}</h3><span class="mu">${e.d}</span></a>`;
function home() {
    const d = done().length, att = EX.reduce((a, e) => a + st(e.id).bad + (st(e.id).ok ? 1 : 0), 0), nx = EX.find(e => !st(e.id).ok);
    app.innerHTML = `<h1>Debug our Library Management System</h1><p>Every exercise uses real classes from our project, with one planted bug. Read the code, find the bug, fix it, and learn why.</p>
 <div class="warn">⚠️ <b>Simulated check, not a real Java compiler.</b> Your answer is checked by rules that look for the right fix. It never runs javac. Always compile the real project to be sure. Progress is saved in this browser only (clearing browser data erases it).</div>
 <div class="g st"><div class="card"><div class="big">${pts()}</div><span class="mu">points</span></div><div class="card"><div class="big">${d}/${EX.length}</div><span class="mu">solved</span></div><div class="card"><div class="big">${att ? Math.round(d / att * 100) : 0}%</div><span class="mu">accuracy</span></div></div>
 <div class="card"><h2>Course</h2>${Object.keys(rd()).length}/${COURSE.length} lessons read · ${Object.keys(wr()).length}/${WALK.length} code files read. <a href="#learn">Open Learn →</a></div><div class="card"><h2>By category</h2>${Object.keys(CATS).map(c => { const l = EX.filter(e => e.c === c), k = l.filter(e => st(e.id).ok).length; return `<div>${CATS[c]} <span class="mu">${k}/${l.length}</span><div class="bar"><i style="width:${k / l.length * 100}%"></i></div></div>` }).join('')}</div>
 <div class="card"><h2>By level</h2>${['Beginner', 'Intermediate', 'Advanced'].map(l => { const a = EX.filter(e => e.l === l); return `<span class="tag ${l}">${l}: ${a.filter(e => st(e.id).ok).length}/${a.length}</span>` }).join('')}</div>
 <div class="row">${nx ? `<a href="#ex/${nx.id}"><button class="p">Next: ${nx.t}</button></a>` : '🎉 All solved!'}<a href="#practice"><button>All exercises</button></a><button id="rs">Reset progress</button></div>`;
    $('#rs').onclick = () => { if (confirm('Erase all progress?')) { S = {}; save(); home() } }
}
function practice(c0) {
    let c = c0 || '', l = '';
    const draw = () => { const L = EX.filter(e => (!c || e.c === c) && (!l || e.l === l)); $('#ls').innerHTML = L.map(card).join('') || '<p>No exercises match.</p>'; $('#rn').onclick = () => { const p = L.filter(e => !st(e.id).ok), q = p.length ? p : L; if (q.length) location.hash = 'ex/' + q[Math.floor(Math.random() * q.length)].id } };
    app.innerHTML = `<h1>Practice</h1><div class="row"><select id="sc"><option value="">All categories</option>${Object.keys(CATS).map(k => `<option value="${k}" ${k === c ? 'selected' : ''}>${k}. ${CATS[k]}</option>`).join('')}</select><select id="sl"><option value="">All levels</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select><button class="p" id="rn">🎲 Random challenge</button></div><div id="ls"></div>`;
    $('#sc').onchange = e => { c = e.target.value; draw() }; $('#sl').onchange = e => { l = e.target.value; draw() }; draw()
}
function review() { const L = EX.filter(e => !st(e.id).ok && (st(e.id).bad || st(e.id).rev)); app.innerHTML = '<h1>Review mistakes</h1>' + (L.length ? '<p class="mu">Exercises you missed or revealed. Try them again.</p>' + L.map(card).join('') : '<p>Nothing to review yet. Wrong or revealed answers will appear here.</p>') }
function ex(id) {
    const e = EX.find(x => x.id === id); if (!e) return location.hash = 'practice'; const s = st(id);
    app.innerHTML = `<a href="#practice">← Back</a><h1>${e.t}</h1><span class="tag ${e.l}">${e.l}</span><span class="tag">${CATS[e.c]}</span>
 <details class="card"><summary><b>📖 Quick lesson: ${CATS[e.c]}</b></summary><p>${LESS[e.c]}</p></details>
 <p>${e.d}</p><p class="mu">Original file: <code>${e.src}</code>. This is a changed copy. The real project is untouched.</p>
 <div class="g"><div class="card"><b>✅ Expected</b><br>${e.exp}</div><div class="card"><b>❌ Actual</b><br>${e.act}</div></div>
 <textarea id="cd" spellcheck="false" aria-label="Code editor">${esc(e.code)}</textarea>
 <div class="row"><button class="p" id="ck">Check my answer</button><button id="ht">💡 Hint</button><button id="sv">Show solution</button><button id="rt">Reset code</button></div><div id="hs"></div><div id="fb"></div><div id="xp"></div>`;
    const hs = () => { $('#hs').innerHTML = e.h.slice(0, s.hints).map((h, i) => `<div class="card">💡 Hint ${i + 1}: ${h}</div>`).join(''); $('#ht').disabled = s.hints >= e.h.length };
    const exp = () => { $('#xp').innerHTML = '<div class="card"><h2>Explanation</h2><dl>' + e.x.map((t, i) => `<dt>${LAB[i]}</dt><dd>${t}</dd>`).join('') + '</dl><h3>Correct code</h3><pre>' + esc(e.sol) + '</pre></div><div class="row"><a href="#practice"><button>More exercises</button></a><a href="#ex/' + (EX[EX.indexOf(e) + 1] || EX[0]).id + '"><button class="p">Next →</button></a></div>' };
    hs(); $('#ht').onclick = () => { s.hints++; save(); hs() };
    $('#rt').onclick = () => { $('#cd').value = e.code; $('#fb').innerHTML = '' };
    $('#ck').onclick = () => { const m = chk(e, $('#cd').value); if (!m) { if (!s.ok && !s.rev) s.pts = Math.max(4, 10 - 2 * s.hints); s.ok = true; save(); $('#fb').innerHTML = `<div class="fb ok">✅ Correct (simulated check). +${s.pts} points. Remember to compile the real project to be sure.</div>`; exp() } else { s.bad++; save(); $('#fb').innerHTML = `<div class="fb no">❌ ${m} Try a hint!</div>` } };
    $('#sv').onclick = () => { if (!s.ok) s.rev = true; save(); $('#cd').value = e.sol; $('#fb').innerHTML = '<div class="fb no">Solution shown. No points for this one. It is saved in Review so you can try again.</div>'; exp() }
}
const nv = $('nav'), mb = $('#mb');
mb.onclick = () => { const o = nv.classList.toggle('open'); mb.setAttribute('aria-expanded', o); mb.textContent = o ? '✕' : '☰' };
function closeNav() { nv.classList.remove('open'); mb.setAttribute('aria-expanded', false); mb.textContent = '☰' }
function route() { closeNav(); const h = location.hash.slice(1) || 'home', [p, a] = h.split('/'); document.querySelectorAll('nav a').forEach(x => x.classList.toggle('on', x.getAttribute('href') === '#' + (p === 'ex' ? 'practice' : (p === 'lesson' || p === 'walk') ? 'learn' : p))); window.scrollTo(0, 0); ({ home, learn, practice: () => practice(a), review, lesson: () => lesson(a), walk: () => walk(a), ex: () => ex(a) }[p] || home)() }
addEventListener('hashchange', route); route();