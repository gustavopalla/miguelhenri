export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 bg-gradient-to-b from-ink/80 to-transparent px-[clamp(20px,4vw,56px)] py-3.5 font-mono text-[12px] uppercase tracking-[.08em] text-paper md:py-[18px]">
      <a href="#top" className="font-sans text-[18px] font-extrabold tracking-[.02em] [font-stretch:75%]">
        Miguel Henri
      </a>
      <div className="hidden gap-7 md:flex">
        <a href="#projetos">[ Projetos ]</a>
        <a href="#servicos">[ Serviços ]</a>
        <a href="#sobre">[ Sobre ]</a>
      </div>
      <a
        href="#contato"
        className="group flex items-center gap-2 bg-[var(--acc,#F2A23C)] px-4 py-2.5 text-[12px] font-medium !text-ink shadow-[0_0_28px_-8px_var(--acc,#F2A23C)] transition duration-300 hover:-translate-y-px hover:brightness-110 hover:shadow-[0_0_36px_-6px_var(--acc,#F2A23C)] md:px-5"
      >
        Vamos conversar
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
      </a>
    </nav>
  );
}
