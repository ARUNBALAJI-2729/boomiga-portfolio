import ParticleBackground from "@/components/ParticleBackground";
import CursorEffect from "@/components/CursorEffect";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Designs from "@/components/sections/Designs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-cyan-500 selection:text-white">
      {/* Page Preloader */}
      <LoadingScreen />

      {/* Particle background layers */}
      <ParticleBackground />

      {/* Trailing Cursor Effect */}
      <CursorEffect />

      {/* Main components */}
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Designs />
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp floating AI Bot widget */}
      <WhatsAppWidget />
    </div>
  );
}
