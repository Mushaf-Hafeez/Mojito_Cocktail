import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="min-h-screen w-full bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <div className="min-h-[200vh]"></div>
    </main>
  );
};

export default App;
