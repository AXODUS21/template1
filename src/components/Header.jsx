import React, { useEffect, useRef, useState } from "react";
import { logoBannerNoBg } from "../../public/assets";
import { Link } from "react-scroll";
import Button from "./Button";
import gsap from "gsap";
import { navigation } from "../constants";

const Header = () => {
  const navRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHasScrolled(currentScrollY > 0); // Set background color if scrolled

      if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 pt-5 px-10 mt-5"
    >
      <div
        className={`nav flex items-center justify-between px-10 py-3 rounded-2xl transition-colors duration-300 ${
          !hasScrolled
            ? "bg-black text-white"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <Link smooth={true} offset={-100} duration={500} to="hero">
          <img src={logoBannerNoBg} className="h-full w-44 object-cover" />
        </Link>
        <div className="flex gap-7 border-2 px-10 py-3 border-navBorder rounded-full">
          {navigation.map((item) => (
            <Link
              key={item.id}
              className="nav-item"
              activeClass="nav-active"
              to={item.url}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <Button title={"Book A Call"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
