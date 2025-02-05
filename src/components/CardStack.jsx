import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { solutions } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const CardStack = () => {
  const container = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card:not(:first-child)",
        {
          y: 1000, 
        },
        {
          y: 0,
          stagger: 0.5, 
          scrollTrigger: {
            trigger: container.current, 
            start: "top center", 
            end: "bottom center", 
            scrub: 0.5,
            pin: true, 
          },
        }
      );
    }, container); 

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={container} className="h-screen flex justify-center">
      <div className="relative -top-64 w-72 h-[420px]">
        {solutions.map((item) => (
          <div key={item.id} className="card w-full h-full">
            <div className="h-full w-full bg-default text-bgColor rounded-lg flex items-center justify-center border-4 border-primary">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStack;
