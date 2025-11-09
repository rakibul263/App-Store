import React, { use, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

export default function AppDetails() {
  const apps = useLoaderData();
  const { id } = useParams();
  const { user } = use(AuthContext);

  const app = apps.find((item) => item.id == id);
  const localReviews = JSON.parse(localStorage.getItem(`reviews-${id}`)) || [];
  app.reviews = localReviews;

  const [installed, setInstalled] = useState(false);

  if (!app) {
    return (
      <h2 className="text-red-500 text-xl text-center mt-10">App Not Found</h2>
    );
  }

  const handleInstallToggle = () => {
    setInstalled(!installed);
  };

  return (
    <div className="max-w-lg mx-auto mt-12 bg-white rounded-2xl shadow-xl overflow-hidden border">
      <img
        src={app.thumbnail}
        alt={app.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h1 className="text-3xl font-bold">{app.name}</h1>
        <p className="text-gray-600 mt-1">
          <span className="font-bold">Category : </span>
          {app.category}
        </p>
        <div>
          {app.features.map((item) => (
            <button className="btn btn-outline rounded-full m-1 p-2">
              {item}
            </button>
          ))}
        </div>
        <p className="text-yellow-600 font-semibold mt-1">
          ⭐ Rating: {app.rating}
        </p>
        <p>
          <span className="font-bold">Downloads : </span> {app.downloads}
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">{app.description}</p>

        <button
          onClick={handleInstallToggle}
          className={`mt-6 w-full py-3 rounded-xl text-lg font-semibold transition-all duration-300 ${
            installed
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {installed ? "Uninstall" : "Install"}
        </button>

        {installed && (
          <Link
            to={`/appDetails/${app.id}/review`}
            rel="noopener noreferrer"
            className="block text-center mt-4 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
          >
            Review
          </Link>
        )}
        {app.reviews && app.reviews.length > 0 && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-bold mb-3">User Reviews:</h3>
            {app.reviews.map((r, index) => (
              <div key={index} className="mb-3 p-3 bg-white rounded-lg shadow">
                <div className="flex gap-2">
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-6 h-6 rounded-full border-1 to-blue-500"
                  />
                  {user.displayName ? (
                    <p className="font-bold">{user.displayName}</p>
                  ) : (
                    <p>{user.email}</p>
                  )}
                </div>
                <p className="text-gray-800 ml-8">{r}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
