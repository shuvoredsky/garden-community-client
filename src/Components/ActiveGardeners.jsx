import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const ActiveGardeners = () => {
  const [activeGardener, setActiveGardener] = useState([]);

  useEffect(() => {
    fetch("gardeners.json")
      .then((res) => res.json())
      .then((data) => {
        const activeGardeners = data.filter(
          (gardener) => gardener.status === "active"
        );
        setActiveGardener(activeGardeners);
      });
  }, []);

  return (
    <div className="bg-green-50 py-8 px-4">
      <h1 className="text-3xl text-center font-bold text-green-700 mb-6">
        🌿 Active Gardeners
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeGardener.map((gardener) => (
          <div
            key={gardener.id}
            className="bg-white border border-green-300 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            data-tooltip-id="active-tooltip"
            data-tooltip-content="Gardener is Active"
          >
            <div className="flex flex-col items-center p-5">
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-full h-48 object-cover mb-4 rounded-md shadow-sm"
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

      <Tooltip id="active-tooltip" place="top" effect="solid" />
    </div>
  );
};

export default ActiveGardeners;
