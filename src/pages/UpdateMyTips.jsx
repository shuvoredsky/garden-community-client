import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateMyTips = () => {
  const loadedData = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: loadedData.title || "",
    plantType: loadedData.plantType || "",
    difficulty: loadedData.difficulty || "Easy",
    description: loadedData.description || "",
    imageUrl: loadedData.imageUrl || "",
    category: loadedData.category || "Composting",
    availability: loadedData.availability || "Public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(formData);

    fetch(`http://localhost:3000/gardener/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Success", "Garden tip updated successfully!", "success");
          navigate("/my-tips");
        } else {
          Swal.fire("Note", "No changes were made.", "info");
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        ✏️ Update My Tip
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="plantType"
          placeholder="Plant Type"
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
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Update Tip
        </button>
      </form>
    </div>
  );
};

export default UpdateMyTips;
