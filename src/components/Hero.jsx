import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-gray-900 px-4 pt-32 h-20">
      <div className="w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-between gap-12 py-12">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <p className="inline-block text-sm sm:text-base font-semibold text-[#FFA07A] bg-[#1a1a1a] uppercase tracking-wider px-5 py-2 border-l-4 border-[#22BFC3] shadow-md mb-4">
            Your one-stop solution for training, printing & branding
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#22BFC3] leading-tight">
            Plex Multisolutions
          </h1>

          <div className="mt-4">
            <ReactTyped
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#22BFC3] via-[#FFA07A] to-[#22BFC3]"
              strings={[
                "Graphic Design",
                "Corporate Skills Training",
                "Printing Services",
                "Branding Solutions",
              ]}
              typeSpeed={100}
              backSpeed={80}
              loop
            />
          </div>

          <Link to="/contact">
            <button className="mt-6 bg-[#FF6B4A] hover:bg-[#22BFC3] hover:text-white text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold transition duration-300 border border-[#22BFC3]">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/images/plex-image.png"
            alt="Plex Services"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border-1 border-[#22BFC3] shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
