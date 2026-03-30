import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";
import PortfolioLanding from "./components/PortfolioLanding";
import ArtworkMarquee from "./components/ArtworkMarquee";
import VideoCursor from "./components/VideoCursor";
import MedalsMarquee from "./components/MedalsMarquee";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <PortfolioLanding />
        <ArtworkMarquee />
        <About />
        <MedalsMarquee />
        <Portfolio />
        {/* <Gallery /> */}
        <Contact />
      </main>
    </div>
  );
}
