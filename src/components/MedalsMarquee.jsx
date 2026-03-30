import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import art2 from "../assets/medals/medal1.png";
import art3 from "../assets/medals/medal2.png";
import art5 from "../assets/medals/medal3.png";
import art6 from "../assets/medals/medal4.png";
import art7 from "../assets/medals/medal5.png";

const artworks = [art2, art5, art6, art7, art3];

const MedalsMarquee = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const widthRef = useRef(0);

  // Responsive speed
  const [speed, setSpeed] = useState(90);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setSpeed(35); // mobile
      } else if (window.innerWidth < 1024) {
        setSpeed(50); // tablet
      } else {
        setSpeed(90); // desktop
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);

    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  // Lock width after mount (prevents flicker)
  useEffect(() => {
    if (containerRef.current) {
      widthRef.current = containerRef.current.scrollWidth / 2;
    }
  }, []);

  useAnimationFrame((t, delta) => {
  const width = widthRef.current;
  if (!width) return;

  const moveBy = (delta / 1000) * speed;
  let next = x.get() + moveBy;

  // reverse loop condition
  if (next >= 0) {
    next = next % width - width;
  }

  x.set(next);
});

  return (
    <section className="bg-black z-10 sm:-mt-20 py-6 sm:py-16 md:py-25 overflow-hidden relative">
      
      {/* Optional gradient fade edges (premium look) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-20" />

      <div className="sm:rotate-[-4deg]">
        <motion.div
          ref={containerRef}
          style={{
            x,
            willChange: "transform",
            transform: "translateZ(0)", // GPU acceleration
          }}
          className="flex gap-4 sm:gap-6 md:gap-8 w-max px-4 [transform:translate3d(0,0,0)]"
        >
          {[...artworks, ...artworks].map((src, i) => (
            <div
              key={i}
              className="
                min-w-[50px] h-[50px]
                sm:min-w-[100px] sm:h-[120px]
                md:min-w-[120px] md:h-[160px]
                lg:min-w-[140px] lg:h-[180px]
                rounded-xl sm:rounded-2xl
                overflow-hidden
                shadow-md sm:shadow-xl
                transition-transform duration-300
                hover:scale-110
              "
            >
              <img
                src={src}
                alt="medal"
                className="w-full h-full object-cover pointer-events-none select-none"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MedalsMarquee;