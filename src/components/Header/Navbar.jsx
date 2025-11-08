import React, { use } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const Navigate = useNavigate();

  const navigateLogin = () => {
    Navigate("/login");
  };

  const handleLogout = () => {
    logoutUser();
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-blue-600">
              AppStore
            </NavLink>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              All App
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
              My Profile
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search apps..."
                className="border rounded-full px-4 py-1 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-2 text-gray-400" />
            </div>
            {user ? (
              <button className="btn btn-error rounded-4xl font-bold" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="btn btn-primary rounded-4xl font-bold"
                onClick={navigateLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
