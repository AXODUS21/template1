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
             scale: 1,
           },
           {
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
          <div key={item.id} className="card w-full h-full">
            <div className="h-full flex justify-center bg-primary rounded-2xl border-navBorder border-2">
              <div className="text-default pt-5">
                <div className="lg:flex justify-around px-10 h-full">
                  <div className="lg:w-1/2 lg:pt-16">
                    <h1 className="font-bold text-xl lg:text-5xl mb-4">
                      {item.title}
                    </h1>
                    <p className="">{item.description}</p>
                  </div>

                  <div className="flex items-center lg:flex ">
                    <div className="border-secondary border-2 rounded-lg">
                      <img src={item.img} alt="graphic" className="rounded-lg" height={50} width={350} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStack;
