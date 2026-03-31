import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import signBlack from "../assets/signBlack.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Gallery", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-primary-bg/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex justify-between items-center"
    >
      {/* 🔥 LOGO */}
      <div className="flex items-center gap-2">
        <img
          src={signBlack}
          alt="Tinku Logo"
          loading="eager" // ✅ important (logo should load fast)
          className="w-16 sm:w-20 h-auto"
        />
        <span className="font-black font-[font3] text-lg sm:text-xl tracking-tighter uppercase">
          ARTIST TINKU
        </span>
      </div>

      {/* 🖥️ DESKTOP MENU */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* 📱 MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1 z-[60]"
      >
        <span
          className={`w-6 h-[2px] bg-zinc-950 transition-all ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-zinc-950 transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-zinc-950 transition-all ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-zinc-950 backdrop-blur-lg flex flex-col items-center gap-6 py-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-lg uppercase tracking-widest text-white hover:text-accent transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}