import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ExploreGardenr = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/gardenersInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setGardeners(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch gardeners info:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <Helmet>
        <title>Garden | Explore</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        🌿 Explore Gardeners
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {gardeners.map((g) => (
          <div
            key={g.age}
            className="bg-white text-center rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={g.image}
              alt={g.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                {g.name}
              </h2>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside text-gray-700 text-sm mb-4">
                {g.categories?.slice(0, 5).map((cat, idx) => (
                  <li key={idx}>{cat}</li>
                ))}
              </ul>

              <p>
                <span className="font-medium">Age:</span> {g.age}
              </p>
              <p>
                <span className="font-medium">Gender:</span> {g.gender}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={`${
                    g.status === "active" ? "text-green-600" : "text-red-600"
                  } font-semibold`}
                >
                  {g.status}
                </span>
              </p>
              <p>
                <span className="font-medium">Experience:</span> {g.experience}
              </p>
              <p>
                <span className="font-medium">Shared Tips:</span> {g.totalTips}
              </p>
              {g.other && <p className="text-sm text-gray-600">{g.other}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardenr;
