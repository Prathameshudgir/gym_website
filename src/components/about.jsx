// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/2">
          <h2 className="text-2x1 font-semibold mb-4">Welcome to Our Gym</h2>
          <p className="mb-4">
            At Our Gym, we believe in empowering individuals to achieve their fitness goals. 
            Our state-of-the-art facilities and expert trainers are here to support you every step of the way.
          </p>
          <p>
            Whether you are a beginner or a seasoned athlete, we offer a variety of classes and equipment 
            to suit your needs. Join us and become part of our fitness community!
          </p> <br />
          <p>Our team of certified trainers and fitness experts is dedicated to guiding and motivating you every step of the way. They bring years of experience, passion, and knowledge to help you design a personalized fitness program tailored to your unique needs and aspirations. With a focus on safe and effective techniques, we aim to help you achieve long-lasting results.
          </p><br />
          <p>We believe that fitness is more than just physical—it’s about building a strong body, a positive mindset, and a connected community. That’s why we offer a variety of group classes, including yoga, Pilates, Zumba, spinning, HIIT, and more, to keep your workouts dynamic and engaging. Our community events and wellness workshops further foster connections among our members, creating an atmosphere where everyone feels welcome and valued.
          </p><br />
          <p>
          Hygiene and safety are our top priorities. Our facility is maintained to the highest standards with regular cleaning protocols, spacious layouts, and well-ventilated areas to ensure your comfort and safety while working out.
          </p><br />
        <p>We are more than just a gym—we’re a hub for health, wellness, and transformation. Whether your goal is to lose weight, build muscle, improve endurance, or simply lead a healthier lifestyle, [Your Gym Name] is here to support and celebrate your progress every step of the way.
        </p><br />
        <p>
        Join us today and become a part of the [Your Gym Name] family. Together, let’s unlock your potential and redefine what’s possible.

Your fitness journey starts here.  
        </p>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center">
          <img src="https://storage.googleapis.com/a1aa/image/53680528-55e4-4c34-95ee-14c767c668ae.jpeg" alt="Gym Interior" className="m-2 rounded-lg shadow-lg" />
          <img src="https://storage.googleapis.com/a1aa/image/a4cd6dd3-36e7-4349-8a8c-c7f1e1a70145.jpeg" alt="Group Class" className="m-2 rounded-lg shadow-lg" />
          <img src="https://storage.googleapis.com/a1aa/image/88d7fb5d-0ce4-40f7-b86e-713c294fcd4c.jpeg" alt="Personal Training" className="m-2 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;