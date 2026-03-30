import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppOrder = ({phoneNumber, message}) => {
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Tooltip */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-black text-white text-sm px-4 py-2 rounded-full shadow-md"
      >
        
      </motion.div> */}

      {/* Button */}
      <motion.a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-8 h-8  md:w-16 md:h-16 rounded-full bg-green-500 text-white shadow-xl"
      >
        {/* Pulse Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Icon */}
        <FaWhatsapp className="text-3xl relative z-10" />
      </motion.a>
    </div>
  );
};

export default WhatsAppOrder;