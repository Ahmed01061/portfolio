import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Dynamically import ThreeBackground with no SSR to avoid hydration issues
const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative">
      <ThreeBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}