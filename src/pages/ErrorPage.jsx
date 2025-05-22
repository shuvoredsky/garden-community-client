import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="text-center">
        <img
          src="https://i.ibb.co/WzP8TCN/404-garden.png" // একটি সুন্দর 404 ইমেজ
          alt="404 Not Found"
          className="w-72 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-green-700 mb-2">Oops!</h1>
        <p className="text-xl text-gray-700 mb-4">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
