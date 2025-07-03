import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const Hero = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const headingSplit = SplitText.create("#heading", { type: "chars" });
    const subtitleSplit = SplitText.create(".sub-titles", { type: "lines" });

    // hero heading animation
    headingSplit.chars.forEach((char) => char.classList.add("gradient"));
    gsap.from(headingSplit.chars, {
      yPercent: 30,
      opacity: 0,
      stagger: 0.06,
    });

    // hero subtitles animation
    gsap.from(subtitleSplit.lines, {
      yPercent: 50,
      opacity: 0,
      delay: 1,
      stagger: 0.1,
    });

    // hero left leaf animation
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

    // hero right leaf animation
    gsap.to("#right-leaf", {
      yPercent: 50,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom -100%",
        scrub: true,
      },
    });

    // glass scroll animation
    videoRef.current.onloadedmetadata = () => {
      gsap.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        scrollTrigger: {
          trigger: "#video-container",
          start: "center 50%",
          end: "bottom top",
          pin: true,
          scrub: true,
        },
      });
    };
  }, []);

  return (
    <div className="h-screen w-full relative inset-0">
      <section
        id="hero"
        className="relative z-40 min-h-screen w-full pt-10 bg-[url('./images/noise.png')] overflow-hidden"
      >
        <div className="absolute z-40 inset-0 bg-transparent">
          {/* main heading */}
          <h1
            id="heading"
            className="text-[20vw] font-modern-negra text-center"
          >
            MOJITO
          </h1>

          <div className="flex px-20 items-center justify-between">
            <div className="sub-titles flex flex-col gap-2">
              <p className="text-lg text-gray-100">Cool. Crisp. Classic.</p>
              <p className="w-80 font-modern-negra text-yellow text-6xl flex-wrap">
                Sip the Spirit of Summer
              </p>
            </div>
            <div className="sub-titles flex flex-col gap-2">
              <p className="text-gray-100 w-80 text-xl leading-8">
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
        </div>
      </section>

      <div id="video-container" className="absolute z-30 inset-0 h-full w-full">
        <video
          className="absolute z-30 inset-0 w-full"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
        >
          <source src="./videos/output.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
