import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center text-center space-y-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Column 1 */}
          <div className="lg:ml-40">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4">About Gardenia</h3>
            <p className="text-sm leading-relaxed mb-3">
              Gardenia is your friendly garden community for sharing tips,
              learning new techniques, and connecting with fellow plant lovers.
              🌱
            </p>
            <p className="text-sm">📧 support@gardenia.com</p>
            <p className="text-sm">📞 +880 1234 567890</p>
          </div>

          {/* Column 3 */}
          <div className="lg:ml-20">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-5 text-2xl">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 w-full pt-6 text-sm">
          © {new Date().getFullYear()} Gardenia Community. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
