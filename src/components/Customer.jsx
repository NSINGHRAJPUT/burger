import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaQuoteRight } from "react-icons/fa";

const Customer = () => {
  const slides = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat magna vitae est consequat, et bibendum turpis convallis. Duis scelerisque sollicitudin est vitae tincidunt.",
      stars: 4,
      name: "John Doe",
      designation: "Customer",
    },
    {
      id: 2,
      content:
        "Pellentesque in ipsum at risus accumsan vehicula. Proin eget dui ac turpis dapibus bibendum. Aliquam non tellus a risus lacinia rhoncus.",
      stars: 5,
      name: "Jane Doe",
      designation: "Manager",
    },
    {
      id: 3,
      content:
        "Fusce id elit at est laoreet eleifend. Mauris convallis tempor risus, et aliquet lorem bibendum nec. Ut in quam in massa mattis laoreet.",
      stars: 3,
      name: "Alice",
      designation: "CEO",
    },
    {
      id: 6,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat magna vitae est consequat, et bibendum turpis convallis. ",
      stars: 4,
      name: "John Doe",
      designation: "Customer",
    },
    {
      id: 4,
      content:
        "Pellentesque in ipsum at risus accumsan vehicula. Proin eget dui ac turpis dapibus bibendum. Aliquam non tellus a risus lacinia rhoncus.",
      stars: 5,
      name: "Jane Doe",
      designation: "Manager",
    },
    {
      id: 5,
      content:
        "Fusce id elit at est laoreet eleifend. Mauris convallis tempor risus, et aliquet lorem bibendum nec. Ut in quam in massa mattis laoreet.",
      stars: 3,
      name: "Alice",
      designation: "CEO",
    },
  ];

  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="py-12  text-white px-[2.5%]">
      <h2 className="text-3xl font-bold text-center mb-8">
        WHAT OUR CUSTOMER SAYS
      </h2>
      <div className="embla" ref={viewportRef}>
        <div className="w-[93.7vw] flex flex-row">
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{ flex: "0 0 50%" }}
              className="bg-white p-2 rounded-lg mx-2 w-auto h-[360px] md:h-[300px] text-center"
            >
              <div className="bg-orange-500 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaQuoteRight className="text-white" />
              </div>
              <p className="text-lg md:text-xl mb-2 text-orange-500">
                {slide.content}
              </p>
              <div className="flex justify-center items-center mb-4">
                {Array.from({ length: slide.stars }).map((_, index) => (
                  <span
                    key={index}
                    className="text-orange-500 text-xl md:text-2xl mx-1"
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mb-2">{slide.name}</p>
              <p className="text-xs text-gray-400">{slide.designation}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full">
          View More
        </button>
      </div>
    </section>
  );
};

export default Customer;
