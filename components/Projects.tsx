"use client";

import { useState } from "react";
import ImageSlot from "./ImageSlot";
import { projects, projectImages } from "@/lib/data";

const types = ["Todos", ...projects.map((p) => p.type).filter((t, i, a) => a.indexOf(t) === i)];
const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("Todos");

  const visible = projects.map((p, i) => ({ p, i })).filter((x) => filter === "Todos" || x.p.type === filter);

  return (
    <section id="projetos" className="px-[clamp(20px,4vw,56px)] pb-[clamp(80px,10vw,160px)]">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
        <h2 className="m-0 text-[clamp(72px,13vw,220px)] font-extrabold uppercase leading-[.82] tracking-[-.01em] [font-stretch:62%]">
          Projetos
          <sup className="ml-2.5 align-top font-mono text-[14px] font-normal text-[var(--acc,#F2A23C)]">({pad(visible.length)})</sup>
        </h2>
        <span className="font-mono text-[12px] uppercase tracking-[.08em] text-mute">[ Cases selecionados 2025 a 2026 ]</span>
      </div>
      <div className="flex flex-wrap gap-1 border-b border-line py-5">
        {types.map((t) => {
          const count = t === "Todos" ? projects.length : projects.filter((p) => p.type === t).length;
          const on = t === filter;
          return (
            <button
              key={t}
              onClick={() => {
                setFilter(t);
                setActive(projects.findIndex((p) => t === "Todos" || p.type === t));
              }}
              className={`relative flex cursor-pointer items-baseline gap-2 border-0 bg-transparent px-3.5 pb-3.5 pt-2.5 font-mono text-[12px] uppercase tracking-[.08em] transition-colors duration-300 ${on ? "text-paper" : "text-mute"}`}
            >
              <span>{t}</span>
              <span className="text-[10px] text-mute">{pad(count)}</span>
              <span
                className="absolute inset-x-3.5 bottom-1 h-0.5 origin-left bg-[var(--acc,#F2A23C)] shadow-[0_0_12px_var(--acc,#F2A23C)] transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)]"
                style={{ transform: `scaleX(${on ? 1 : 0})` }}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(32px,5vw,80px)]">
        <ol className="m-0 flex min-w-0 list-none flex-col p-0">
          {visible.map(({ p, i }) => {
            const on = i === active;
            const select = () => active !== i && setActive(i);
            return (
              <li
                key={p.title}
                onMouseEnter={select}
                onClick={select}
                className={`grid cursor-pointer grid-cols-[36px_1fr] gap-3 border-b border-line py-5 md:grid-cols-[48px_1fr] md:gap-4 md:py-7 transition-colors duration-300 ${on ? "text-paper" : "text-dim"}`}
              >
                <span className={`pt-2.5 font-mono text-[12px] ${on ? "text-[var(--acc,#F2A23C)]" : "text-dim"}`}>{pad(i + 1)}</span>
                <div className="flex flex-col gap-3">
                  <span
                    className="text-[clamp(40px,4.6vw,72px)] font-bold uppercase leading-[.9] transition-transform duration-[400ms] ease-[cubic-bezier(.2,.7,.2,1)] [font-stretch:62%]"
                    style={{ transform: `translateX(${on ? "14px" : "0px"})` }}
                  >
                    {p.title}
                  </span>
                  <span className="font-mono text-[12px] uppercase tracking-[.06em] text-mute">{p.meta}</span>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="order-first flex flex-col gap-3.5 pt-5 md:sticky md:top-[88px] md:order-none md:pt-7">
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[4/5] bg-card">
            {projectImages.map((img, i) => (
              <div
                key={img.id}
                className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
              >
                <ImageSlot src={img.src} alt={img.alt} credit={img.credit} creditHref={img.creditHref} />
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-4 font-mono text-[12px] uppercase tracking-[.06em]">
            <span>{projects[active].role}</span>
            <span className="text-[var(--acc,#F2A23C)]">{projects[active].desk}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
