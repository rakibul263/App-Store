import React from "react";

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
      <button
        style={{
          marginTop: "10px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Explore Apps
      </button>
    </section>
  );
};

export default AppStoreInfo;
