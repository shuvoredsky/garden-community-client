import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaUser, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    "border-b-2 border-green-300 dark:border-green-400 font-semibold";

  return (
    <header className="sticky top-0 z-50 shadow-md bg-green-800 text-white dark:bg-green-900">
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
            <span className="text-2xl font-bold text-white">Garden</span>
          </div>

          {/* Desktop Menu */}
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

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <button
                  onClick={() => navigate("/sign-in")}
                  className={`text-sm ${
                    pathname === "/sign-in"
                      ? "text-yellow-300 font-semibold"
                      : ""
                  }`}
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate("/sign-up")}
                  className={`text-sm ${
                    pathname === "/sign-up"
                      ? "text-yellow-300 font-semibold"
                      : ""
                  }`}
                >
                  Sign up
                </button>
              </>
            ) : (
              <details className="dropdown dropdown-end">
                <summary className="cursor-pointer list-none">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      title={user.displayName || "User"}
                      className="w-10 h-10 rounded-full border-2 border-green-300 p-0.5 object-cover hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <FaUser size={32} title="Guest User" />
                  )}
                </summary>
                <ul className="p-2 mt-2 bg-white dark:bg-gray-700 shadow-md rounded-md w-36 text-black dark:text-white">
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left text-sm hover:bg-gray-200 dark:hover:bg-gray-600 p-1 rounded"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-green-700 rounded-b-md">
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map(([label, path]) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-white text-sm ${
                      isActive ? "font-semibold underline" : "hover:underline"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              {!user ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/sign-in");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-white text-sm hover:underline"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => {
                      navigate("/sign-up");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-white text-sm hover:underline"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      handleLogOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-white text-sm hover:underline"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
