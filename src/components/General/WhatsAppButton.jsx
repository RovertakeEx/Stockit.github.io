import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+94717100072"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp className="mr-2 text-xl" />
      Chat on WhatsApp
    </a>
  );
};

export const AnimatedWhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/+94717100072"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center justify-center bg-green-500 text-white rounded-full overflow-hidden px-3 py-2 transition-all duration-1000 hover:bg-green-600"
    >
      <FaWhatsapp className="text-xl" />
      <span
        className={`whitespace-nowrap transform transition-all duration-1000 ease-in-out ${
          hovered ? 'ml-2 opacity-100 translate-x-0 w-auto' : 'opacity-0 -translate-x-2 w-0'
        }`}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
};