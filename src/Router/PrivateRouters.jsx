import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate } from "react-router";

export default function PrivateRouters({ children }) {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center max-h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}
