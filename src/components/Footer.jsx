import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { openingHours, socials, storeInfo } from "../../constants";

const Footer = () => {
  useGSAP(() => {
    gsap.from(".content", {
      opacity: 0,
      yPercent: 50,
      stagger: 0.04,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#footer",
        start: "top 20%",
      },
    });
  }, []);

  return (
    <footer
      id="footer"
      className="relative radial-gradient min-h-screen w-full flex justify-center px-24 py-20 font-poppins"
    >
      {/* store information */}
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-8xl font-modern-negra">{storeInfo.heading}</h2>
        <div className="flex flex-col items-center gap-2">
          <p className="content text-xl">VISIT OUR STORE</p>
          <p className="content text-3xl">{storeInfo.address}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="content text-xl">CONTACT US</p>
          <p className="content text-3xl">{storeInfo.contact.phone}</p>
          <p className="content text-3xl">{storeInfo.contact.email}</p>
        </div>
        <div className="mt-5 flex flex-col items-center gap-2">
          <p className="content text-xl">Open Every Day</p>
          {openingHours.map((hour, index) => (
            <p key={index} className="content text-3xl">
              {hour.day}: {hour.time}
            </p>
          ))}
        </div>

        {/* Social information */}
        <div className="flex flex-col items-center gap-2">
          <p className="content text-xl">SOCIALS</p>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                className="content cursor-pointer"
              >
                <img src={social.icon} alt="social-icon" />
              </a>
            ))}
          </div>
        </div>

        <img
          src="./images/footer-left-leaf.png"
          alt="f-left-leaf"
          className="absolute left-0 bottom-0"
        />
        <img
          src="./images/footer-right-leaf.png"
          alt="f-right-leaf"
          className="absolute top-0 right-0"
        />
        <img
          src="./images/footer-drinks.png"
          alt="f-right-leaf"
          className="absolute bottom-0 right-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
