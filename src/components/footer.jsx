// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-4 md:mb-0 ">
        
            <img
              className=" h-23 w-32  "
              src="\src\assets\bg.png"
              alt="Logo"
            />
          {/* <h1 className="text-white text-2xl font-bold ">GymFit</h1> */}
          <p className="text-sm mt-2">
            Your journey to fitness starts here. Join us today and unlock your potential!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#plans" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Service</a>
          <a href="#about" className="hover:underline">Contact</a>
          <a href="#about" className="hover:underline">MemberShip</a>

        </div>

        {/* Social Media Links */}
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        © {new Date().getFullYear()} GymFit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
