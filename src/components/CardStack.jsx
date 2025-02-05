import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { solutions } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const CardStack = () => {
  const container = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
       const cards = gsap.utils.toArray(".card").reverse();

      
      gsap.fromTo(
        ".card:not(:first-child)",
        {
          y: 590,
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

       cards.forEach((card, index) => {
         gsap.fromTo(
           card,
           {
             x: 0,
             scale: 1,
           },
           {
             x: 100 * index,
             scale: 1 - index * 0.1,
             scrollTrigger: {
               trigger: container.current,
               start: "top center",
               end: "bottom center",
               scrub: 0.5,
             },
           }
         );
       });
    }, container);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={container} className="h-screen w-full flex justify-center">
      <div className="relative -top-64 w-2/3 h-2/3">
        {solutions.map((item) => (
          <div key={item.id} className="card w-full h-full"
          >
            <div className="h-full flex items-center justify-center bg-transparent bg-primary bg-opacity-95 rounded-2xl border-navBorder border-2">
              <div className="text-default">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStack;
