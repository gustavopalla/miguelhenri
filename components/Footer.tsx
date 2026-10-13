export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="flex flex-col gap-12 px-[clamp(20px,4vw,56px)] pb-7 pt-12">
        <div className="text-[clamp(56px,10vw,170px)] font-extrabold uppercase leading-[.84] tracking-[-.01em] [font-stretch:62%]">
          <div>Light designer</div>
          <div className="text-[var(--acc,#F2A23C)]">Campinas, SP</div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 font-mono text-[11px] uppercase tracking-[.08em] text-mute">
          <span>© 2026 Miguel Henri</span>
          <span>Light designer // Crewlighthouse · CPS-SP</span>
          <a href="#top">Voltar ao topo ↑</a>
          <a href="https://unsplash.com/@borisview?utm_source=miguel_henri&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="!text-mute md:hidden">Foto: boris misevic / Unsplash</a>
        </div>
      </div>
    </footer>
  );
}
