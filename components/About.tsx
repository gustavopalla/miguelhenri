import ImageSlot from "./ImageSlot";
import { tools } from "@/lib/data";

export default function About() {
  return (
    <section
      id="sobre"
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(32px,5vw,80px)] px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,160px)]"
    >
      <div className="relative aspect-[4/5] w-full max-w-[560px]">
        <ImageSlot
          src="https://images.unsplash.com/photo-1558620013-a08999547a36?fm=jpg&q=70&w=1600&auto=format&fit=crop"
          alt="Retrato do Miguel, de preferência com luz de palco"
          credit="Jorik Kleen"
          creditHref="https://unsplash.com/@jorikkleen"
        />
      </div>
      <div className="flex flex-col gap-9">
        <span className="font-mono text-[12px] uppercase tracking-[.08em] text-mute">[ Sobre ]</span>
        <p className="m-0 text-[clamp(28px,3.2vw,46px)] font-medium leading-[1.1] tracking-[-.015em] [font-stretch:90%] [text-wrap:pretty]">
          Sou Miguel Henri, light designer da Crewlighthouse.
        </p>
        <p className="m-0 max-w-[560px] text-[18px] leading-[1.6] text-soft [text-wrap:pretty]">
          Trabalho na mesa de luz de shows e eventos. Preparo tudo antes, ensaio com a equipe e opero a luz ao vivo no dia.
        </p>
        <div className="flex flex-col gap-4 border-t border-line pt-6">
          <span className="font-mono text-[12px] uppercase tracking-[.08em] text-mute">[ Mesas &amp; ferramentas ]</span>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="border border-line2 px-3 py-2 font-mono text-[12px] tracking-[.04em]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
