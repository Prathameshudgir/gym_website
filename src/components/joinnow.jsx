import React from "react";

const JoinNow = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 md:p-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Join Our Gym Today!
          </h1>
          <p className="mt-4 text-gray-600">
            Take the first step toward a healthier, stronger you. Join us and
            achieve your fitness goals with state-of-the-art equipment and
            expert trainers.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Plan */}
          <div>
            <label
              htmlFor="plan"
              className="block text-sm font-medium text-gray-700"
            >
              Select a Membership Plan
            </label>
            <select
              id="plan"
              name="plan"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="basic">Basic Plan - $20/month</option>
              <option value="standard">Standard Plan - $50/month</option>
              <option value="premium">Premium Plan - $80/month</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Join Now
            </button>
          </div>
        </form>

        {/* Video Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Watch Our Gym Tour
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="w-full rounded-lg shadow-md"
              src="/src/assets/gym video.mp4" // Replace with your video file
              controls autoPlay muted loop
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
