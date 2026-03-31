import { motion } from "framer-motion"; // Changed to framer-motion (standard for 2026)
import { FaWhatsapp } from "react-icons/fa";


import img1 from "../assets/rang-1.png";
import img2 from "../assets/rang-2.png";
import img3 from "../assets/rang-4.png";
import img4 from "../assets/rang-5.png";
import img5 from "../assets/rang-6.png";
import img6 from "../assets/rang-7.png";

const artworks = [
  { id: 1, title: "Royal Rangoli", category: "Rangoli", image: img1 },
  { id: 2, title: "Modern Portrait", category: "Portrait", image: img2 },
  { id: 3, title: "Festival Design", category: "Rangoli", image: img3 },
  { id: 4, title: "Sketch Face", category: "Sketch", image: img4 },
  { id: 5, title: "Color Burst", category: "Abstract", image: img5 },
  { id: 6, title: "Minimal Art", category: "Sketch", image: img6 },
  { id: 7, title: "Royal Rangoli", category: "Rangoli", image: img1 },
  { id: 8, title: "Modern Portrait", category: "Portrait", image: img2 },
  { id: 9, title: "Festival Design", category: "Rangoli", image: img3 },
  { id: 11, title: "Color Burst", category: "Abstract", image: img5 },
  { id: 12, title: "Minimal Art", category: "Sketch", image: img6 },
];

export default function ArtworkGallery() {
  const phoneNumber = "916299492967";

  const handleWhatsApp = (art) => {
    const message = `Hi, I'm interested in your work: "${art.title}" (${art.category}). Can we discuss a commission?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 px-6 md:px-12 text-zinc-950">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            Selected <br /> Works
          </h2>
          <p className="text-zinc-500 text-lg">
            A collection of rangoli, sketches, and digital portraits. 
            Open for custom commissions and collaborations.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm font-mono text-zinc-400">EST. 2026 — PORTFOLIO</p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-4 lg:columns-5 gap-2 sm:gap-8 space-y-8 max-w-7xl mx-auto">
        {artworks.map((art, index) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-2xl overflow-hidden group cursor-crosshair break-inside-avoid bg-zinc-100"
          >
            {/* Image Component */}
            <img
              src={art.image}
              alt={art.title}
              loading="lazy"
              className="w-full h-auto object-cover  transition-all duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-1">
                {art.category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                {art.title}
              </h3>

              <button
                onClick={() => handleWhatsApp(art)}
                className="flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-500 hover:text-white transition-colors w-full md:w-fit"
              >
                <FaWhatsapp className="text-lg" />
                Inquire on WhatsApp
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}