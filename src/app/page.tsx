import AboutSection from "../components/Home/About/about";
import Header from "../components/Home/Header/header";
import HeroSection from "../components/Home/Hero/hero";
import SkillsSection from "../components/Home/Skills/skills";

export default function HomePage() {
  return (
    <div className="text-white h-screen z-0 snap-y md:snap-none snap-mandatory overflow-scroll scroll-smooth">
      <Header />
      <section id="hero" className="snap-start">
        <HeroSection />
      </section>
      <section id="about" className="snap-center">
        <AboutSection />
      </section>
      <section id="skills" className="snap-center">
        <SkillsSection />
      </section>
    </div>
  );
}
