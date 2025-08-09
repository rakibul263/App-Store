import React from "react";

const ErrorPage = ({ statusCode = 404, message = "Page Not Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-red-600 mb-4">
        {statusCode}
      </h1>
      <p className="text-2xl text-gray-700 mb-8">{message}</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default ErrorPage;
