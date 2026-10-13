"use client";

import { useState } from "react";
import { services } from "@/lib/data";

export default function Services() {
  const [openSvc, setOpenSvc] = useState(0);

  return (
    <section id="servicos" className="border-t border-line px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,160px)]">
      <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div className="font-mono text-[12px] uppercase tracking-[.08em] text-mute">[ Serviços ]</div>
        <h2 className="m-0 md:col-span-2 text-[clamp(56px,8vw,128px)] font-extrabold uppercase leading-[.86] [font-stretch:62%]">
          O que eu<br />faço.
        </h2>
      </div>
      <div className="flex flex-col border-t border-line">
        {services.map((s, i) => {
          const open = i === openSvc;
          return (
            <div key={s.title} className="border-b border-line">
              <button
                onClick={() => setOpenSvc(open ? -1 : i)}
                className={`box-border grid w-full cursor-pointer grid-cols-[36px_1fr_28px] items-center gap-3 border-0 bg-transparent py-6 md:grid-cols-[60px_1fr_40px] md:gap-4 md:py-7 text-left ${open ? "text-paper" : "text-soft2"}`}
              >
                <span className="font-mono text-[12px]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[clamp(32px,4vw,60px)] font-bold uppercase leading-[.95] [font-stretch:62%]">{s.title}</span>
                <span className="text-right font-mono text-[22px] text-[var(--acc,#F2A23C)]">{open ? "−" : "+"}</span>
              </button>
              {open && (
                <div className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 pb-9 md:grid-cols-[60px_minmax(0,1fr)] md:gap-4">
                  <span />
                  <div className="flex max-w-[640px] flex-col gap-5">
                    <p className="m-0 text-[17px] leading-[1.5] md:text-[19px] text-soft [text-wrap:pretty]">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="border border-line2 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[.06em]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
