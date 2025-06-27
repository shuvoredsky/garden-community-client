import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => toast.error(err.message));
  };

  const navLinks = [
    ["Home", "/"],
    ["All Tips", "/browse-tips"],
    ["Explore Gardeners", "/explore-gardeners"],
    ["Share Tip", "/share-tip"],
    ["My Tips", "/my-tips"],
    ["Dashboard", "/dashboardLayout"],
  ];

  const activeClass =
    "border-b-2 border-green-300 dark:border-green-400 font-semibold";

  return (
    <header className="sticky top-0 z-50 bg-green-800 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-bold text-white">Garden</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `text-md px-2 py-1 transition duration-200 ${
                  isActive
                    ? activeClass
                    : "hover:border-b-2 hover:border-green-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop User */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <button onClick={() => navigate("/sign-in")}>Sign in</button>
              <button onClick={() => navigate("/sign-up")}>Sign up</button>
            </>
          ) : (
            <>
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
                alt="User"
              />
              <button
                onClick={handleLogOut}
                className="px-3 py-2 text-sm font-bold bg-white text-green-800 rounded hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative">
          {user ? (
            <details className="dropdown dropdown-end">
              <summary className="cursor-pointer list-none">
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  alt="User"
                />
              </summary>
              <ul className="absolute right-0 mt-2 p-3 bg-green-900 shadow-lg rounded-md w-48 text-white z-50">
                {navLinks.map(([label, path]) => (
                  <li key={label}>
                    <NavLink
                      to={path}
                      className="block py-1 px-2 hover:bg-green-700 rounded"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li className="border-t mt-2 pt-2">
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-2 py-1 hover:bg-red-600 rounded"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </details>
          ) : (
            <FaUser
              size={24}
              className="cursor-pointer text-white"
              onClick={() => navigate("/sign-in")}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
