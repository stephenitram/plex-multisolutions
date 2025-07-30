import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#000300] shadow-md">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-22 text-white bg-[#000300]">
        {/* // <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center max-w-[1240px] mx-auto px-4 h-22 text-white bg-[#000300]"> */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Plex Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        <ul className="hidden md:flex ease-in-out duration-500 text-[#22BFC3]">
          <li className="p-4 hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:text-white">
            <Link to="/services">Services</Link>
          </li>
          <li className="p-4 hover:text-white">
            <Link to="/plexacademy">
              <button className="bg-[#FF6B4A] w-[150px] rounded-md font-medium mx-auto py-1 text-white hover:bg-[#22BFC3] cursor-pointer border border-[#22BFC3]">
                PLEX Academy
              </button>
            </Link>
          </li>

          <li className="p-4 hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 hover:text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="block md:hidden ease-in-out duration-500"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          ref={navRef}
          className={
            nav
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <Link to="/">
            <img
              src="/logo.png"
              alt="Plex Logo"
              className="h-20 w-auto object-contain pl-4 pt-1.4"
            />
          </Link>

          <ul className="pt-24 uppercase p-4">
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              <Link to="/" onClick={handleNav}>
                Home
              </Link>
            </li>

            <li className="p-4 border-b border-gray-600 cursor-pointer">
              <Link to="/services" onClick={handleNav}>
                Services
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              <Link to="/plexacademy" onClick={handleNav}>
                PLEX Academy
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              <Link to="/about" onClick={handleNav}>
                About
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              <Link to="/contact" onClick={handleNav}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
