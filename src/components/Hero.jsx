import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const Hero = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const headingSplit = SplitText.create("#heading", { type: "chars" });
    const subtitleSplit = SplitText.create(".sub-titles", { type: "lines" });
    headingSplit.chars.forEach((char) => char.classList.add("gradient"));
    gsap.from(headingSplit.chars, {
      yPercent: 30,
      opacity: 0,
      stagger: 0.06,
    });

    gsap.from(subtitleSplit.lines, {
      yPercent: 50,
      opacity: 0,
      delay: 1,
      stagger: 0.1,
    });

    gsap.to("#left-leaf", {
      yPercent: -100,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to("#right-leaf", {
      yPercent: 50,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    videoRef.current.onLoadedMetaData = () => {
      gsap.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        scrollTrigger: {
          trigger: "video",
          start: "top 20%",
          end: "bottom top",
          markers: true,
          scrub: true,
        },
      });
    };
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative z-40 min-h-screen w-full pt-10 bg-[url('./images/noise.png')] overflow-hidden"
      >
        {/* main heading */}
        <h1 id="heading" className="text-[20vw] font-modern-negra text-center">
          MOJITO
        </h1>

        <div className="flex px-20 items-center justify-between">
          <div className="sub-titles flex flex-col gap-2">
            <p className="text-lg">Cool. Crisp. Classic.</p>
            <p className="w-80 font-modern-negra text-yellow text-6xl flex-wrap">
              Sip the Spirit of Summer
            </p>
          </div>
          <div className="sub-titles flex flex-col gap-2">
            <p className="w-80 text-xl leading-8">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <a
              className="text-xl font-semibold text-gray-300 cursor-pointer"
              href="#cocktails"
            >
              View Cocktails
            </a>
          </div>
        </div>

        <img
          id="left-leaf"
          src="./images/hero-left-leaf.png"
          alt="left-leaf"
          className="absolute top-28"
        />

        <img
          id="right-leaf"
          src="./images/hero-right-leaf.png"
          alt="right-leaf"
          className="absolute bottom-10 right-0"
        />
      </section>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="true"
        src="./videos/output.mp4"
        className="absolute z-40 w-full inset-0 object-contain pointer-events-none"
      />
    </>
  );
};

export default Hero;
