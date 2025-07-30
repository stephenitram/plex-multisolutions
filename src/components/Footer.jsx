// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#000300] text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <Link to="/">
            <img
              src="/logo.png"
              alt="Plex Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>
          {/* <h1 className="text-3xl font-bold text-[#00df9a]">PLEX.</h1> */}
          <p className="py-4">
            Your trusted partner for printing, design, and digital productivity
            services in Abuja and beyond.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-gray-400">Quick Links</h2>
          <ul className="pt-2">
            <li className="py-1 text-[#22BFC3] cursor-pointer   hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1 text-[#22BFC3] cursor-pointer   hover:text-white">
              <Link to="/services">Services</Link>
            </li>
            <li className="py-1 text-[#22BFC3] cursor-pointer   hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="py-1 text-[#22BFC3] cursor-pointer   hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400">Connect With Us</h2>
          <div className="flex gap-4 mt-4">
            <a
              href="https://web.facebook.com/profile.php?id=61578868648772"
              target="_blank"
              rel="noopener norefferer"
            >
              <FaFacebookF className="text-[#22BFC3] cursor-pointer  hover:text-white" />
            </a>

            <FaInstagram className="text-[#22BFC3] cursor-pointer  hover:text-white" />
            <a
              href="https://wa.me/message/E5TX552OFLAZI1"
              target="_blank"
              rel="noopener norefferer"
            >
              <FaWhatsapp className="text-[#22BFC3] cursor-pointer  hover:text-white" />
            </a>

            <FaSquareXTwitter className="text-[#22BFC3] cursor-pointer  hover:text-white" />
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 pt-6">
        &copy; {new Date().getFullYear()} Plex-Multisolutions Ltd. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
