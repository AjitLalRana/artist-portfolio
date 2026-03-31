import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { motion, useScroll, useSpring } from "motion/react";

// Lazy load heavy sections
const PortfolioLanding = lazy(() => import("./components/PortfolioLanding"));
const ArtworkMarquee = lazy(() => import("./components/ArtworkMarquee"));
const About = lazy(() => import("./components/About"));
const MedalsMarquee = lazy(() => import("./components/MedalsMarquee"));
const Portfolio = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80, // smoother + less CPU
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="relative selection:bg-accent selection:text-white">
      {/* ✅ Lightweight Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* ✅ Suspense wrapper for lazy components */}
      <main>
        <Suspense fallback={<div className="h-screen bg-black" />}>
          <PortfolioLanding />
        </Suspense>

        <Suspense fallback={null}>
          <ArtworkMarquee />
          <About />
          <MedalsMarquee />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
