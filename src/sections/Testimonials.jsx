import { testimonials } from "../constants";
import { Element } from "react-scroll";
import Button from "../components/Button";
import Marquee from "react-fast-marquee";
import { gradient } from "../../public/assets";
import { stars } from "../../public/assets";

const Testimonials = () => {
  return (
    <Element name="Testimonials" className="mb-20 pb-5 pt-5 relative">
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
        <img className="absolute -z-30 left-[-600px]" src={gradient} />
      </div>

      <div className="relative z-2">
        <div className="w-full flex justify-center mb-20">
          <h2 className="header">What clients have to say about our work</h2>
        </div>

        <Marquee
          speed={50}
          gradient={false}
          direction="right"
          pauseOnHover={true} // Ensure smooth pause instead of speed change
          className="mb-20"
        >
          {testimonials.map((item, index) => (
            <div
              className="testimonial block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-[70dvw] md:w-[40vw] lg:w-[25svw] border-2 border-primary rounded-lg mx-5"
              key={index}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none w-[70dvw] md:w-[40vw] lg:w-[25vw]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    className="rounded-full"
                    src={item.ClientPfp}
                    width={52}
                    height={52}
                    alt={item.title}
                  />
                  <div className="ml-auto font-main text-xs font-bold text-n-1 uppercase tracking-wider">
                    <div className="flex flex-col pr-4 mb-1">
                      {item.clientName}
                      <div className="font-main opacity-80 text-xs">
                        {item.clientPosition}
                      </div>
                      <img
                        src={item.stars}
                        alt="stars"
                        width={50}
                        className="h-4 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0.5 bg-n-8">
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 duration-500">
                  {item.ClientPfp && (
                    <img
                      src={item.ClientPfp}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        <div className="mb-20">
          <h2 className="header text-center mb-5">
            Want to see if we are a match?
          </h2>
          <Button title={"Book A Call"} />
        </div>
      </div>
    </Element>
  );
};

export default Testimonials;
