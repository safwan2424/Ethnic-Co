import React, { useState } from 'react';
import { FaHome, FaCompass, FaInfoCircle } from 'react-icons/fa'; // Import icons
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide text-luxuryGold">
          Ethnic Co
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-sm uppercase font-medium items-center">
          <li className="flex items-center gap-2 group">
            <FaHome className="text-luxuryGold group-hover:text-white transition duration-300" />
            <a
              href="#"
              className="relative group hover:text-luxuryGold transition duration-300"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-luxuryGold group-hover:w-full transition-all duration-500"></span>
            </a>
          </li>
          <li className="flex items-center gap-2 group">
            <FaCompass className="text-luxuryGold group-hover:text-white transition duration-300" />
            <a
              href="#"
              className="relative group hover:text-luxuryGold transition duration-300"
            >
              Explore
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-luxuryGold group-hover:w-full transition-all duration-500"></span>
            </a>
          </li>
          <li className="flex items-center gap-2 group">
            <FaInfoCircle className="text-luxuryGold group-hover:text-white transition duration-300" />
            <a
              href="#"
              className="relative group hover:text-luxuryGold transition duration-300"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-luxuryGold group-hover:w-full transition-all duration-500"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <MdClose className="w-8 h-8 text-luxuryGold" />
          ) : (
            <MdMenu className="w-8 h-8 text-luxuryGold" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gradient-to-r from-gray-900 to-black text-white text-center md:hidden">
            <li className="py-2 hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <FaHome className="text-luxuryGold" />
              <a href="#" className="block">Home</a>
            </li>
            <li className="py-2 hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <FaCompass className="text-luxuryGold" />
              <a href="#" className="block">Explore</a>
            </li>
            <li className="py-2 hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <FaInfoCircle className="text-luxuryGold" />
              <a href="#" className="block">About</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
