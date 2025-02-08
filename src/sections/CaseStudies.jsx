import { caseStudy } from "../constants";
import { Element } from "react-scroll";
import Button from "../components/Button";
import Marquee from "react-fast-marquee";
import { gradient } from "../../public/assets";
import { stars } from "../../public/assets";

const CaseStudies = () => {
  return (
    <Element name="CaseStudy">
      <div className="relative z-2">
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>

        <div className="relative">
          <img className="absolute -z-30 right-[-600px]" src={gradient} />
        </div>
        <div className="w-full flex justify-center mb-20">
          <h2 className="header">These are some of our success stories:</h2>
        </div>

        <Marquee speed={50} gradient={false} className="mb-20">
          {caseStudy.map((item, index) => (
            <div
              className="testimonial block relative p-0.5 w-[95dvw] md:w-[40vw] lg:w-[38svw] border-2 border-secondary rounded-lg mx-5"
              key={index}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none w-[95dvw] md:w-[70dvw] lg:w-[38dvw]">
                <h5 className="text-xl font-bold mb-5 text-center">{item.title}</h5>
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
        </Marquee>

        <div className="mb-20">
          <h2 className="header text-center mb-5">Want Similar Success?</h2>
          <Button title={"Book A Call"} />
        </div>
      </div>
    </Element>
  );
};

export default CaseStudies;
