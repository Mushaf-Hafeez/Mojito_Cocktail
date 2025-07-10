import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { allCocktails } from "../../constants";
import { SplitText } from "gsap/all";

const Meun = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    const newIndex = (index + allCocktails.length) % allCocktails.length;
    setCurrentIndex(newIndex);
  };

  useGSAP(() => {
    const splitTitle = SplitText.create("#cocktail-title", { type: "words" });
    const splitContent = SplitText.create("#cocktail-content", {
      type: "words",
    });

    gsap.from("#slider-img", {
      opacity: 0,
      xPercent: -70,
      duration: 0.8,
      ease: "power1.inOut",
    });

    gsap.from(splitTitle.words, {
      opacity: 0,
      yPercent: 50,
      duration: 0.4,
      ease: "power1.inOut",
    });

    gsap.from(splitContent.words, {
      opacity: 0,
      yPercent: 50,
      duration: 0.4,
      ease: "power1.inOut",
    });
  }, [currentIndex]);

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
      <div className="h-[80vh] w-full flex justify-between mt-2">
        <img
          onClick={() => goToSlide(currentIndex - 1)}
          src="./images/left-arrow.png"
          alt="left-arrow"
          className="h-fit self-center"
        />
        <img
          id="slider-img"
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

      <div className="w-full flex items-center justify-between font-poppins absolute z-30 bottom-0 px-52">
        <div id="cocktail-title" className="flex flex-col gap-2">
          <p>Recipes for:</p>
          <h2 className="text-6xl font-modern-negra text-yellow">
            {allCocktails[currentIndex].name}
          </h2>
        </div>

        <div id="cocktail-content" className="w-96 flex flex-col gap-2">
          <h2 className="text-6xl font-serif">
            {allCocktails[currentIndex].title}
          </h2>
          <p>{allCocktails[currentIndex].description}</p>
        </div>
      </div>

      <img
        src="./images/cocktail-left-leaf.png"
        alt="c-left-leaf"
        className="absolute left-0 bottom-0"
      />
      <img
        src="./images/cocktail-right-leaf.png"
        alt="c-right-leaf"
        className="absolute right-0 top-0"
      />
    </section>
  );
};

export default Meun;
