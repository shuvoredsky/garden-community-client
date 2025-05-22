import React, { useEffect, useState } from "react";

const GardenerTips = () => {
  const [gardenersTips, setGardenersTips] = useState([]);
  useEffect(() => {
    fetch("https://garden-community-server.vercel.app/gardener")
      .then((res) => res.json())
      .then((data) => {
        setGardenersTips(data);
      });
  }, []);
  return (
    <div className="bg-green-50">
      <h1 className="text-3xl text-center font-bold text-green-600 py-6">
        Gardeners Tips
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
        {gardenersTips.map((gardener) => (
          <div
            key={gardener._id}
            className="flex items-center gap-4 p-4 bg-white border border-green-300 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <img
              src={gardener.imageUrl}
              alt="Garden Tip"
              className="w-24 h-24 rounded-full object-cover border border-green-400"
            />

            <h2 className="text-lg font-semibold text-green-800">
              {gardener.title}
            </h2>
            <div className="text-green-700 lg:mt-20">
              <p>
                Total Like:{" "}
                <span className="font-bold">
                  {gardener.like ? gardener.like : 0}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GardenerTips;
