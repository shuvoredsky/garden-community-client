import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Sign out successfully"))
      .catch((error) => toast.error(error.message));
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const navLinks = [
    ["Home", "/"],
    ["Browse Tips", "/browse-tips"],
    ["Explore Gardeners", "/explore-gardeners"],
    ["Share Garden Tip", "/share-tip"],
    ["My Tips", "/my-tips"],
  ];

  const activeClass =
    "border-b-2 border-green-800 dark:border-green-400 font-semibold";

  return (
    <header className="sticky top-0 z-50 bg-green-100 dark:bg-gray-800 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold text-green-800 dark:text-white">
              Garden
            </span>
          </div>

          {/* Menu Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `text-md px-2 py-1 transition duration-200 ${
                    isActive
                      ? activeClass
                      : "hover:border-b-2 hover:border-green-400"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Toggle Theme */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <span className="text-sm">Light</span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="hidden peer"
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <div className="w-10 h-6 bg-gray-300 peer-checked:bg-green-600 dark:bg-gray-600 rounded-full shadow-inner" />
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white peer-checked:left-auto peer-checked:right-0 rounded-full shadow" />
              </div>
              <span className="text-sm">Dark</span>
            </label>

            {/* Auth Buttons */}
            {!user && (
              <>
                <button
                  onClick={() => navigate("/sign-in")}
                  className={`text-sm ${
                    pathname === "/sign-in" ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate("/sign-up")}
                  className={`text-sm ${
                    pathname === "/sign-up" ? "text-red-500 font-semibold" : ""
                  }`}
                >
                  Sign up
                </button>
              </>
            )}

            {/* User Profile */}
            {user && (
              <details className="dropdown dropdown-end">
                <summary className="cursor-pointer list-none">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-green-700 p-0.5"
                    />
                  ) : (
                    <FaUser size={24} />
                  )}
                </summary>
                <ul className="p-2 bg-white dark:bg-gray-700 shadow-md rounded-md w-32">
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn w-full text-left text-sm"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            )}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <details className="dropdown">
              <summary className="btn btn-ghost list-none">☰</summary>
              <ul className="menu dropdown-content z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52">
                {navLinks.map(([label, path]) => (
                  <li key={label}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? activeClass : ""
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
