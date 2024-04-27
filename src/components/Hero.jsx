// src/Hero.js
import React from "react";
import { FaPlay } from "react-icons/fa";
import burgerImage from "../assets/heroimg.png";

const Hero = () => {
  return (
    <section className="bg-transparent relative py-12 px-[2.5%] md:flex md:justify-evenly md:items-center z-20">
      <div className="md:w-1/2 md:pr-12">
        <p className="text-sm font-bold text-orange-500 mb-2">
          Crispy, Crunchy, Veggie Deliciousness!
        </p>
        <p className="text-5xl font-bold mb-4 text-white">Burgers That</p>
        <p className="text-5xl font-bold mb-6 text-white">Love the Earth</p>
        <div className="flex items-center">
          <button className="bg-white text-orange-500 font-bold py-2 px-6 mr-4 rounded-full">
            Explore
          </button>
          <button className=" text-orange-500 font-bold  flex items-center rounded-full mr-2">
            <FaPlay className="border-2 rounded-full h-16 w-16 p-5 border-orange-500" />
          </button>
          <p className="text-white"> How to Get Order</p>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 z-20">
        <img src={burgerImage} alt="Burger" className="w-full rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;
