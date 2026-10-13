import { cues } from "@/lib/data";

const cols = "md:grid-cols-[90px_minmax(0,1.2fr)_80px_minmax(0,2fr)]";

export default function Process() {
  return (
    <section className="bg-panel px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,160px)]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-5">
          <span className="font-mono text-[12px] uppercase tracking-[.08em] text-mute">[ Processo ]</span>
          <h2 className="m-0 text-[clamp(56px,8vw,128px)] font-extrabold uppercase leading-[.86] [font-stretch:62%]">
            Como eu<br />trabalho.
          </h2>
        </div>
        <a
          href="#contato"
          className="box-border flex size-[132px] flex-col justify-between bg-[var(--acc,#F2A23C)] p-3.5 !text-ink shadow-[0_0_60px_-10px_var(--acc,#F2A23C)] hover:brightness-[1.15]"
        >
          <span className="font-mono text-[11px] uppercase tracking-[.08em]">Vamos conversar</span>
          <span className="text-[64px] font-extrabold leading-[.8] [font-stretch:62%]">→</span>
        </a>
      </div>
      <div className="font-mono text-[12px] uppercase tracking-[.06em]">
        <div className={`hidden md:grid ${cols} gap-4 border-b border-line px-4 py-3 text-mute`}>
          <span>Nº</span>
          <span>Etapa</span>
          <span>Quando</span>
          <span>O que acontece</span>
        </div>
        {cues.map((c) => (
          <div key={c.n} className={`grid grid-cols-[40px_1fr] ${cols} items-baseline gap-x-3 gap-y-2 border-b border-line px-0 py-6 md:gap-4 md:px-4 md:py-[26px] transition-[background] duration-200 hover:bg-[rgba(242,162,60,.08)]`}>
            <span className="text-[var(--acc,#F2A23C)]">{c.n}</span>
            <span className="font-sans text-[clamp(26px,2.8vw,40px)] font-bold leading-none tracking-[0] [font-stretch:62%]">{c.title}</span>
            <span className="col-start-2 text-mute md:col-start-auto md:text-inherit">{c.fade}</span>
            <span className="col-start-2 font-sans text-[16px] normal-case md:col-start-auto md:text-[17px] leading-[1.5] tracking-[0] text-soft">{c.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
