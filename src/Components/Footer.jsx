import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import logo from "/logo.png";
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
          {/* Column 1 */}
          <div>
            <Link
              to="/"
              className="flex justify-center sm:justify-start items-center mb-4"
            >
              <img className="w-10 h-10 mr-2" src={logo} alt="Logo" />
              <h3 className="text-xl font-bold">Garden</h3>
            </Link>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/browse-tips" className="hover:underline">
                  Browse Tips
                </Link>
              </li>
              <li>
                <Link to="/my-tips" className="hover:underline">
                  My Tips
                </Link>
              </li>
              <li>
                <Link to="/explore-gardeners" className="hover:underline">
                  Explore Gardeners
                </Link>
              </li>
              <li>
                <Link to="/share-tip" className="hover:underline">
                  Share Tip
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-3">About</h4>
            <p className="text-sm leading-relaxed mb-3">
              Gardenia is your friendly garden community for sharing tips,
              learning new techniques, and connecting with fellow plant lovers.
              🌱
            </p>
            <p className="text-sm">📧 support@gardenia.com</p>
            <p className="text-sm">📞 +880 1234 567890</p>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center sm:justify-start space-x-5 text-2xl">
              <a
                href="https://www.facebook.com/sk.shuvo.129794"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/shuvoredsky/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 w-full pt-6 mt-10 text-sm text-center">
          © {new Date().getFullYear()} Gardenia Community. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
