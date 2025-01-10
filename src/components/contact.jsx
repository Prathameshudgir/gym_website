// components/ContactForm.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-7xl mx-auto px-4">
        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Location Image */}
        <div className='w-full max-w-md' >
       
          <iframe className='w-full max-w-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.3425189298823!2d73.8731515742373!3d18.51523638257728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c045b7555797%3A0x6097977d91651c5d!2sI%20Fitness%20Destiny!5e1!3m2!1sen!2sin!4v1736169510132!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
           
          {/* <p className="mt-4 text-center text-gray-600">Find us at our convenient location!</p> */}
        </div>
      </div>

  );
};

export default Contact;
