import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <h1 id="heading" className="text-5xl font-semibold">
        Hello! GSAP
      </h1>
    </div>
  );
};

export default App;
