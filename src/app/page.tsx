import AboutSection from "../components/Home/About/about";
import ContactSection from "../components/Home/Contact/contact";
import ExperienceSection from "../components/Home/Experience/experience";
import Header from "../components/Home/Header/header";
import HeroSection from "../components/Home/Hero/hero";
import ProjectsSection from "../components/Home/Projects/projects";
import SkillsSection from "../components/Home/Skills/skills";
import ParticleBackground from "../components/layout/particles";

export default function HomePage() {
  return (
    <div className="text-white h-screen z-0 snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Header />
      <section id="hero" className="snap-start">
        <HeroSection />
      </section>
      <section id="about" className="snap-center">
        <AboutSection />
      </section>
      <section id="projects" className="snap-center">
        <ProjectsSection />
      </section>
      <section id="skills" className="snap-center">
        <SkillsSection />
      </section>
      <section id="exp" className="snap-center">
        <ExperienceSection />
      </section>
      <section id="contact" className="snap-center">
        <ContactSection />
      </section>
      <ParticleBackground />
    </div>
  );
}
