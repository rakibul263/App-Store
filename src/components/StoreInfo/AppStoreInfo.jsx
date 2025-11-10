import React from "react";
import { NavLink } from "react-router";

const AppStoreInfo = () => {
  return (
    <section
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "#0070f3", marginBottom: "10px" }}>
        Download Our App Store
      </h2>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Explore thousands of amazing apps. Download now and enjoy exclusive
        features!
      </p>
      <NavLink className="btn btn-primary mt-5" to="/notavailable">
        Explore Apps
      </NavLink>
    </section>
  );
};

export default AppStoreInfo;
