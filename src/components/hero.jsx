// Import necessary modules
import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-1"
        src="/src/assets/gym video.mp4" // Replace with your video file
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Transform Your Fitness Journey
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Join us today and achieve your fitness goals with our expert trainers and state-of-the-art equipment.
        </p>
        <NavLink to="/signup">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-lg">
          Get Started
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;

