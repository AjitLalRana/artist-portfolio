import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const VideoCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ✅ Smooth but lighter spring
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 25 });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // ✅ Disable on touch devices (CRITICAL)
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let rafId;

    const moveCursor = (e) => {
      //  Use requestAnimationFrame for smoother + less jank
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX - 32);
        mouseY.set(e.clientY - 32);
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(rafId);
    };
  }, [isDesktop]);

  //  Don't render on mobile
  if (!isDesktop) return null;

  return (
    <motion.div
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
      className="fixed top-0 left-0 w-[3.5rem] h-[3.5rem] pointer-events-none z-[9999] will-change-transform"
    >
      <div className="w-full h-full bg-slate-950/80 rounded-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none" // ✅ important
          className="w-full h-full object-cover"
        >
          <source src="/blinking_eye.webm" type="video/webm" />
        </video>
      </div>
    </motion.div>
  );
};

export default VideoCursor;