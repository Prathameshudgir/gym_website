import React from 'react';
import { NavLink } from 'react-router-dom';

const Poster = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="text-center p-10 bg-gradient-to-r from-red-800 to-orange-400">
        <h1 className="text-4xl md:text-6xl font-bold">Transform Your Body, Transform Your Life</h1>
        <p className="mt-4 text-lg md:text-xl">Join us at PowerGym today!</p>
      </header>
      <main className="p-6 md:p-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Choose PowerGym?</h2>
          <ul className="list-disc list-inside">
            <li>State-of-the-art equipment</li>
            <li>Certified personal trainers</li>
            <li>Flexible membership plans</li>
            <li>Exclusive diet and workout plans</li>
          </ul>
          <NavLink to ="/joinnow">
            
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
            Join Now
          </button>
          </NavLink>
        </div>
        <img
          src="/src/assets/pexels-cesar-galeao-1673528-3253501.jpg"
          alt="Gym workout"
          className="rounded-lg shadow-lg"
        />
      </main>
    </div>
  );
};

export default Poster;
