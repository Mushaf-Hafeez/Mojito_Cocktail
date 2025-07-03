import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { navLinks } from "../../constants";

const Navbar = () => {
  useGSAP(() => {
    gsap.to("#nav", {
      backgroundColor: "#00000050",
      backdropFilter: "blur(10px)",
      scrollTrigger: {
        trigger: "#nav",
        start: "bottom top",
        ease: "power1.inOut",
        scrub: true,
      },
    });
  }, []);

  return (
    <nav
      id="nav"
      className="text-gray-100 px-20 py-5 flex items-center justify-between bg-transparent fixed w-full z-50"
    >
      {/* logo */}
      <h3 className="flex items-center gap-2 cursor-pointer">
        <img src="./images/logo.png" alt="logo" />
        <p className="text-3xl font-modern-negra mt-3">Mojito Cocktail</p>
      </h3>

      {/* navlinks */}
      <ul className="flex items-center gap-7 text-sm">
        {navLinks.map((link) => (
          <li key={link.id} className="cursor-pointer">
            <a href={`#${link.id}`}></a>
            {link.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
