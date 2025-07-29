import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {

  // URL de WhatsApp
//   const whatsappUrl = `https://wa.me/5553999205659?text=Hola`;
  const whatsappUrl = `https://wa.me/5553999763097?text=Hola, estoy interesado en sus servicios.`;

  return (
    <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 mb-14 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 focus:outline-none"
        >
        <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;