import React, { useState } from "react";
import { allCocktails, cocktailLists } from "../../constants";

const Meun = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);

  const goToSlide = (index) => {
    const newIndex = (index + allCocktails.length) % allCocktails.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative radial-gradient -min-h-screen w-full text-gray-100 px-24 py-20 flex flex-col items-center justify-between">
      {/* menu heading */}
      <div className="flex item-center gap-10">
        {allCocktails.map((item, index) => (
          <div onClick={() => goToSlide(index)} key={index}>
            <p
              className={`text-4xl font-modern-negra cursor-pointer whitespace-nowrap transition-colors duration-300 ${
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
      <div className="h-8/12 w-full flex justify-between mt-20">
        <img
          onClick={() => goToSlide(currentIndex - 1)}
          src="./images/left-arrow.png"
          alt="left-arrow"
          className="h-fit self-center"
        />
        <img
          src={allCocktails[currentIndex].image}
          alt=""
          className="object-cover"
        />
        <img
          onClick={() => goToSlide(currentIndex + 1)}
          src="./images/right-arrow.png"
          alt="right-arrow"
          className="h-fit self-center"
        />
      </div>

      <div className="w-full flex items-center justify-between font-poppins absolute z-30 bottom-0 px-24">
        <div className="flex flex-col gap-2">
          <p>Recipes for:</p>
          <h2 className="text-6xl font-modern-negra text-yellow">
            {allCocktails[currentIndex].name}
          </h2>
        </div>

        <div className="w-96 flex flex-col gap-2">
          <h2 className="text-6xl font-serif">
            {allCocktails[currentIndex].title}
          </h2>
          <p>{allCocktails[currentIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Meun;
