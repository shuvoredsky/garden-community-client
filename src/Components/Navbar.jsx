import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Sign out successfully"))
      .catch((error) => toast.error(error.message));
  };

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
    <header className="sticky top-0 z-50  shadow-md">
      <div className="max-w-screen-xl bg-green-100 dark:bg-gray-800 dark:text-white mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Navigation */}
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

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <label
              onChange={handleToggle}
              checked={theme == "light" ? false : true}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span className="text-sm">Light</span>
              <div className="relative">
                <input type="checkbox" className="hidden peer" />
                <div className="w-10 h-6 bg-gray-300 peer-checked:bg-green-600 dark:bg-gray-600 rounded-full shadow-inner" />
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white peer-checked:left-auto peer-checked:right-0 rounded-full shadow transition-all" />
              </div>
              <span className="text-sm">Dark</span>
            </label>

            {/* Auth Buttons */}
            {!user ? (
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
            ) : (
              <details className="dropdown dropdown-end">
                <summary className="cursor-pointer list-none">
                  {user.photoURL ? (
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

          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <details className="dropdown">
              <summary className="btn btn-ghost list-none">☰</summary>
              <ul className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 p-2 w-56 space-y-1">
                {navLinks.map(([label, path]) => (
                  <li key={label}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded ${
                          isActive
                            ? "bg-green-200 dark:bg-green-600 text-green-900 dark:text-white"
                            : "hover:bg-green-100 dark:hover:bg-gray-700"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}

                {/* Mobile Theme Toggle */}
                <li>
                  <div className="flex items-center justify-between px-3 py-2 text-sm">
                    <span>Light</span>
                    <label
                      onChange={handleToggle}
                      checked={theme == "light" ? false : true}
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-600 dark:bg-gray-600" />
                      <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-full" />
                    </label>
                    <span>Dark</span>
                  </div>
                </li>

                {user && (
                  <li className="flex items-center justify-between px-3 py-2">
                    <div className="flex items-center gap-2">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          className="w-8 h-8 rounded-full border"
                          alt="user"
                        />
                      ) : (
                        <FaUser size={20} />
                      )}
                      <span className="text-sm truncate max-w-[100px]">
                        {user.displayName || "User"}
                      </span>
                    </div>
                    <button
                      onClick={handleLogOut}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
