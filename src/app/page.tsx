import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import AboutSection from '@/components/About';
import ContactSection from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ContactSection />

      <section id="projects" className="py-20 px-4 flex justify-center">
        <div className="animate-border-gradient p-[2px] rounded-2xl p-2 w-full max-w-6xl">
          <div className="bg-black rounded-2xl p-10">
            <h2 className="text-4xl font-bold mb-10 text-center pb-2 animate-text-pulse">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
            </div>
        </div>
      </section>


    </main>
  );
}
