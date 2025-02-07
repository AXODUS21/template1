import { caseStudy } from "../constants";
import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { gradient } from "../../public/assets";
const CaseStudies = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollSpeed = 1;
      let animationFrame;

      const originalContent = container.innerHTML;
      container.innerHTML += originalContent;

      const autoScroll = () => {
        container.scrollLeft += scrollSpeed;

        if (Math.abs(container.scrollLeft - container.scrollWidth / 2) < 1) {
          container.scrollLeft = 0;
        }

        animationFrame = requestAnimationFrame(autoScroll);
      };

      animationFrame = requestAnimationFrame(autoScroll);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, []);

  return (
    <Element name="CaseStudy">
      <div className="relative z-2">
         <div className="relative">
                      <img className="absolute -z-30 right-[-600px]" src={gradient} />
                  </div>
        <div className="w-full flex justify-center mb-20">
          <h2 className="header">These are some of our success stories:</h2>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden gap-10 mb-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {caseStudy.map((item, index) => (
            <div
              className="testimonial block relative p-0.5 w-[95dvw] md:w-[40vw] lg:w-[50svw] border-2 border-primary rounded-lg"
              key={index}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none w-[95dvw] md:w-[70dvw] lg:w-[38dvw]">
                <h5 className="text-xl font-bold mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.description}</p>

                <div className="flex justify-around pt-10">
                  <div className="text-center">
                    <div className="text-[#41FF00]">+{item.cltv}$</div>
                    <p>CLTV</p>
                  </div>
                  <div className="text-center">
                    <div className="text-[#41FF00]">{item.convertionRate}%</div>
                    <p>Conversion Rate</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="header text-center mb-5">Want Similar Success?</h2>
          <Button title={"Book A Call"} />
        </div>
      </div>
    </Element>
  );
};

export default CaseStudies;
