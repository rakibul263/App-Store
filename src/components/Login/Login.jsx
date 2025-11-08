import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Login = ({ onRegisterClick }) => {
  const { loginUser, googleLogin } = use(AuthContext);
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
  const handleGoogleLogin = () => {
    googleLogin();
    Navigate("/");
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
        <p className="text-green-400 text-center">Login Successfully</p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default Login;
