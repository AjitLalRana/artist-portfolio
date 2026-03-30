import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const VideoCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth lag effect
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 32); // center cursor
      mouseY.set(e.clientY - 32);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
      className="fixed top-0 left-0 w-[4rem] h-[4rem] pointer-events-none z-[9999]"
    >
      <div className="w-full h-full bg-slate-950/80 rounded-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/blinking_eye.webm" type="video/webm" />
        </video>
      </div>
    </motion.div>
  );
};

export default VideoCursor;