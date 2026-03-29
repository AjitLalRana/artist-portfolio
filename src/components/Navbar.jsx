import { motion } from "framer-motion";


export default function Navbar() {
  const navItems = ["Home", "About", "Portfolio", "Gallery", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-primary-bg/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex justify-between items-center"
    >
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full translate-x-1"></div>
        </div>
        <span className="font-black  text-xl tracking-tighter uppercase">ARTIST TINKU</span>
      </div>

      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:width-full"></span>
          </a>
        ))}
      </div>

      {/* Hire status and profile icon removed */}
    </motion.nav>
  );
}
