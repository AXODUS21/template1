  import React, { useEffect, useRef, useState } from "react";
  import { logoBannerNoBg } from "../../public/assets";
  import { Link } from "react-scroll";
  import Button from "./Button";
  import gsap from "gsap";
  import { navigation } from "../constants";

  const Header = () => {
    return (
      <div
        className="fixed w-full z-50 pt-5 lg:px-10 px-0 mt-5 lg:block hidden"
      >
        <div
          className={`nav flex items-center md:justify-center lg:justify-between px-10 py-3 rounded-2xl transition-colors duration-300 bg-transparent backdrop-blur-sm`}
        >
          <Link
            smooth={true}
            offset={-100}
            duration={500}
            to="hero"
            className="hidden lg:block"
          >
            <img src={logoBannerNoBg} className="h-full w-44 object-cover" />
          </Link>
          <div className="flex gap-7 border-2 items-center px-10 py-3 border-navBorder rounded-full">
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
          <div className="scale-75 hidden lg:block ">
            <Button title={"Book A Call"} />
          </div>
        </div>
      </div>
    );
  };

  export default Header;
