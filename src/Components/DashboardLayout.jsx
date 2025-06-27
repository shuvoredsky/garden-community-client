import React, { use, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { useLocation } from "react-router";

import { FaBox, FaBars, FaTimes, FaUser, FaList, FaPlus } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const DashBoardLayout = () => {
  const [totalTips, setTotalTips] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const isProfilePage = location.pathname === "/dashboardLayout";

  const { user } = use(AuthContext);

  const [myTips, setMyTips] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`https://garden-community-server.vercel.app/my-items/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data));
    }
  }, [user]);
  useEffect(() => {
    fetch("https://garden-community-server.vercel.app/gardener")
      .then((res) => res.json())
      .then((data) => setTotalTips(data));
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-col  md:flex-row min-h-screen lg:w-6xl mx-auto">
      {/* Mobile header with toggle button */}
      <div className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold ">Garden Dashboard</h1>
        <button
          onClick={toggleDrawer}
          className="text-gray-600 hover:text-gray-900"
        >
          {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Drawer component - responsive */}
      <div
        id="drawer-navigation"
        className={`fixed md:static top-0 left-0 z-40 min-h-fit p-4 overflow-y-auto bg-slate-100 w-64 shadow-md md:shadow-none transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex justify-between items-center mb-4">
          <button
            type="button"
            onClick={toggleDrawer}
            className="md:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
          >
            <FaTimes size={16} />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/dashboardLayout"
                end // This fixes the active state issue
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-900 hover:bg-gray-100"
                  }`
                }
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <FaUser className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboardLayout/my-gardeners-tips"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-900 hover:bg-gray-100"
                  }`
                }
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <FaList className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">My Garden Tips</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboardLayout/add-gardener-tips"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-900 hover:bg-gray-100"
                  }`
                }
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <FaPlus className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">Share Your Tips</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboardLayout/allTips"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg group ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-900 hover:bg-gray-100"
                  }`
                }
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <FaBox className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">All Tips Here</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Overlay for mobile */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden "
          onClick={toggleDrawer}
        ></div>
      )}
      {/* Main content area - responsive */}
      {isProfilePage && (
        <div className="max-w-4xl lg:mt-24 lg:ml-24">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/150"}
                  alt="User profile"
                  className="h-48 w-full object-cover md:w-48 md:h-full"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
                  Gardener Profile
                </div>
                <h1 className="block mt-1 text-2xl font-medium text-gray-900">
                  {user?.displayName || "Garden Enthusiast"}
                </h1>
                <p className="mt-2 text-gray-600">{user?.email}</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    Active Member
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Total Tips</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {totalTips.length}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">My Tips</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {myTips.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 p-4 md:ml-64 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
