import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import ThreadsIcon from "./ThreadsIcon";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const socialIcons = [
    { icon: FaYoutube, link: "https://www.youtube.com/@artisttinku4256" },
    { icon: FaInstagram, link: "https://www.instagram.com/artisttinku/" },
    { icon: FaFacebook, link: "https://www.facebook.com/artists.tinku/" },
    {
      icon: ThreadsIcon,
      link: "https://www.threads.com/@artisttinku?xmt=AQF0L4lhBYnWG8mjS2sFgnHM-lWrs7AdgwNy54jyN8SxMnI",
    },
  ];
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-secondary-bg text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-4">
              <span className="text-accent font-bold uppercase tracking-widest text-xs">Get in touch</span>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Let's Create <br /> Together</h3>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</span>
                  <span className="text-lg">xyz@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold">Studio</span>
                  <span className="text-lg">hazaribag , jharkhand , india</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold">Phone</span>
                  <span className="text-lg">+91 98765 43210</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialIcons?.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, color: "#F5A623" }}
                  className="text-white/50 transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10"
          >
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-white py-4 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
