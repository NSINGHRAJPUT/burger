import React from "react";
import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHamburger,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-12 px-[2.5%]">
      <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
        {/* 1st column */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <FaHamburger size={24} className="text-white mr-2" />
            <span className="text-lg font-bold">BURGER</span>
          </div>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
            magna vitae est consequat, et bibendum turpis convallis.
          </p>
          <p className="text-sm mb-2">
            Suspendisse potenti. Nullam at enim id libero vehicula dictum quis
            nec eros.
          </p>
          <p className="text-sm mb-2">
            Sed vehicula nulla ut libero pulvinar, vel venenatis justo ultrices.
          </p>
          <p className="text-sm mb-2 flex items-center">
            <FaPhoneAlt className="mr-2" />
            123-456-7890
          </p>
          <p className="text-sm mb-2 flex items-center">
            <FaRegEnvelope className="mr-2" />
            info@burger.com
          </p>
          <p className="text-sm flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            123 Street, City, Country
          </p>
        </div>
        {/* 2nd column */}
        <div className="flex flex-col mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="text-sm">
            <li>
              <a href="#">Burger</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Hot Items</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        {/* 3rd column */}
        <div className="flex flex-col mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="text-sm">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Pinterest</li>
          </ul>
        </div>
        {/* 4th column */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-4">Subscribe For New Updates</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-white rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600 flex-grow"
            />
            <button className="bg-white text-red-600 rounded-r-full px-4 py-2">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © 2024 Burger. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
