import React from "react";
import {
  FaArrowRight,
  FaUtensils,
  FaTruck,
  FaHandHolding,
} from "react-icons/fa";

const HowDoesItWork = () => {
  const cards = [
    {
      icon: <FaUtensils size={24} />,
      heading: "Choose Your Meal",
      description: "Select from a variety of delicious burgers on our menu.",
    },
    {
      icon: <FaTruck size={24} />,
      heading: "Delivery to You",
      description:
        "We deliver your order straight to your doorstep in no time.",
    },
    {
      icon: <FaHandHolding size={24} />,
      heading: "Enjoy Your Meal",
      description: "Sit back, relax, and enjoy your tasty burger!",
    },
  ];

  return (
    <section className="py-12 px-[2.5%]">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        How Does It Work
      </h2>
      <div className="flex flex-wrap justify-evenly gap-8 m-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white relative p-6 rounded-lg shadow-md w-[240px]"
          >
            <div className="flex items-center absolute -top-[10%] left-[38%] justify-center mb-4 bg-orange-500 w-12 h-12 rounded-full text-white">
              {card.icon}
            </div>
            <h3 className="text-lg pt-6 md:text-xl font-bold text-orange-700 mb-2">
              {card.heading}
            </h3>
            <p className="text-sm md:text-base text-orange-700 mb-4">
              {card.description}
            </p>
            <div className="flex justify-center">
              <FaArrowRight className="text-orange-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowDoesItWork;
