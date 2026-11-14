// Full code walkthrough: every file of the Java project, split into small parts with explanations.
const wr=()=>{try{return JSON.parse(localStorage.getItem('lmswalk')||'{}')}catch(e){return{}}};
const wesc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function srcHtml(p){return '<pre class="src">'+p.c.split('\n').map((l,i)=>`<i>${p.a+i}</i>${wesc(l)}`).join('\n')+'</pre>'}
function walk(i){
 if(i===undefined||i===''){const r=wr(),pk={};WALK.forEach((f,k)=>(pk[f.file.split('/')[0]]=pk[f.file.split('/')[0]]||[]).push(k));
  const lines=WALK.reduce((a,f)=>a+f.lines,0);
  app.innerHTML=`<a href="#learn">← Learn</a><h1>Full code walkthrough</h1><p>Every file of our Library Management System (${WALK.length} files, ${lines} lines). Each file is cut into small parts. Under each part you get a plain-English explanation: what it does, why it is there, and what the symbols mean. The code is copied exactly from the project.</p><p class="mu">Tip: read in order. The list below goes from small and simple to bigger. ${Object.keys(r).length}/${WALK.length} files read.</p><div class="row"><a href="#walk/0"><button class="p">Start with file 1</button></a></div>`+
  Object.keys(pk).map(k=>`<h2>${k}/</h2>`+pk[k].map(n=>`<a class="card ex" href="#walk/${n}"><b>${r[n]?'<span class="done">✓</span> ':''}${n+1}. ${WALK[n].file.split('/')[1]}</b> <span class="mu">${WALK[n].lines} lines, ${WALK[n].parts.length} parts</span></a>`).join('')).join('');return}
 i=+i;const f=WALK[i];if(!f)return location.hash='walk';const r=wr();
 app.innerHTML=`<a href="#walk">← All files</a><div class="mu">File ${i+1} of ${WALK.length}</div><h1>${f.file.split('/')[1]}</h1><p class="mu">Package <code>${f.file.split('/')[0]}</code> · original: <code>src/${f.file}</code> · ${f.lines} lines</p><div class="lsn">${f.sum}</div>`+
 f.parts.map((p,k)=>`<div class="card"><h3>Part ${k+1}: ${p.t} <span class="mu">(lines ${p.a}–${p.a+p.c.split('\n').length-1})</span></h3>${srcHtml(p)}<div class="lsn">${p.n}</div></div>`).join('')+
 `<div class="row"><button id="wd" class="p">${r[i]?'✓ Marked as read':'Mark file as read'}</button>${i?`<a href="#walk/${i-1}"><button>← Previous file</button></a>`:''}${i<WALK.length-1?`<a href="#walk/${i+1}"><button class="p">Next file →</button></a>`:'<a href="#practice"><button class="p">Go practice →</button></a>'}</div>`;
 $('#wd').onclick=()=>{const q=wr();q[i]=1;try{localStorage.setItem('lmswalk',JSON.stringify(q))}catch(e){}$('#wd').textContent='✓ Marked as read'}}
