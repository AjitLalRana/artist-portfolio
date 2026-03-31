import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

import art2 from "../assets/port-2.webp";
import art3 from "../assets/port-3.webp";
import art5 from "../assets/port-5.webp";
import art6 from "../assets/port-6.webp";
import art7 from "../assets/port-7.webp";
import signature from "../assets/signature.webp";
import rang1 from "../assets/rang-1.webp";
import rang2 from "../assets/rang-2.webp";
import rang4 from "../assets/rang-4.webp";
import rang5 from "../assets/rang-5.webp";
import rang6 from "../assets/rang-6.webp";

const baseArtworks = [
  art2, rang1, art5, rang2, rang4,
  signature, rang5, rang6, art6, art7, art3
];

const ArtworkMarquee = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  // ✅ Memoize duplicated array (prevents re-creation on every render)
  const artworks = useMemo(() => {
    return [...baseArtworks, ...baseArtworks];
  }, []);

  // ✅ Responsive speed (optimized)
  const [speed, setSpeed] = useState(70);

  useEffect(() => {
    const updateSpeed = () => {
      const width = window.innerWidth;

      if (width < 640) return setSpeed(30);
      if (width < 1024) return setSpeed(45);
      setSpeed(70); // reduced from 90 → smoother + less CPU
    };

    updateSpeed();

    // ✅ Debounced resize (important)
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updateSpeed, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //  Smoother animation loop
  useAnimationFrame((t, delta) => {
    const container = containerRef.current;
    if (!container) return;

    const moveBy = (delta / 1000) * speed;
    let nextX = x.get() - moveBy;

    const halfWidth = container.scrollWidth / 2;

    // ✅ Avoid jump glitch
    if (Math.abs(nextX) >= halfWidth) {
      nextX = 0;
    }

    x.set(nextX);
  });

  return (
    <section className="bg-black -mt-20 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="rotate-[-4deg] sm:rotate-[-5deg]">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-4 sm:gap-6 md:gap-8 w-max px-4"
        >
          {artworks.map((src, i) => (
            <div
              key={i}
              className="
                min-w-[120px] h-[160px]
                sm:min-w-[160px] sm:h-[220px]
                md:min-w-[200px] md:h-[260px]
                lg:min-w-[220px] lg:h-[300px]
                rounded-xl sm:rounded-2xl
                overflow-hidden
                shadow-lg sm:shadow-xl
                will-change-transform
              "
            >
              <img
                src={src}
                alt="artwork"
                loading="lazy"
                decoding="async"   // faster rendering
                draggable="false"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArtworkMarquee;