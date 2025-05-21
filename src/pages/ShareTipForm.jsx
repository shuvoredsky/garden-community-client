import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

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

    console.log("Submitting garden tip:", submissionData);

    fetch("http://localhost:3000/gardener", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(submissionData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("in the client side data", data);
      });

    // Show success message
    toast.success("Garden tip shared successfully!");
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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        ➕ Share a Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title (e.g., How I Grow Tomatoes Indoors)"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="plantType"
          placeholder="Plant Type / Topic"
          value={formData.plantType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
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
          className="w-full p-2 border rounded"
          required
        ></textarea>

        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
        </select>

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <div className="flex gap-4">
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="w-1/2 p-2 border rounded bg-gray-100"
          />
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-1/2 p-2 border rounded bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Submit Garden Tip
        </button>
      </form>
    </div>
  );
};

export default ShareTipForm;
