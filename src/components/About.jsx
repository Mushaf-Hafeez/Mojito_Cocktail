import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const headingSplit = SplitText.create("#about-heading", { type: "words" });

    gsap.from(headingSplit.words, {
      opacity: 0,
      duration: 0.5,
      y: 50,
      stagger: 0.04,
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
      },
    });

    gsap.from("#top-grid", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      scrollTrigger: {
        trigger: "#about",
        start: "top 35%",
      },
    });

    gsap.from("#bottom-grid", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      scrollTrigger: {
        trigger: "#about",
        start: "top -10%",
      },
    });
  }, []);

  return (
    <section
      id="about"
      className="relative z-40 min-h-screen w-full text-gray-100 bg-black py-20 px-24 font-poppins"
    >
      <div className="flex justify-between">
        {/* badge */}
        <div className="flex flex-col gap-6">
          <span className="w-fit px-6 py-2 rounded-full bg-white text-black cursor-pointer">
            Best Cocktails
          </span>
          <h2 id="about-heading" className="font-modern-negra text-6xl w-8/12">
            Where every detail matters <span>-</span> from muddle to garnish
          </h2>
        </div>
        {/* content */}
        <div className="flex flex-col gap-4 w-6/12">
          <p className="font-poppins text-lg">
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">4.5/5</h2>
              <p>More than +12000 customers</p>
            </div>

            {/* customers */}
            <div className="flex items-center bg-zinc-900 px-4 py-2 rounded-full noise-img relative w-38">
              <img
                className="size-10 absolute z-[1] left-4"
                src="./images/profile1.png"
                alt="profile 1"
              />
              <img
                className="size-10 absolute z-[2] left-12"
                src="./images/profile2.png"
                alt="profile 2"
              />
              <img
                className="size-10 absolute z-[3] left-18"
                src="./images/profile3.png"
                alt="profile 3"
              />
              <img
                className="size-10 absolute z-[4] left-24"
                src="./images/profile4.png"
                alt="profile 4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* images */}
      <div id="top-grid" className="mt-8 flex items-center justify-evenly">
        <img src="./images/abt1.png" alt="" />
        <img src="./images/abt2.png" alt="" />
        <img src="./images/abt5.png" alt="" className="size-72 rounded-xl" />
      </div>

      <div id="bottom-grid" className="mt-8 flex items-center justify-evenly">
        <img src="./images/abt3.png" alt="" className="rounded-xl" />
        <img src="./images/abt4.png" alt="" />
      </div>
    </section>
  );
};

export default About;
