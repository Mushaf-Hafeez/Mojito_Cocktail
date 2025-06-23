import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useGSAP(() => {
    const text = SplitText.create("#heading", { type: "chars" });

    gsap.from(text.chars, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.06,
      ease: "back.inOut",
    });
  }, []);
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 id="heading" className="text-5xl font-semibold">
        Hello! GSAP
      </h1>
    </div>
  );
};

export default App;
