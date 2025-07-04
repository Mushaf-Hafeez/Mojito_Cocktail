import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { cocktailLists, mockTailLists } from "../../constants/index";

const Cocktails = () => {
  useGSAP(() => {
    gsap.to("#c-left-leaf", {
      left: 100,
      bottom: 100,
      scrollTrigger: {
        trigger: "#cocktail",
        start: "70% 70%",
        end: "bottom bottom",
      },
    });

    gsap.to("#c-right-leaf", {
      right: 100,
      bottom: 100,
      scrollTrigger: {
        trigger: "#cocktail",
        start: "70% 70%",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <section
      id="cocktail"
      className="relative z-30 min-h-screen w-full bg-[url('./images/noise.png')] bg-center px-24 py-10 text-gray-100"
    >
      <div className="flex items-center justify-between">
        {/* Popular Cocktails */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-poppins">Most popular cocktails:</h2>
          <div className="flex flex-col gap-6">
            {cocktailLists.map((item, index) => (
              <div key={index} className="flex w-84 justify-between">
                <div className="flex flex-col gap-1">
                  <h2 className="text-4xl font-modern-negra text-yellow">
                    {item.name}
                  </h2>
                  <span className="flex gap-1 text-lg">
                    <p>{item.country}</p>|<p>{item.detail}</p>
                  </span>
                </div>
                <div className="text-2xl text-gray-100">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Loved Mocktails */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-poppins">Most popular cocktails:</h2>
          <div className="flex flex-col gap-6">
            {mockTailLists.map((item, index) => (
              <div key={index} className="flex w-84 justify-between">
                <div className="flex flex-col gap-1">
                  <h2 className="text-4xl font-modern-negra text-yellow">
                    {item.name}
                  </h2>
                  <span className="flex gap-1 text-lg">
                    <p>{item.country}</p>|<p>{item.detail}</p>
                  </span>
                </div>
                <div className="text-2xl text-gray-100">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        id="c-left-leaf"
        src="./images/cocktail-left-leaf.png"
        alt="c-leaft-leaf"
        className="absolute left-0 bottom-0"
      />

      <img
        id="c-right-leaf"
        src="./images/cocktail-right-leaf.png"
        alt="c-right-leaf"
        className="absolute right-0 bottom-0"
      />
    </section>
  );
};

export default Cocktails;
