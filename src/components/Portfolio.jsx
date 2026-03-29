import { motion } from "motion/react";
import { useState } from "react";

const projects = [
  { id: 1, title: "Urban Silence", category: "B&W", image: "https://picsum.photos/seed/urban/800/1000", size: "tall" },
  { id: 2, title: "Golden Hour", category: "Cinematic", image: "https://picsum.photos/seed/golden/800/600", size: "wide", accent: true },
  { id: 3, title: "Abstract Flow", category: "Experimental", image: "https://picsum.photos/seed/flow/800/800", size: "square" },
  { id: 4, title: "The Nomad", category: "Portrait", image: "https://picsum.photos/seed/nomad/800/1000", size: "tall" },
  { id: 5, title: "Neon Nights", category: "Cyberpunk", image: "https://picsum.photos/seed/neon/800/600", size: "wide" },
  { id: 6, title: "Minimalist Architecture", category: "Editorial", image: "https://picsum.photos/seed/arch/800/800", size: "square" },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-primary-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <h2 className="text-[20vw] font-black uppercase text-black/5 tracking-tighter leading-none select-none">
          Portfolio
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-20">
          <div className="flex flex-col gap-4">
            <span className="text-accent font-bold uppercase tracking-widest text-xs">my work</span>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">realistic <br /> Rangoli</h3>
          </div>
          <div className="hidden md:block text-right max-w-xs">
            <p className="text-text-secondary text-sm">A collection of Art exploring the boundaries of visual creativity and painting and rangoli</p>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-[2rem] overflow-hidden group cursor-pointer break-inside-avoid ${project.accent ? 'ring-4 ring-accent ring-offset-4' : ''}`}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className={`w-full h-auto object-cover transition-all duration-700 ${hoveredId === project.id ? 'scale-110 grayscale-0' : 'grayscale'}`}
                referrerPolicy="no-referrer"
              />
              
              <div className={`absolute inset-0 bg-black/40 flex flex-col justify-end p-8 transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2">{project.category}</span>
                <h4 className="text-white text-2xl font-black uppercase tracking-tighter">{project.title}</h4>
              </div>

              {project.accent && (
                <div className="absolute top-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-black text-xs">
                  NEW
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#FFF" }}
            className="px-12 py-4 border-2 border-black rounded-full uppercase tracking-widest font-black text-sm transition-all"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}
