import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  const services = [
    {
      title: "Personal Training",
      description: "Work with experienced trainers to achieve your fitness goals.",
      image: "/src/assets/pexels-kampus-6111625.jpg ",
    },
    {
      title: "Group Classes",
      description: "Join our dynamic group classes for a fun and energetic workout.",
      image: "/src/assets/pexels-pavel-danilyuk-6339344.jpg",
    },
    {
      title: "Cardio Equipment",
      description: "Access state-of-the-art cardio machines to keep your heart healthy.",
      image: "/src/assets/pexels-willpicturethis-1954524.jpg",
    },
    {
      title: "Weight Training",
      description: "Build strength with our extensive range of weights and machines.",
      image: "/src/assets/pexels-olly-3837781.jpg",
    },
    {
      title: "Yoga Studio",
      description: "Relax and stretch in our serene yoga studio.",
      image: "/src/assets/pexels-yankrukov-8436605.jpg",
    },
    {
        title: "Maditation",
        description:"Here we explain everything you need to know about meditating in the gym…" ,
        image: "/src/assets/lutchenca-medeiros-FcSYIRwh4Bw-unsplash.jpg",
      },



  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Our Gym Services</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
