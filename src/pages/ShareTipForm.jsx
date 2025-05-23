import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const ShareTipForm = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    plantType: "",
    difficulty: "Easy",
    description: "",
    imageUrl: "",
    category: "Plant Care",
    availability: "Public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch("https://garden-community-server.vercel.app/gardener", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(submissionData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("✅ Tips shared successfully!");
        }
      });

    toast.success("🌱 Garden tip shared successfully!");
    setFormData({
      title: "",
      plantType: "",
      difficulty: "Easy",
      description: "",
      imageUrl: "",
      category: "Plant Care",
      availability: "Public",
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 md:p-10 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-700 dark:text-green-300">
        <Typewriter
          words={[
            "🌿 Share Your Garden Tip",
            "🌼 Grow Knowledge Together",
            "🌱 Contribute with Your Experience",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="title"
          placeholder="Title (e.g., Indoor Tomato Tips)"
          value={formData.title}
          onChange={handleChange}
          className="col-span-1 md:col-span-2 p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        />

        <input
          type="text"
          name="plantType"
          placeholder="Plant Type / Topic"
          value={formData.plantType}
          onChange={handleChange}
          className="p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="col-span-1 md:col-span-2 p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        ></textarea>

        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="col-span-1 md:col-span-2 p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        >
          <option>Plant Care</option>
          <option>Composting</option>
          <option>Vertical Gardening</option>
        </select>

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="p-3 border rounded bg-gray-100 dark:bg-gray-600 dark:text-white"
        />
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="p-3 border rounded bg-gray-100 dark:bg-gray-600 dark:text-white"
        />

        <button
          type="submit"
          className="col-span-1 md:col-span-2 mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded transition"
        >
          ✅ Share Tip
        </button>
      </form>
    </div>
  );
};

export default ShareTipForm;
