import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    difficulty: "",
    sort: "",
  });

  // Fetch tips with filters
  useEffect(() => {
    const fetchTips = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();

        if (filters.difficulty) params.append("difficulty", filters.difficulty);
        console.log("Sending filter:", filters.difficulty);

        if (filters.sort) params.append("sort", filters.sort);

        const response = await fetch(
          `https://garden-community-server.vercel.app/gardener?${params.toString()}`
        );
        const data = await response.json();
        setTips(data);
      } catch (error) {
        console.error("Error fetching tips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-800 mb-6">
          Gardening Tips
        </h1>

        {/* Filter and Sort Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
            <label
              htmlFor="difficulty"
              className="mr-2 font-medium text-gray-700"
            >
              Difficulty:
            </label>
            <select
              id="difficulty"
              name="difficulty"
              value={filters.difficulty}
              onChange={handleFilterChange}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">All Levels</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Tips Table */}
        {tips.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tips.map((tip) => (
                  <tr key={tip._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex-shrink-0 h-16 w-16">
                        <img
                          className="h-16 w-16 rounded-md object-cover"
                          src={tip.imageUrl}
                          alt={tip.title}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/100";
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {tip.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {tip.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          tip.difficulty === "Easy"
                            ? "bg-green-100 text-green-800"
                            : tip.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {tip.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        to={`/gardener/${tip._id}`}
                        className="text-green-600 hover:text-green-900"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No tips found matching your filters.
            </p>
            <button
              onClick={() => setFilters({ difficulty: "", sort: "" })}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseTips;
