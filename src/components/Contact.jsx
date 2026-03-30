import { motion } from "motion/react";
import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import ThreadsIcon from "./ThreadsIcon";
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

// 👉 Import your floating WhatsApp button
import WhatsAppOrder from "./WhatsAppOrder";

export default function Contact() {
  const phoneNumber = "916299492967";

  const whatsappMessage =
    "Hi, I want to order a custom artwork. Can we discuss details?";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const socialIcons = [
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@artisttinku4256",
      color: "hover:text-[#FF0000]",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/artisttinku/",
      color: "hover:text-[#E1306C]",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/artists.tinku/",
      color: "hover:text-[#1877F2]",
    },
    {
      icon: ThreadsIcon,
      link: "https://www.threads.com/@artisttinku",
      color: "hover:text-white",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappText = `Hi, I want to order an artwork 
    Name: ${formData.name}
    Email: ${formData.email}

    Project Details:${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappText,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 bg-secondary-bg text-white"
    >
      {/* 🔥 Floating WhatsApp CTA */}
      <WhatsAppOrder phoneNumber={phoneNumber} message={whatsappMessage} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            {/* Heading */}
            <div className="flex flex-col gap-4">
              <span className="text-accent font-bold uppercase tracking-widest text-xs">
                Get in touch
              </span>

              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Let's Create <br /> Together
              </h3>

              {/* 🔥 Commission Badge */}
              {/* <span className="text-sm bg-green-500/10 text-green-400 px-4 py-2 rounded-full w-fit border border-green-500/20">
                Available for commissions
              </span> */}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase">Email</span>
                  <p className="text-lg">xyz@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase">
                    Studio
                  </span>
                  <p className="text-lg">Hazaribag, Jharkhand, India</p>
                </div>
              </div>

              {/* 🔥 WhatsApp (Clickable CTA) */}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-green-500/30 flex items-center justify-center bg-green-500/10 group-hover:bg-green-500 transition-all">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase">
                    WhatsApp Orders
                  </span>
                  <p className="text-lg text-green-400">
                    Chat & Order Instantly
                  </p>
                </div>
              </a>
            </div>

            {/* 🔥 Primary CTA Button */}
            <motion.a
              href={whatsappURL}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit bg-green-500 px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg"
            >
              <FaWhatsapp size={20} />
              Order Artwork Now
            </motion.a>

            {/* Social Icons */}
            <div className="w-full flex z-50 justify-between px-10  sm:px-40 ">
                        <motion.div
                          className="flex justify-between items-center gap-2 sm:gap-6 "
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: {},
                            visible: {
                              transition: {
                                staggerChildren: 0.1,
                              },
                            },
                          }}
                        >
                          {socialIcons.map((social, index) => {
                            const IconComponent = social.icon;
            
                            return (
                              <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={` text-gray-400   ${social?.color} transition-colors rounded-full p-2`}
                                variants={{
                                  hidden: { opacity: 0, y: 20 },
                                  visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{
                                  scale: 1.2,
                                  y: -20,
                                }}
                                whileTap={{
                                  scale: 0.9,
                                }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                }}
                              >
                                <IconComponent size={22} />
                              </motion.a>
                            );
                          })}
                        </motion.div>
                      </div>
          </motion.div>

          {/* RIGHT SIDE (FORM) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your artwork idea..."
                required
                className="bg-transparent border-b border-white/20 py-2 outline-none focus:border-accent resize-none"
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-500 py-4 rounded-full font-bold flex items-center justify-center gap-3"
              >
                <FaWhatsapp size={18} />
                Send via WhatsApp
              </motion.button>

              {/* UX Hint */}
              <p className="text-xs text-gray-500 text-center">
                ⚡ This will open WhatsApp with your message pre-filled
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
