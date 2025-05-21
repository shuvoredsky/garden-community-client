import React from "react";
import { useLoaderData } from "react-router";

const TipDetails = () => {
  const data = useLoaderData();
  const {
    title,
    availability,
    category,
    imageUrl,
    description,
    difficulty,
    plantType,
  } = data;

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4 py-10">
      <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-md">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4 border border-green-200"
        />

        {/* Title */}
        <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
          {title}
        </h2>

        {/* Info Grid - 2 rows */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-green-700 mb-6">
          <div>
            <span className="font-semibold">Availability:</span> {availability}
          </div>
          <div>
            <span className="font-semibold">Category:</span> {category}
          </div>
          <div>
            <span className="font-semibold">Difficulty:</span> {difficulty}
          </div>
          <div>
            <span className="font-semibold">Plant Type:</span> {plantType}
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-700">
          <p className="font-semibold text-green-900 mb-1">Description:</p>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
