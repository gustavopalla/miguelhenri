"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/data";

const label = "text-[11px] uppercase tracking-[.08em] text-mute";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contato" className="border-t border-line px-[clamp(20px,4vw,56px)] pb-16 pt-[clamp(80px,10vw,160px)]">
      <div className="mb-7 font-mono text-[12px] uppercase tracking-[.08em] text-mute">[ Tem um show vindo aí? ]</div>
      <a
        href="https://www.instagram.com/miguelhenriii_/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-[clamp(72px,17vw,300px)] font-extrabold uppercase leading-[.8] tracking-[-.015em] transition-colors duration-300 [font-stretch:62%]"
      >
        Vamos<br />conversar?
      </a>
      <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-6 border-t border-line pt-6 font-mono text-[13px] tracking-[.04em]">
        <div className="flex flex-col gap-2.5">
          <span className={label}>E-mail</span>
          <button onClick={copyEmail} className="flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 text-left font-[inherit] text-[inherit] tracking-[inherit] text-paper">
            <span>{EMAIL}</span>
            <span className="text-[11px] uppercase text-[var(--acc,#F2A23C)]">{copied ? "Copiado ✓" : "Copiar"}</span>
          </button>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className={label}>Instagram</span>
          <a href="https://www.instagram.com/miguelhenriii_/" target="_blank" rel="noopener noreferrer">@miguelhenriii_</a>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className={label}>WhatsApp</span>
          <a href="https://wa.me/5519900000000" target="_blank" rel="noopener noreferrer">+55 19 9 0000-0000</a>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className={label}>Agenda</span>
          <span className="flex items-center gap-2">
            <span className="size-[7px] rounded-full bg-[var(--acc,#F2A23C)]" />
            Datas abertas · 2027
          </span>
        </div>
      </div>
    </section>
  );
}
