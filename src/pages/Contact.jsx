// pages/Contact.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDirections } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 text-white ">
      <h2 className="text-4xl font-bold text-center text-[#22BFC3] mb-16 pt-14 h-20">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-2">
            📍 XF8P+G3M, Wumba District, opposite Baifor Accademy, Apo, Abuja
            900110, Federal Capital Territory
          </p>
          <p className="mb-2">☎ +234 814 222 2141</p>
          <p className="mb-6">📧 plex.msolutions@gmail.com</p>

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
            <div></div>
            <a
              href="https://maps.app.goo.gl/aVGmKuogvcWFyaX19"
              target="_blank"
              rel="noopener norefferer"
            >
              <FaDirections className="text-white cursor-pointer  hover:text-white" />
            </a>
          </div>

          <div className="mt-10">
            <iframe
              // src="https://www.google.com/maps/embed?pb=..." // <— paste your full embed link here
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.6518793592644!2d7.485266563813793!3d8.96619085965799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0dfac3508317%3A0x83af414589a39f5a!2sPLEX%20MULTI-SOLUTIONS%20LTD!5e0!3m2!1sen!2sng!4v1753355086025!5m2!1sen!2sng"
              className="w-full h-60 rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

          <form
            action="https://formspree.io/f/manbjdqo"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#FF6B4A] text-black font-semibold py-3 rounded hover:bg-[#22BFC3] cursor-pointer transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
