/**
 * Self-contained GitHub README SVG generator.
 * No dependencies, credentials, external fonts, runtime fetches, or unsafe scripts.
 * Run: node scripts/generate-banners.mjs
 * Daily refresh changes the date and the editorial security line.
 */
import fs from 'node:fs';
import path from 'node:path';

const profiles = {
  dark:  { bg:'#070d15', surface:'#0b1620', panel:'#101f29', edge:'#203a41', grid:'#18313c', text:'#f3f8f9', muted:'#8ca6af', accent:'#69efba', cyan:'#5fd9e9', danger:'#e9ae68' },
  light: { bg:'#e9f1f3', surface:'#f6fafb', panel:'#e4eff0', edge:'#b4cfd0', grid:'#d1e4e3', text:'#10292c', muted:'#4a7074', accent:'#087e62', cyan:'#167f90', danger:'#ad6729' },
};
const signals = [
  'Observe carefully. Think adversarially.',
  'Understand the attack. Strengthen the defense.',
  'Security starts with asking better questions.',
  'Analyze. Experiment. Document. Improve.',
  'Make the invisible attack surface visible.',
  'From packet traces to threat models.',
  'Curiosity drives stronger security.'
];
const now = new Date();
const date = now.toISOString().slice(0,10);  // UTC, deterministic all day
const day = Math.floor(Date.parse(`${date}T00:00:00Z`) / 86400000);
const signal = signals[((day % signals.length) + signals.length) % signals.length];
const xml = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;'}[c]));

function render(themeName, p) {
 const bars = [13,30,22,41,18,51,37,24,45,29,17,40,32,49,21,27];
 const barSvg = bars.map((v,i) => `<rect x="${1036+i*12}" y="${207-v}" width="5" height="${v}" rx="2" fill="${p.accent}" opacity="${.25+(i%4)*.12}"><animate attributeName="height" values="${v};${Math.max(6,v-11)};${v}" dur="${2.4+(i%5)*.4}s" begin="-${i*.15}s" repeatCount="indefinite"/><animate attributeName="y" values="${207-v};${207-Math.max(6,v-11)};${207-v}" dur="${2.4+(i%5)*.4}s" begin="-${i*.15}s" repeatCount="indefinite"/></rect>`).join('');
 const vertical = Array.from({length:13},(_,i)=>`<path d="M${i*100+40} 0v280"/>`).join('');
 const horizontal = Array.from({length:5},(_,i)=>`<path d="M0 ${i*60+26}h1280"/>`).join('');
 return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="280" viewBox="0 0 1280 280" role="img" aria-labelledby="title desc">
<title id="title">Ryad Dermouche — animated cybersecurity profile</title>
<desc id="desc">Cybersecurity, networks, systems, offensive and defensive security. Daily signal: ${xml(signal)}. Refreshed ${date} UTC.</desc>
<defs>
  <linearGradient id="background" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${p.bg}"/><stop offset="1" stop-color="${p.surface}"/></linearGradient>
  <linearGradient id="rule"><stop stop-color="${p.accent}" stop-opacity=".03"/><stop offset=".5" stop-color="${p.accent}"/><stop offset="1" stop-color="${p.cyan}" stop-opacity=".06"/></linearGradient>
  <clipPath id="typing"><rect x="70" y="90" width="650" height="60"><animate attributeName="width" values="0;650;650;0" keyTimes="0;.26;.93;1" dur="13s" repeatCount="indefinite"/></rect></clipPath>
</defs>
<rect width="1280" height="280" rx="18" fill="url(#background)"/>
<g stroke="${p.grid}" opacity=".19" stroke-width="1">${vertical}${horizontal}</g>
<rect x="12" y="12" width="1256" height="256" rx="13" fill="none" stroke="${p.edge}"/>
<path d="M26 12 H1254" stroke="url(#rule)" stroke-width="2"><animate attributeName="opacity" values=".3;1;.3" dur="6s" repeatCount="indefinite"/></path>
<g>
 <circle cx="42" cy="37" r="5" fill="#fa6d70"/><circle cx="61" cy="37" r="5" fill="#e9c46a"/><circle cx="80" cy="37" r="5" fill="#57c7a5"/>
 <text x="105" y="42" font-family="ui-monospace,SFMono-Regular,Consolas,monospace" font-size="15" fill="${p.muted}">ryad@security — ~/profile</text>
 <circle cx="1114" cy="37" r="4" fill="${p.accent}"/><text x="1125" y="42" font-family="ui-monospace,SFMono-Regular,Consolas,monospace" font-size="14" fill="${p.accent}">SYSTEM READY</text>
</g>
<line x1="27" y1="57" x2="1253" y2="57" stroke="${p.edge}"/>
<text x="70" y="85" font-family="ui-monospace,SFMono-Regular,Consolas,monospace" font-size="17" fill="${p.accent}">$ whoami</text>
<g clip-path="url(#typing)"><text x="70" y="143" font-family="DejaVu Sans Mono,Consolas,monospace" font-size="48" letter-spacing="-2" font-weight="bold" fill="${p.text}">RYAD DERMOUCHE</text></g>
<rect x="490" y="104" width="11" height="41" rx="2" fill="${p.accent}"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="1.2s" repeatCount="indefinite"/></rect>
<text x="72" y="175" font-family="ui-monospace,SFMono-Regular,Consolas,monospace" font-weight="600" font-size="19" fill="${p.cyan}">CYBERSECURITY   /   NETWORKS   /   SYSTEMS</text>
<text x="72" y="209" font-family="ui-monospace,SFMono-Regular,Consolas,monospace" font-size="15" fill="${p.muted}">[ OFFENSIVE SECURITY ]   [ DEFENSIVE SECURITY ]   [ GRC ]</text>
<text x="72" y="246" font-family="ui-monospace,SFMono-Regular,Consolas,monospace" font-size="14" fill="${p.accent}">&gt; ${xml(signal)}</text>
<line x1="984" y1="75" x2="984" y2="252" stroke="${p.edge}"/>
<text x="1025" y="92" font-family="ui-monospace,Consolas,monospace" font-size="14" fill="${p.muted}">SECURITY SIGNAL</text>
<circle cx="1148" cy="144" r="44" stroke="${p.edge}" stroke-width="1.5" fill="none"/>
<circle cx="1148" cy="144" r="26" stroke="${p.edge}" stroke-width="1" fill="none"/>
<circle cx="1148" cy="144" r="8" fill="${p.accent}" opacity=".72"/>
<circle cx="1148" cy="144" r="8" fill="none" stroke="${p.accent}" stroke-width="2"><animate attributeName="r" values="8;66" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="4s" repeatCount="indefinite"/></circle>
<circle cx="1148" cy="144" r="8" fill="none" stroke="${p.cyan}" stroke-width="2"><animate attributeName="r" values="8;66" dur="4s" begin="-2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="4s" begin="-2s" repeatCount="indefinite"/></circle>
${barSvg}
<text x="1028" y="237" font-family="ui-monospace,Consolas,monospace" font-size="12" fill="${p.muted}">UPDATED ${date} UTC</text>
</svg>`;
}
for (const [themeName,p] of Object.entries(profiles)) {
  const output = path.join('assets', `banner-${themeName}.svg`);
  fs.mkdirSync(path.dirname(output),{recursive:true});
  fs.writeFileSync(output,render(themeName,p)+'\n','utf8');
  console.log(`Generated ${output} for ${date}`);
}
