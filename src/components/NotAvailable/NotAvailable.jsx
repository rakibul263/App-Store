import React from "react";

const NotAvailable = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-gradient-to-br from-gray-50 to-gray-100 mt-10">
      <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sorry 😔</h2>
        <p className="text-gray-600 text-lg">
          This feature is not yet available. <br />
          Please check back later.
        </p>
      </div>
    </div>
  );
};

export default NotAvailable;
