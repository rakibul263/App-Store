import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading user information...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm text-center border border-gray-200">
        <img
          src={
            user.photoURL ||
            "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80"
          }
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto border-2 border-blue-500"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">
          {user.displayName || "User"}
        </h1>
        <h2 className="text-md font-medium text-gray-600 mt-1">{user.email}</h2>

        {user.emailVerified ? (
          <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
            Email Verified
          </span>
        ) : (
          <span className="inline-block mt-3 px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
            Email Not Verified
          </span>
        )}
      </div>
    </div>
  );
}
