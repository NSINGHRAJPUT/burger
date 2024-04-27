import React from "react";
import dimg from "../assets/Group 20.png";

const Discount = () => {
  return (
    <section className=" bg-orange-500 py-0 px-[2.5%] md:flex md:justify-around md:items-center my-[5rem]">
      <div className="md:w-1/2 flex flex-col gap-2">
        <p className="text-xs md:text-sm font-bold text-white ">Get Up To</p>
        <p className="text-3xl md:text-4xl font-bold text-white">50% OFF</p>
        <p className="text-xs md:text-sm text-white">On Your 2 Orders</p>
        <button className="bg-white w-[10rem] hover:bg-gray-100 text-orange-500 font-bold py-2 px-6 rounded-full">
          Order Now
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src={dimg} alt="Discount" className="w-full rounded-lg" />
      </div>
    </section>
  );
};

export default Discount;
