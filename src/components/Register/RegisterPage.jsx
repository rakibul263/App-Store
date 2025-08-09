import React, { useState } from "react";
import { NavLink } from "react-router";

const RegisterPage = ({ onLoginClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Registering with\nName: ${name}\nEmail: ${email}\nPassword: ${password}`
    );
    // ekhane backend registration API call korte paren
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
            value={name}
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
            placeholder="Enter your email"
            value={email}
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
            required
            placeholder="Create a password"
            value={password}
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
        <NavLink to="/login"
          onClick={onLoginClick}
          className="text-blue-600 font-semibold hover:underline"
        >
          Please Login
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterPage;
