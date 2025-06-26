import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <header>
      {/* logo */}
      <h3>
        <a
          href="#hero"
          className="flex items-center gap-2 text-2xl cursor-pointer font-modern"
        >
          <img src={"/images/logo.png"} alt="logo" />
          Velvet Pour
        </a>
      </h3>

      {/* links */}
      <ul className="flex items-center gap-6 font-poppins text-md">
        {navLinks.map((link, index) => (
          <li key={index} className="whitespace-nowrap">
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
