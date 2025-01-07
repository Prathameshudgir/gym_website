import React from 'react';

const Blog = () => {
  const blogs = [
    {
      title: '5 Tips for a Perfect Workout Routine',
      description: 'Maximize your gym time with these expert tips.',
      image: '/src/assets/tips.webp',
    },
    {
      title: 'Nutrition for Gym Enthusiasts',
      description: 'Learn what to eat for muscle growth and recovery.',
      image: '/src/assets/nutri.webp',
    },
    {
      title: 'Benefits of Regular Exercise',
      description: 'Discover the life-changing effects of staying active.',
      image: 'https://www.activeschoolsdundee.org.uk/sites/default/files/inline-images/Benefits%20Of%20Exercise%20Website%20infographic_0.jpg',
    },
  ];

  return (
    <div className="bg-white text-gray-900 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-45 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p className="text-gray-700 mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
