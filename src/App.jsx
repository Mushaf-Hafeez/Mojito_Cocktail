import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Meun from "./components/Meun";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const lenis = useLenis();

  return (
    <main className="bg-zinc-950 w-full overflow-x-hidden">
      <ReactLenis root />
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Meun />
      <Footer />
    </main>
  );
};

export default App;
