import React from "react";
import { Link, useLoaderData } from "react-router";

const TrendingApps = () => {
  const apps = useLoaderData();
  const topApps = [...apps].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <section className="mt-10 mb-6">
      <h2 className="text-3xl font-bold mb-6">Trending Apps</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {topApps.map((app) => (
          <Link
            to={`/appDetails/${app.id}`}
            key={app.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden cursor-pointer"
          >
            <img
              src={app.thumbnail}
              alt={app.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">{app.name}</h3>
              <p className="text-sm text-gray-500 truncate">
                by {app.developer}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-gray-600">
                  📥 {app.downloads.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-yellow-500">
                  ⭐ {app.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingApps;
