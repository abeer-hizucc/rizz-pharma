import React, { useRef } from "react";
import { CircleArrowRight } from 'lucide-react';

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

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center">
      <div ref={sliderRef} className="flex overflow-x-auto  space-x-4 md:space-x-8 p-4">
        {items.map((item, index) => (
          <button
            key={index}
            className={`hover:cursor-pointer flex-shrink-0 px-6 py-2 rounded-full text-md text-white ring-1 ring-white transition-colors ${
              selectedCategory === item
                ? "bg-[#e1c06e] text-black hover:bg-[#d1ac5e]" 
                : "bg-transparent text-white hover:bg-gray-300 hover:text-black" 
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="hidden md:block absolute right-0 z-10"
      >
        <CircleArrowRight className="w-10 h-10 hover:cursor-pointer" color="#FFFF" />
      </button>
    </div>
  );
};

export default CategorySlider;
