import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import AppHubLogo from "../../assets/AppHub.png";

const Navbar = () => {
  const { user, logoutUser, emailVerified } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold hover:text-blue-600 transition ${
            isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
          }`
        }
      >
        All Apps
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          `font-semibold hover:text-blue-600 transition ${
            isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
          }`
        }
      >
        Trending
      </NavLink>
      {emailVerified && (
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `font-semibold hover:text-blue-600 transition ${
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
          `font-semibold hover:text-blue-600 transition ${
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
            <img src={AppHubLogo} alt="" className="w-15 h-15" />
          </div>
          <div className="hidden lg:flex space-x-8">{links}</div>
          <div className="hidden lg:flex items-center gap-4">
            {emailVerified ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-1 rounded-full transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-1 rounded-full transition"
              >
                Login
              </button>
            )}
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FaTimes className="text-2xl text-gray-700" />
              ) : (
                <FaBars className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t px-4 py-4 space-y-3">
          <div className="flex flex-col gap-2">{links}</div>
          <div className="mt-3">
            {emailVerified ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-full transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
