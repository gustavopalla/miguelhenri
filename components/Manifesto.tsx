"use client";

import { useEffect, useRef } from "react";
import { manifesto } from "@/lib/data";

export default function Manifesto() {
  const wordsRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = wordsRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect(),
        vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const spans = el.children,
        n = spans.length;
      for (let i = 0; i < n; i++) (spans[i] as HTMLElement).style.opacity = i / n < p ? "1" : "0.16";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] px-[clamp(20px,4vw,56px)] py-[clamp(80px,12vw,180px)]">
      <div className="font-mono text-[12px] uppercase tracking-[.08em] text-mute">[ O que eu faço ]</div>
      <p
        ref={wordsRef}
        className="m-0 md:col-span-2 flex max-w-[1200px] flex-wrap gap-x-[.26em] text-[clamp(30px,4.4vw,68px)] font-medium leading-[1.08] tracking-[-.015em] [font-stretch:90%]"
      >
        {manifesto.split(" ").map((w, i) => (
          <span key={i} className="opacity-[.16] transition-opacity duration-[250ms] ease-linear">
            {w}
          </span>
        ))}
      </p>
    </section>
  );
}
