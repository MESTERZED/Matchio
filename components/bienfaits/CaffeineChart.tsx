'use client';

import { useEffect, useRef, useState } from 'react';

const coffee = [0, 60, 110, 145, 165, 175, 168, 140, 95, 55, 30, 18, 10];
const matcha = [0, 25, 55, 80, 95, 105, 110, 108, 102, 92, 78, 60, 45];

const labels = ['0', '30 min', '1h', '1h30', '2h', '2h30', '3h', '3h30', '4h', '4h30', '5h', '5h30', '6h'];

export function CaffeineChart() {
 const ref = useRef<SVGSVGElement>(null);
 const [progress, setProgress] = useState(0);

 useEffect(() => {
 const node = ref.current;
 if (!node) return;
 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry?.isIntersecting) {
 let start: number | null = null;
 const duration = 2000;
 const step = (now: number) => {
 if (!start) start = now;
 const elapsed = now - start;
 const p = Math.min(1, elapsed / duration);
 setProgress(1 - Math.pow(1 - p, 4));
 if (p < 1) requestAnimationFrame(step);
 };
 requestAnimationFrame(step);
 observer.disconnect();
 }
 },
 { threshold: 0.4 },
 );
 observer.observe(node);
 return () => observer.disconnect();
 }, []);

 const max = 200;
 const W = 800;
 const H = 320;
 const PAD_L = 50;
 const PAD_B = 40;
 const PAD_T = 20;
 const PAD_R = 20;

 const xStep = (W - PAD_L - PAD_R) / (coffee.length - 1);
 const yScale = (H - PAD_T - PAD_B) / max;

 const buildPath = (data: number[]) => {
 return data
 .map((v, i) => {
 const visible = Math.min(coffee.length - 1, (data.length - 1) * progress);
 const renderV = i <= visible ? v : 0;
 const x = PAD_L + i * xStep;
 const y = H - PAD_B - renderV * yScale;
 return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
 })
 .join(' ');
 };

 return (
 <div className="bg-cream-dark/30 p-6 md:p-10 border border-cream-dark/50">
 <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
 <div>
 <p className="eyebrow">Caféine plasmatique sur 6 heures</p>
 <h3 className="mt-2 font-display italic text-2xl md:text-3xl text-matcha-deep">
 Café vs Matcha, la différence en courbe
 </h3>
 </div>
 <div className="flex gap-5 text-xs">
 <span className="flex items-center gap-2">
 <span className="w-3 h-px bg-clay-dark" /> Café
 </span>
 <span className="flex items-center gap-2">
 <span className="w-3 h-px bg-matcha-deep" /> Matcha
 </span>
 </div>
 </div>

 <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="Graphique caféine">
 {/* Grid */}
 {[0, 50, 100, 150, 200].map((v) => {
 const y = H - PAD_B - v * yScale;
 return (
 <g key={v}>
 <line x1={PAD_L} y1={y} x2={W - PAD_R} y2={y} stroke="#E8E2D0" strokeWidth="1" />
 <text x={PAD_L - 8} y={y + 4} fontSize="11" textAnchor="end" fill="#8C8C8C">
 {v}
 </text>
 </g>
 );
 })}

 {/* X labels */}
 {labels.map((l, i) => {
 const x = PAD_L + i * xStep;
 if (i % 2 !== 0 && i !== labels.length - 1) return null;
 return (
 <text
 key={l}
 x={x}
 y={H - PAD_B + 18}
 fontSize="10"
 textAnchor="middle"
 fill="#8C8C8C"
 >
 {l}
 </text>
 );
 })}

 {/* Café area */}
 <path
 d={`${buildPath(coffee)} L ${PAD_L + (coffee.length - 1) * xStep} ${H - PAD_B} L ${PAD_L} ${H - PAD_B} Z`}
 fill="#A88561"
 fillOpacity="0.1"
 />
 {/* Matcha area */}
 <path
 d={`${buildPath(matcha)} L ${PAD_L + (matcha.length - 1) * xStep} ${H - PAD_B} L ${PAD_L} ${H - PAD_B} Z`}
 fill="#0E3B2E"
 fillOpacity="0.12"
 />

 {/* Café line */}
 <path d={buildPath(coffee)} fill="none" stroke="#A88561" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
 {/* Matcha line */}
 <path d={buildPath(matcha)} fill="none" stroke="#0E3B2E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

 {/* Y axis label */}
 <text x={20} y={20} fontSize="10" fill="#8C8C8C">
 ng/ml
 </text>
 </svg>

 <p className="mt-6 text-xs text-ink-muted leading-relaxed">
 Données indicatives basées sur Mason &amp; Reed (2014), Park (2017). La caféine du
 matcha est libérée lentement par les catéchines : pas de pic, pas de crash.
 </p>
 </div>
 );
}
