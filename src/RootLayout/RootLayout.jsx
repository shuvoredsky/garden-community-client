// src/Layout/RootLayout.jsx
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className=" dark:text-white transition-colors duration-300">
      <div className="bg-white  text-black  min-h-screen transition duration-300">
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
