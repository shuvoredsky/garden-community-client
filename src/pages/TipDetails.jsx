import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { BiSolidLike } from "react-icons/bi";
import Swal from "sweetalert2";

const TipDetails = () => {
  const [like, setLike] = useState(0);
  const data = useLoaderData();
  const {
    _id,
    title,
    availability,
    category,
    imageUrl,
    description,
    difficulty,
    plantType,
  } = data;

  const handleupdateLike = () => {
    setLike(like + 1);
    console.log(like);
    fetch(`https://garden-community-server.vercel.app/gardener/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ like: like }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("You liked this Tip");
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4 py-10">
      <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4 border border-green-200"
        />

        <h2 className="text-xl font-bold text-green-800 mb-4 text-center">
          {title}
        </h2>

        <div className="text-gray-700">
          <p className="font-semibold text-green-900 mb-1">Description:</p>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-green-700 my-5">
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
        <div className="text-center text-sky-600 cursor-pointer flex items-center justify-center">
          <button onClick={handleupdateLike}>
            <BiSolidLike size={25} />
          </button>
          <p>
            : <span>{like}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
