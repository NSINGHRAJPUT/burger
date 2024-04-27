import React from "react";
import { FaShareAlt } from "react-icons/fa";
import wwruser from "../assets/Group 24.png";

const WhoWeAre = () => {
  return (
    <section className="py-12 px-[2.5%] md:flex md:justify-between md:items-center">
      <div className="md:w-1/2 md:pr-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          WHO WE ARE
        </h2>
        <div className="mb-8 text-white">
          <p className="text-sm md:text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            condimentum nulla at viverra ultricies.
          </p>
          <p className="text-sm md:text-base mb-4">
            Suspendisse potenti. Nullam at enim id libero vehicula dictum quis
            nec eros.
          </p>
          <hr className="my-8" />
          <p className="text-sm md:text-base mb-4">
            Vivamus lacinia lacinia arcu, ac vulputate mauris congue in.
            condimentum nulla at viverra ultricies.
          </p>
          <p className="text-sm md:text-base mb-4">
            Pellentesque non ante at ante auctor tempor. condimentum nulla at
            viverra ultricies.
          </p>
          <div className="flex items-center justify-center">
            <FaShareAlt className="text-orange-500 mr-2" />
            <span className="text-sm text-orange-500 font-bold">Share</span>
          </div>
        </div>
      </div>
      <div className="md:w-2/5 mt-6 md:mt-0 wwr relative">
        <img
          src={wwruser}
          alt="Who We Are"
          className="w-full object-contain  rounded-lg top-0"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
