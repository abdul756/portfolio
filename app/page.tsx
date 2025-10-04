import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import NeuralBackground from '@/components/NeuralBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <NeuralBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
