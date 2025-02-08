import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { solutions } from "../constants";
import { logo } from "../../public/assets";

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

       gsap.fromTo("#cardLogo", {
        rotate: 0,
       },{
        rotate: 360,
        stagger:0.5,
        scrollTrigger: {
           trigger: container.current,
           start: "top center",
           end: "bottom center",
           scrub: 0.5,
        }
       })

       gsap.fromTo(
         "#threeDImage",
         {
           scale: 1.5,
         },
         {
           scale: 1,
           stagger: 0.5,
           scrollTrigger: {
             trigger: container.current,
             start: "top center",
             end: "bottom center",
             scrub: 0.5,
           },
         }
       );
    }, container);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={container} className="h-screen w-full flex justify-center">
      <div className="relative -top-64 w-11/12 lg:w-2/3 h-2/3">
        {solutions.map((item) => (
          <div key={item.id} className="card w-full h-full">
            <div className="h-full flex justify-center bg-primary rounded-2xl border-secondary border-2 overflow-hidden">

              <div className="text-default">
                <div className="lg:flex justify-around h-full">
                  <div className="lg:w-1/2 lg:pt-16 pl-0 lg:pl-6 lg:border-r-2 max-sm:border-b-2 border-secondary relative place-items-center lg:place-items-start pt-5 lg:pb-0 pb-10">
                    <div className="absolute h-16 w-16 z-10 rounded-full bg-primary border-secondary border-2 lg:-right-8 lg:bottom-2/4 -bottom-[9vw] right-[36vw]">
                        <img id="cardLogo" src={logo}/>
                    </div>
                    <h1 className="font-bold text-xl lg:text-5xl mb-4 lg:text-start text-center px-4 lg:px-0"> 
                      {item.title}
                    </h1>
                    <p className="w-11/12 lg:px-0 px-10">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center lg:w-1/2 h-full justify-center lg:flex rounded-2xl overflow-hidden ">
                    <div className="overflow-hidden ">
                      <img id="threeDImage" src={item.img} alt="graphic" className="w-full h-full object-fill" />
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
