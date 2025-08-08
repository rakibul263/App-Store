import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">AppStore</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Top Apps
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </a>
          </div>
          {/* Search + Login */}
          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search apps..."
                className="border rounded-full px-4 py-1 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-2 text-gray-400" />
            </div>
            {/* Auth Buttons */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
