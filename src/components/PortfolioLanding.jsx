import React from "react";
import { motion } from "framer-motion";
import tinku from "../assets/tinku-crop.png";
import DateTime from "../components/DateTime";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import signature from "../assets/signature.png";
import texture from "../assets/texture.jpg";
import ImageReveal from "./ImageReveal";
import VideoCursor from "./VideoCursor";

import ThreadsIcon from "./ThreadsIcon";

const PortfolioLanding = () => {
  // Framer Motion animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const textScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageSlideUp = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const socialIcons = [
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@artisttinku4256",
      color: "hover:text-[#FF0000]",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/artisttinku/",
      color: " hover:text-[#E1306C]",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/artists.tinku/",
      color: " hover:text-[#1877F2]",
    },
    {
      icon: ThreadsIcon,
      link: "https://www.threads.com/@artisttinku?xmt=AQF0L4lhBYnWG8mjS2sFgnHM-lWrs7AdgwNy54jyN8SxMnI",
      color: " hover:text-[#fff]",
    },
  ];

  return (
    <>
      {/* Invisible overlay to prevent interactions with background elements */}

      <div className="absolute w-full h-screen  z-10">
        <VideoCursor />
      </div>
      <div
        id="home"
        className="relative w-full h-screen  bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-[#E5E5E5] overflow-hidden font-sans flex flex-col justify-between px-6 py-10 md:px-12 md:py-25"
      >
        {/* --- Top Header Section --- */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-between items-start  relative uppercase tracking-widest text-xs md:text-sm font-bold"
        >
          <div className="text-right">
            <span className="block text-gray-400 mb-1">
              <DateTime />
            </span>
            <span className="block text-white">. . . . . .</span>
          </div>
        </motion.header>

        {/* --- Background Massive Typography --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textScale}
          className="absolute inset-0 flex flex-col items-center justify-evenly md:justify-center  "
        >
          <h1
            style={{
              backgroundImage: `url(${texture})`,
            }}
            className="z-20
    text-[19vw] pb-35 sm:pb-0 rotate-[-5deg]
    leading-none font-[Neue] font-black tracking-wider
    select-none
    bg-cover bg-center
    text-transparent bg-clip-text
  "
          >
            PORTFOLIO
          </h1>
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
            <div className="absolute top-1/2 right-10 flex flex-col items-end ">
              <img src={signature} alt="Signature" className="w-20 sm:w-40" />
            </div>
          </div>
        </motion.div>

        {/* --- Center Cutout Image --- */}
        {/* IMPORTANT: For the exact effect in the reference, use a PNG with a transparent background */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageSlideUp}
          className="w-[100%] md:w-auto h-full absolute bottom-0 left-1/2 transform -translate-x-1/2 z-35 h-[65vh] md:h-[85vh] pointer-events-none"
        >
          <img
            // Replace this src with your own transparent cutout PNG
            src={tinku}
            alt="Portfolio Portrait"
            className="h-full w-full object-cover  drop-shadow-2xl"
            style={{
              // Fades the bottom edge of the image slightly to blend with the footer
              maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 15%)",
            }}
          />
        </motion.div>

        {/* --- Bottom Footer Text --- */}
        <motion.footer
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-end z-30 relative gap-6 md:gap-0"
        >
          <div className="max-w-[280px] text-xs md:text-sm text-gray-400 leading-relaxed text-left font-medium">
            Exploring the intersection of human emotion and visual storytelling,
            one canvas at a time.
          </div>
          <div className="max-w-[280px] text-xs md:text-sm text-gray-400 leading-relaxed text-left md:text-right font-medium italic">
            "Art does not reproduce the visible; rather, it makes visible." —
            Paul Klee
          </div>
        </motion.footer>
      </div>
    </>
  );
};

export default PortfolioLanding;
