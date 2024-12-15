import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-darkBlack text-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Title and Description */}
        <h2 className="text-3xl font-bold mb-4 text-luxuryGold">
          15 YEARS OF TIMELESS LUXURY
        </h2>
        <p className="text-gray-400 mb-6">
          Join over 5000 delighted families embracing our designs.
        </p>

        {/* Store Locations */}
        <div className="text-lg mb-6">
          <div className="mb-2">
            <strong>Ethnic & Co Store</strong>
          </div>
          <div className="mb-4">
           Place Hotel, Circuit House,  Rajasthan, India
          </div>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.google.com/maps?q=Ranbanka+Place+Hotel,+Circuit+House,+Jodhpur,+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxuryGold hover:underline"
            >
              Open in Map (Kalangi)
            </a>
            <a
              href="https://www.google.com/maps?q=Rukhman+Store,+Jodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxuryGold hover:underline"
            >
              Open in Map (Ethnic)
            </a>
          </div>
        </div>

        {/* WhatsApp Icon for Contact */}
        <div className="mb-6">
          <a
            href="https://wa.me/+91xxxxxxxxxx" // Replace with your WhatsApp contact number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-4 bg-green-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaWhatsapp size={30} color="white" />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-sm text-gray-400">
          © 2024 Ethnic & Co | Designed with ♥ by Safwan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
