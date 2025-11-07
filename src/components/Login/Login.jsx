import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Login = ({ onRegisterClick }) => {
  const { loginUser } = use(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          setSuccess("Login Successful");
          Navigate("/");
        } else {
          setSuccess("");
          setError("Please verify your email before login ");
          auth.signOut();
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
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
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Cannot Have an account?{" "}
        <NavLink
          to="/register"
          onClick={onRegisterClick}
          className="text-blue-600 font-semibold hover:underline"
        >
          Please Register
        </NavLink>
      </p>
      {success && (
        <p className="text-green-400 text-center">Login Successfully</p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default Login;
