import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const RegisterPage = ({ onLoginClick }) => {
  const [success, setSuccess] = useState(false);
  const { createUser, sendVerify } = use(AuthContext);

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
      {success && (
        <p className="text-green-400 text-center">
          Verification email sent! Please check your inbox.
        </p>
      )}
    </div>
  );
};

export default RegisterPage;
