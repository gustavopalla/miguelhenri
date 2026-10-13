import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink font-sans text-paper">
      <Preloader />
      <Nav />
      <Hero />
      <Manifesto />
      <Projects />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
