import React, { useEffect, useState } from "react";

const ActiveGardeners = () => {
  const [activeGardener, setActiveGardener] = useState([]);
  useEffect(() => {
    fetch("gardeners.json")
      .then((res) => res.json())
      .then((data) => {
        const activeGardeners = data.filter(
          (single) => single.status == "active"
        );
        setActiveGardener(activeGardeners);
      });
  }, []);
  return (
    <div>
      <h1 className="text-black text-3xl text-center font-bold py-6">
        Active Gardeners
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {activeGardener.map((gardener) => (
          <div
            key={gardener.id}
            className="bg-green-50 border border-green-300 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center p-5">
              <img
                className="w-full h-48 object-cover mb-4 rounded-md shadow-sm"
                src={gardener.image}
                alt={gardener.name}
              />
              <h2 className="text-xl font-semibold text-green-800 text-center">
                {gardener.name}
              </h2>
              <span
                className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                  gardener.status === "active"
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {gardener.status.charAt(0).toUpperCase() +
                  gardener.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveGardeners;
