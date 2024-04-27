// src/Header.js
import React from "react";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-white py-4 px-6 ">
      <div className="flex items-center z-10">
        <div className="flex items-center">
          <FaHamburger size={24} className="text-white mr-2" />
          <span className="font-bold text-lg">Delicious Burgers</span>
        </div>
      </div>
      <div className="text-lg z-10 hidden md:inline">
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a href="#outlets" className="text-white">
                Our Outlets
              </a>
            </li>
            <li className="mr-6">
              <a href="#order" className="text-white">
                Order
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="z-10">
        <FaHamburger size={24} className="text-white" />
      </div>
    </header>
  );
};

export default Header;
