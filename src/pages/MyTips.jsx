import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const loadedData = useLoaderData();
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setTips(loadedData); // set data into state when component loads
  }, [loadedData]);

  const handleDeleteTip = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://garden-community-server.vercel.app/gardener/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Garden Tip has been deleted.",
                icon: "success",
              });

              // Remove from display
              const remainingTips = tips.filter((tip) => tip._id !== _id);
              setTips(remainingTips);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto my-10">
      <Helmet>
        <title>Garden | My-Tips</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-6 text-center">My Garden Tips</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Difficulty</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id} className="border-t">
                <td className="p-3">{tip.title}</td>
                <td className="p-3">{tip.category}</td>
                <td className="p-3">{tip.difficulty}</td>
                <td className="p-3 space-x-2">
                  <Link to={`/update-tips/${tip._id}`}>
                    <button className="bg-yellow-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-yellow-600">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteTip(tip._id)}
                    className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {tips.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No garden tips available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
