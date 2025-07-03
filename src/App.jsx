import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="bg-zinc-950 w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
