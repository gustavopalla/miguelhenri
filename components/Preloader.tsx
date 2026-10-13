"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t0 = performance.now();
    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const step = () => {
      const k = Math.min(1, (performance.now() - t0) / 1400);
      setPct(Math.round((1 - Math.pow(1 - k, 3)) * 100));
      if (k < 1) raf = requestAnimationFrame(step);
      else timeout = setTimeout(() => setLoading(false), 250);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-[clamp(20px,4vw,56px)]">
      <div className="flex justify-between font-mono text-[12px] uppercase tracking-[.08em] text-mute">
        <span>Carregando cena 001</span>
        <span>Miguel Henri</span>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-[clamp(120px,22vw,360px)] font-extrabold leading-[.8] tracking-[-.01em] [font-stretch:62%]">{pct}%</div>
        <div className="relative h-0.5 bg-paper/[.12]">
          <div className="absolute inset-y-0 left-0 bg-[var(--acc,#F2A23C)]" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex justify-between font-mono text-[12px] uppercase tracking-[.08em] text-mute">
          <span>DIM {pct}%</span>
          <span>Fade 1.4s</span>
        </div>
      </div>
    </div>
  );
}
