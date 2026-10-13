"use client";

import { useEffect, useRef } from "react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1677497533660-adca109c2f71?fm=jpg&q=75&w=2400&auto=format&fit=crop";
const MASK =
  "radial-gradient(circle 300px at var(--mx,50%) var(--my,45%),#000 0%,rgba(0,0,0,.7) 35%,transparent 100%)";

export default function Hero({ spotlight = true }: { spotlight?: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    let target: { x: number; y: number } | null = null;
    const cur = { x: 0, y: 0 };
    let lastMove = 0;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      target = { x: e.clientX - r.left, y: e.clientY - r.top };
      lastMove = performance.now();
    };
    hero.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = (t: number) => {
      const w = hero.clientWidth,
        h = hero.clientHeight;
      let tg = target;
      if (!tg || t - lastMove > 2500)
        tg = { x: w * (0.5 + 0.32 * Math.sin(t / 2600)), y: h * (0.42 + 0.16 * Math.sin(t / 1700)) };
      cur.x += (tg.x - cur.x) * 0.09;
      cur.y += (tg.y - cur.y) * 0.09;
      hero.style.setProperty("--mx", cur.x + "px");
      hero.style.setProperty("--my", cur.y + "px");
      const ro = readoutRef.current;
      if (ro) {
        ro.style.transform = `translate(${cur.x + 26}px, ${cur.y + 26}px)`;
        const pan = String(Math.round((cur.x / w) * 255)).padStart(3, "0");
        const tilt = String(Math.round((cur.y / h) * 255)).padStart(3, "0");
        ro.textContent = `PAN ${pan} · TILT ${tilt}\nDIM 100%`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <header id="top" ref={heroRef} className="relative h-[100svh] min-h-[560px] md:h-screen md:min-h-[640px] cursor-crosshair overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMG}
        alt="Miguel operando a mesa de luz"
        className="absolute inset-0 size-full object-cover object-[center_40%] brightness-[.22] contrast-[1.2] grayscale"
      />
      {spotlight && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt=""
            className="absolute inset-0 size-full object-cover object-[center_40%] grayscale contrast-[1.2] brightness-[1.05]"
            style={{ maskImage: MASK, WebkitMaskImage: MASK }}
          />
          <div
            ref={readoutRef}
            className="pointer-events-none absolute left-0 top-0 hidden whitespace-pre md:block font-mono text-[11px] leading-[1.6] tracking-[.06em] text-paper"
            style={{ transform: "translate(-999px,-999px)" }}
          >
            {"PAN 128 · TILT 064\nDIM 100%"}
          </div>
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,.55)_0%,rgba(10,10,11,0)_30%,rgba(10,10,11,0)_55%,#0A0A0B_100%)]" />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center px-[clamp(20px,4vw,56px)] pb-16 pt-20 md:justify-between md:pb-10 md:pt-24">
        <div className="hidden flex-wrap justify-between gap-6 font-mono text-[12px] uppercase tracking-[.08em] text-paper md:flex">
          <span>[ Light designer // Crewlighthouse ]</span>
          <span className="hidden text-mute md:inline">Passe o mouse para iluminar</span>
        </div>
        <div className="flex flex-col">
          <h1 className="m-0 flex flex-col text-[clamp(84px,20vw,360px)] font-extrabold uppercase leading-[.8] tracking-[-.015em] [font-stretch:62%]">
            <span>Miguel</span>
            <span className="self-end text-[var(--acc,#F2A23C)]">Henri</span>
          </h1>
          <div className="mt-7 flex flex-col items-start justify-between gap-3 md:flex-row md:flex-wrap md:items-end md:gap-6 font-mono text-[12px] uppercase tracking-[.08em]">
            <span className="max-w-[340px] leading-[1.6]">Iluminar é fazer o que Deus já está fazendo.</span>
            <span className="hidden text-mute md:inline">Operação · Programação · Light design</span>
            <span className="hidden items-center gap-6 md:flex">
              <a
                href="https://unsplash.com/@borisview?utm_source=miguel_henri&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto text-[10px] !text-mute"
              >
                Foto: boris misevic / Unsplash
              </a>
              <span>Scroll ↓</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
