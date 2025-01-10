import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="mt-2 text-sm text-gray-600">
            Login to continue to your fitness journey.
          </p>
        </div>

        <form className="mt-6 space-y-6">
          {/* Email Field */}
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
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              Login
            </button>
          </div>
        </form>

        {/* Other Options */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline focus:text-blue-800"
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Social Login */}
        <div className="text-center">
          <p className="text-sm text-gray-600">Or login with</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">
              <i className="fab fa-facebook-f text-blue-600"></i>
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">
              <i className="fab fa-google text-red-600"></i>
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">
              <i className="fab fa-twitter text-blue-400"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
