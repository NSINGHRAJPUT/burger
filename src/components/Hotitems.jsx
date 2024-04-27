import React from "react";
import EmblaCarousel from "./emblacarousel/EmblaCarousel";
import burger from "../assets/Image.png";

function Hotitems() {
  const OPTIONS = { loop: true };
  let card1 = {
    cardImg: burger,
    title: "Veg Chizy Burger",
    price: "$15",
  };

  let arr = [card1, card1, card1, card1, card1, card1, card1];

  return (
    <div className=" w-full px-[2.5%] flex flex-col justify-evenly gap-6">
      <div className="my-6">
        <div className="text-4xl text-center text-white">-HOT ITEMS-</div>
        <p className="text-white text-center">
          LOCALLY SOURCED, ORGANIC INGREDIENTS FOR A FRESH AND ECO-FRIENDLY
          EXPERIENCE
        </p>
      </div>
      <div>
        <EmblaCarousel slides={arr} options={OPTIONS} />
      </div>
    </div>
  );
}

export default Hotitems;
