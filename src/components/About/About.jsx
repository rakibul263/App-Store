import React from "react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg border">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        About App Store
      </h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Welcome to the <span className="font-semibold">App Store</span>! Here
        you can explore, download, and review amazing apps across different
        categories like Educational, Productivity, Writing, Development, Design,
        and Communication. Our goal is to make finding the right apps simple and
        enjoyable.
      </p>

      <div className="bg-gray-100 p-6 rounded-xl shadow-inner">
        <h2 className="text-2xl font-semibold mb-3">Developer Info</h2>
        <p>
          <span className="font-medium">Name:</span> Md Rakibul Hasan
        </p>
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:rakibulhasanshuvo206@gmail.com"
            className="text-blue-600 underline"
          >
            rakibulhasanshuvo206@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
