import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseTips = () => {
  // const navigate = useNavigate();
  const [browseTips, setBrowseTips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/gardener")
      .then((res) => res.json())
      .then((data) => {
        setBrowseTips(data);
      });
  }, []);

  // const handleTipsDetails = (id) => {
  //   console.log(id);
  //   navigate(`/tip-details/${id}`);
  // };

  return (
    <div className="overflow-x-auto p-4 bg-green-50 rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-green-200">
        <thead className="bg-green-100 text-green-800">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Image</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Category
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-green-100">
          {browseTips.map((tip) => (
            <tr key={tip._id} className="hover:bg-green-50">
              <td className="px-4 py-2">
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">{tip.title}</td>
              <td className="px-4 py-2 text-sm text-green-600">
                {tip.category}
              </td>
              <td className="px-4 py-2">
                <Link
                  to={`/gardener/${tip._id}`}
                  className="text-green-700 cursor-pointer hover:text-white hover:bg-green-500 border border-green-500 px-3 py-1 rounded-md transition"
                >
                  See More
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTips;
