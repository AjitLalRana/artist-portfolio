import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMotionTemplate } from "framer-motion";
import { useState } from "react";

const ImageReveal = ({ tinku, imageSlideUp }) => {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smooth follow
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // parallax tilt (depth effect)
  const rotateX = useTransform(smoothY, [0, 600], [8, -8]);
  const rotateY = useTransform(smoothX, [0, 800], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  const clipPath = useMotionTemplate`
  circle(${hovered ? 140 : 0}px at ${smoothX}px ${smoothY}px)
`;

const glow = useMotionTemplate`
  radial-gradient(
    circle at ${smoothX}px ${smoothY}px,
    rgba(255,255,255,0.15),
    transparent 40%
  )
`;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={imageSlideUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="w-full md:w-auto absolute bottom-0 left-1/2 -translate-x-1/2 z-20 h-[65vh] md:h-[85vh]"
    >
      {/* BASE IMAGE (grayscale + slight zoom out) */}
      <motion.img
        src={tinku}
        alt="Portfolio Portrait"
        className="h-full w-full object-cover grayscale"
        animate={{
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.5 }}
        style={{
          maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, black 15%)",
        }}
      />

      {/* COLOR REVEAL LAYER */}
      <motion.img
        src={tinku}
        alt="color reveal"
        className="absolute top-0 left-0 h-full w-full object-cover"
        style={{
          clipPath,
        }}
      />

      {/* GLOW AURA (follows cursor) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
            background: glow,
            opacity: hovered ? 1 : 0,
        }}
      />

      {/* NOISE / GRAIN OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('/assets/noise.png')]" />
    </motion.div>
  );
};

export default ImageReveal;