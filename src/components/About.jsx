import { motion } from "motion/react";
import modal from "../assets/modal.webp";

export default function About() {
  return (
    <section
      id="about"
      className="bg-secondary-bg text-white py-32 px-6 md:px-12 overflow-hidden relative"
    >
      {/* Marquee Background */}
      <div className="absolute top-10 left-0 w-full opacity-10 pointer-events-none">
        <div className="marquee rotate-[-5deg]">
          <div className="marquee-content">
            <span className="text-9xl font-black uppercase tracking-tighter">
              about . about . about . about . about .
            </span>
          </div>
          <div className="marquee-content">
            <span className="text-9xl font-black uppercase tracking-tighter">
              about . about . about . about . about .
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Background rings */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[120%] aspect-square border border-white/20 rounded-full animate-pulse"></div>
              <div className="absolute w-[100%] aspect-square border border-white/10 rounded-full animate-ping"></div>

              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-20 bg-white/20 rounded-full"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-150%)`,
                  }}
                />
              ))}
            </div>

            {/* Floating + hover */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="rounded-full overflow-hidden aspect-square border-8 border-white/5"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.img
                  src={modal}
                  alt="Artist Avatar"
                  loading="lazy"   // ✅ performance boost
                  className="w-full h-full object-cover bg-accent/20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Always delivering <br />
              <span className="text-accent font-[Neue]">the best</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              I am an artist dedicated to exploring the boundaries of visual
              creativity through painting and realistic Rangoli. Through my art,
              I find poetry in the mundane and explore human emotion.
            </p>

            {/* 🔥 NEW: ACHIEVEMENTS */}
            <div className="grid grid-cols-3 gap-6 mt-4">
              {[
                { value: "215K+", label: "Subscribers" },
                { value: "150M+", label: "Views" },
                { value: "800+", label: "Videos" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center font-[font3]"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-accent">
                    {item.value}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Philosophy + Vision */}
            <div className="grid grid-cols-2 gap-8 mt-6">
              <div>
                <span className="block text-accent font-bold uppercase tracking-widest text-xs mb-2">
                  Philosophy
                </span>
                <p className="text-sm text-gray-500">
                  Minimalism is not the lack of something, but the perfect
                  amount of it.
                </p>
              </div>
              <div>
                <span className="block text-accent font-bold uppercase tracking-widest text-xs mb-2">
                  Vision
                </span>
                <p className="text-sm text-gray-500">
                  Creating timeless visuals that resonate with the soul and
                  provoke thought.
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-white uppercase tracking-[0.3em] font-bold text-xs mt-8 group"
            >
              Learn More
              <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all"></span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-20 left-10 text-white/20">
        <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-current rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 text-white/20">
        <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-current rounded-full"></div>
        </div>
      </div>
    </section>
  );
}