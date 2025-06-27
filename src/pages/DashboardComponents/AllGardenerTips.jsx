import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const GardenerTips = () => {
  const [gardenersTips, setGardenersTips] = useState([]);

  useEffect(() => {
    fetch("https://garden-community-server.vercel.app/gardener")
      .then((res) => res.json())
      .then((data) => setGardenersTips(data));
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-4">
          Gardeners Tips
        </h1>
        <p className="text-center text-green-600 max-w-2xl mx-auto mb-12">
          Discover community-shared gardening wisdom to help your plants thrive
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {gardenersTips.map((gardener) => (
            <div
              key={gardener._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={gardener.imageUrl}
                  alt="Garden Tip"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h2 className="text-xl font-bold text-white">
                    {gardener.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <p className="text-green-700 mb-4 line-clamp-2">
                  {gardener.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">
                      {gardener.like || 0} Likes
                    </span>
                  </div>

                  <Link
                    to={`/gardener/${gardener._id}`}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GardenerTips;
