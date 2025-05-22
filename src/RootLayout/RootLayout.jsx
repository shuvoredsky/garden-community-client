// src/Layout/RootLayout.jsx
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const RootLayout = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition duration-300">
        <Navbar />
        <main className="min-h-[calc(100vh-136px)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
