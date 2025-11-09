import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const RegisterPage = ({ onLoginClick }) => {
  const [success, setSuccess] = useState(false);
  const { createUser, sendVerify, googleLogin } = use(AuthContext);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => {
        sendVerify().then(() => {
          setSuccess(true);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    setSuccess("");
  };

  const handleGoogleLogin = () => {
    googleLogin();
    Navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-[2rem] p-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Enter your name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$"
            required
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Already Have an account?{" "}
        <NavLink
          to="/login"
          onClick={onLoginClick}
          className="text-blue-600 font-semibold hover:underline"
        >
          Please Login
        </NavLink>
      </p>
      <div className="flex justify-center items-center mt-5">
        <button
          className="btn bg-white text-black border-[#e5e5e5] w-full"
          onClick={handleGoogleLogin}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
      {success && (
        <p className="text-green-400 text-center">
          Verification email sent! Please check your inbox.
        </p>
      )}
    </div>
  );
};

export default RegisterPage;
