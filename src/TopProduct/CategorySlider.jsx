import React, { useRef } from "react";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";

const CategorySlider = ({ selectedCategory, setSelectedCategory }) => {
  const items = [
    "All",
    "Weight Loss",
    "Sexual Health",
    "Brain Health",
    "Testosterone HRT",
    "Athletic Performance",
    "Beauty And Hair Loss",
  ];

  const sliderRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedCategory(item);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center w-full justify-center">
      <button
        onClick={scrollLeft}
        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full absolute left-0 z-10 bg-opacity-50"
      >
        <CircleArrowLeft className="w-10 h-10 hover:cursor-pointer text-white" />
      </button>
      <div className="w-[90%] overflow-hidden">
        <div ref={sliderRef} className="flex overflow-x-auto space-x-4 md:space-x-8 p-4 scrollbar-hide">
          {items.map((item, index) => (
            <button
              key={index}
              className={`hover:cursor-pointer flex-shrink-0 px-6 py-2 rounded-full text-md text-white ring-1 ring-white transition-colors ${selectedCategory === item
                ? "bg-[#e1c06e] text-black hover:bg-[#d1ac5e]"
                : "bg-transparent text-white hover:bg-[#d1ac5e] hover:text-black"
                }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={scrollRight}
        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full absolute right-0 z-10 bg-opacity-50"
      >
        <CircleArrowRight className="w-10 h-10 hover:cursor-pointer text-white" />
      </button>
    </div>
  );
};

export default CategorySlider;
