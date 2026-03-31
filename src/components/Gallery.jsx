import { motion } from "motion/react";
import { useState } from "react";
import rang1 from "../assets/rang-1.png";
import rang2 from "../assets/rang-2.png";
import rang4 from "../assets/rang-4.png";
import rang5 from "../assets/rang-5.png";
import rang6 from "../assets/rang-6.png";
import rang7 from "../assets/rang-7.png";
import ArtworkGallery from "./ArtworkGallery";

import face1 from "../assets/celebrity/face1.png";
import face2 from "../assets/celebrity/face2.png";
import face3 from "../assets/celebrity/face3.png";
import face4 from "../assets/celebrity/face4.png";


const projects = [
  {
    id: 1,
    title: "Urban Silence",
    category: "B&W",
    image: rang1,
    size: "tall",
  },
  {
    id: 2,
    title: "Golden Hour",
    category: "Cinematic",
    image: rang2,
    size: "wide",
    accent: true,
  },
  {
    id: 3,
    title: "Abstract Flow",
    category: "Experimental",
    image: rang4,
    size: "square",
  },
  {
    id: 4,
    title: "The Nomad",
    category: "Portrait",
    image: rang5,
    size: "tall",
  },
  {
    id: 5,
    title: "Neon Nights",
    category: "Cyberpunk",
    image: rang6,
    size: "wide",
  },
  {
    id: 6,
    title: "Minimalist Architecture",
    category: "Editorial",
    image: rang7,
    size: "square",
  },
];
const celebrity = [
  {
    id: 1,
    title: "Urban Silence",
    category: "B&W",
    image: face3,
    size: "tall",
  },
  {
    id: 2,
    title: "Golden Hour",
    category: "Cinematic",
    image: face1,
    size: "wide",
    accent: true,
  },
  {
    id: 3,
    title: "Abstract Flow",
    category: "Experimental",
    image: face4,
    size: "square",
  },
  {
    id: 4,
    title: "The Nomad",
    category: "Portrait",
    image: face3,
    size: "tall",
  },
  {
    id: 5,
    title: "Neon Nights",
    category: "Cyberpunk",
    image: face2,
    size: "wide",
  }
];


export default function Gallery() {
  const [hoveredId, setHoveredId] = useState(null);
  const handleAllProject = () => {
    // For demo, we'll just alert. In a real app, this could navigate to a full portfolio page.
   
  };

  return (
    <section
      id="gallery"
      className=" bg-primary-bg relative "
    >
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-0  bg-cover bg-center">
        <h2 className="text-[18vw] font-black uppercase text-black/5 tracking-tighter leading-none select-none">
          Portfolio Artist Tinku
        </h2>
      </div>
      <div className="sticky h-full flex items-center justify-center pointer-events-none z-0  bg-cover bg-center">
        {/* display artwork gallery */}
        <ArtworkGallery />
      </div>

      <div className="w-full py-10 px-6 md:px-12 rounded-t-4xl  mx-auto  relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-accent font-bold uppercase tracking-widest text-xs">
              my work
            </span>
            <h3 className="text-5xl md:text-8xl text-gray-950 font-[Neue] uppercase tracking-tighter leading-none">
              Hall of <br/> <span className="text-8xl sm:text-9xl">Fame</span>
            </h3>
          </div>
          <div className="hidden md:block text-right max-w-xs">
            <p className="text-text-secondary text-sm">
              A collection of Art exploring the boundaries of visual creativity
              and painting and rangoli
            </p>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 space-y-8">
          {celebrity?.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-[2rem] overflow-hidden group cursor-pointer break-inside-avoid ${project.accent ? "ring-4 ring-accent ring-offset-4" : ""}`}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className={`w-full h-auto object-cover transition-all duration-700 ${hoveredId === project.id ? "scale-110" : "scale-100"}`}
                referrerPolicy="no-referrer"
              />

              <div
                className={`absolute inset-0 bg-black/40 flex flex-col justify-end p-8 transition-opacity duration-500 ${hoveredId === project.id ? "opacity-100" : "opacity-0"}`}
              >
                <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2">
                  {project.category}
                </span>
                <h4 className="text-white text-2xl font-black uppercase tracking-tighter">
                  {project.title}
                </h4>
              </div>

              {project.accent && (
                <div className="absolute top-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-black text-xs">
                  NEW
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <a href="https://www.instagram.com/artisttinku/" className="mt-20 flex justify-center" target="_blank" rel="noopener noreferrer">
          <motion.button
            onClick={handleAllProject}
            whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#FFF" }}
            className="px-12 py-4 border-2 border-black rounded-full uppercase tracking-widest font-black text-sm transition-all"
          >
            View All Projects
          </motion.button>
        </a>
      </div>
    </section>
  );
}
