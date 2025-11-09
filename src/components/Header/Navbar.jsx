import React, { use } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logoutUser, emailVerified } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    logoutUser();
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-bold hover:text-blue-600 ${
            isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
          }`
        }
      >
        All App
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          `font-bold hover:text-blue-600 ${
            isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
          }`
        }
      >
        Trending Apps
      </NavLink>
      {emailVerified && (
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `font-bold hover:text-blue-600 ${
              isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
            }`
          }
        >
          Profile
        </NavLink>
      )}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `font-bold hover:text-blue-600 ${
            isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
          }`
        }
      >
        About
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-blue-600 cursor-pointer"
          >
            AppStore
          </div>
          <div className="hidden lg:flex space-x-8">{links}</div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search apps..."
                className="border rounded-full px-4 py-1 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-2 text-gray-400" />
            </div>

            {emailVerified ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-1 rounded-full"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-1 rounded-full"
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
