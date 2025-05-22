import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
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

        {/* Section 2: About / Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Gardenia</h3>
          <p className="text-sm leading-relaxed">
            Gardenia is a community-driven platform to share tips, ideas, and
            love for gardening. Whether you are a beginner or expert, grow your
            knowledge and your garden here.
          </p>
          <p className="mt-4 text-sm">
            📧 Email: support@gardenia.com <br />
            📞 Phone: +880 1234 567890
          </p>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-8 border-t border-white/20 pt-4 text-sm">
        © {new Date().getFullYear()} Gardenia Community. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
