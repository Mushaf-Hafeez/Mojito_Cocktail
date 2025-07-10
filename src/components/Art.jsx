import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { featureLists, goodLists } from "../../constants";

const Art = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "top 40%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(".will-fade", {
      opacity: 0,
      stagger: 0.4,
      ease: "power.inOut",
    });

    tl.to(".mask-img", {
      transformOrigin: "center",
      scale: 1.3,
      maskPosition: "center",
      maskSize: "400%",
      duration: 2,
      ease: "power1.inOut",
    });

    tl.to(".will-appear", {
      opacity: 1,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      id="art"
      className="radial-gradient relative min-h-screen w-full font-poppins px-24 py-10"
    >
      <div className="w-full h-full">
        <h2
          id="art-heading"
          className="will-fade text-[14rem] text-center font-semibold font-serif tracking-wider bg-[url('./images/noise.png')]"
        >
          The Art
        </h2>

        {/* main image */}
        <div className="cocktail-img">
          <img
            src="/images/under-img.jpg"
            alt="under image"
            className="mask-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6/12 rounded-2xl"
          />
        </div>

        <div className="flex justify-between">
          <ul className="will-fade flex flex-col gap-2">
            {goodLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img
                  src="./images/check.png"
                  alt="check imgae"
                  className="size-4"
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <ul className="will-fade flex flex-col gap-2">
            {featureLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img
                  src="./images/check.png"
                  alt="check imgae"
                  className="size-4"
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-40">
          <h2 className="will-fade text-6xl font-modern-negra">
            Sip - Worthy Perfection
          </h2>
          <div className="opacity-0 will-appear mt-20">
            <h2 className="text-6xl font-modern-negra">
              Made with Craft - Poured with Passion
            </h2>
            <p className="mt-2">
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
