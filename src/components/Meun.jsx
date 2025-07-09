import React, { useState } from "react";
import { allCocktails } from "../../constants";

const Meun = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);

  const goToSlide = (index) => {
    const newIndex = (index + allCocktails.length) % allCocktails.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="radial-gradient h-screen w-full text-gray-100 px-24 py-20 flex justify-center">
      {/* menu heading */}
      <div className="flex item-center gap-10">
        {allCocktails.map((item, index) => (
          <div onClick={() => goToSlide(index)} key={index}>
            <p
              className={`text-4xl font-modern-negra cursor-pointer transition-colors duration-300 ${
                currentIndex === index
                  ? "text-gray-100 border-b border-gray-100"
                  : "text-zinc-700 border-b border-zinc-700"
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Slider section */}
    </section>
  );
};

export default Meun;
