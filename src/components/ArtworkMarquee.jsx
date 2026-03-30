import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import art2 from "../assets/port-2.png";
import art3 from "../assets/port-3.png";
import art5 from "../assets/port-5.png";
import art6 from "../assets/port-6.png";
import art7 from "../assets/port-7.png";
import signature from "../assets/signature.png";
import rang1 from "../assets/rang-1.png";
import rang2 from "../assets/rang-2.png";
import rang4 from "../assets/rang-4.png";
import rang5 from "../assets/rang-5.png";
import rang6 from "../assets/rang-6.png";

const artworks = [art2,rang1, art5, art6, art7,art3, signature, rang2, rang4, rang5, rang6];

const ArtworkMarquee = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  //Responsive speed
  const [speed, setSpeed] = useState(90);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setSpeed(35); // slower on mobile
      } else if (window.innerWidth < 1024) {
        setSpeed(45); // tablet
      } else {
        setSpeed(90); // desktop
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;

    const moveBy = (delta / 1000) * speed;
    let nextX = x.get() - moveBy;

    const halfWidth = containerRef.current.scrollWidth / 2;

    if (nextX <= -halfWidth) {
      nextX += halfWidth;
    }

    x.set(nextX);
  });

  return (
    <section className="bg-black z-10 -mt-20 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="rotate-[-4deg] sm:rotate-[-5deg]">
        <motion.div
          ref={containerRef}
          style={{ x, willChange: "transform" }}
          className="flex gap-4 sm:gap-6 md:gap-8 w-max px-4"
        >
          {[...artworks, ...artworks].map((src, i) => (
            <div
              key={i}
              className="
                min-w-[120px] h-[160px]   /* mobile */
                sm:min-w-[160px] sm:h-[220px]
                md:min-w-[200px] md:h-[260px]
                lg:min-w-[220px] lg:h-[300px]
                rounded-xl sm:rounded-2xl
                overflow-hidden
                shadow-lg sm:shadow-xl 
              "
            >
              <img
                src={src}
                alt="artwork"
                className="w-full h-full object-cover"
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

export default ArtworkMarquee;