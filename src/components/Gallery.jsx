import { motion } from "motion/react";
import { Ticket } from "lucide-react";

const galleryItems = [
  { id: "01", title: "Vibrant Vision", category: "Acrylic", image: "https://picsum.photos/seed/eye-art/800/1000" },
  { id: "02", title: "Majestic Predator", category: "Oil Painting", image: "https://picsum.photos/seed/tiger-art/800/1200" },
  { id: "03", title: "Nocturnal Guardian", category: "Charcoal", image: "https://picsum.photos/seed/owl-art/800/1200" },
  { id: "04", title: "Floral Soul", category: "Mixed Media", image: "https://picsum.photos/seed/flower-portrait/800/1100" },
  { id: "05", title: "Metamorphosis", category: "Triptych", image: "https://picsum.photos/seed/butterfly-art/1200/800" },
  { id: "06", title: "Lord Hanuman", category: "Traditional", image: "https://picsum.photos/seed/hanuman-art/800/1100" },
  { id: "07", title: "Innocence", category: "Portrait", image: "https://picsum.photos/seed/child-portrait/800/1000" },
  { id: "08", title: "Eternal Bond", category: "Expressionism", image: "https://picsum.photos/seed/mother-child/800/1100" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-20">
          <span className="text-accent font-bold uppercase tracking-widest text-xs">my best</span>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">gallery</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-primary-bg aspect-[3/4]"
            >
              <img 
                src={item.image} 
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h4 className="text-white text-2xl font-black uppercase tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
