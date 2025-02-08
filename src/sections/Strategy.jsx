import React from 'react'
import { Element } from "react-scroll";
import Button from '../components/Button';
import { gradient } from '../../public/assets';
const Strategy = () => {
  return (
    <Element name="Our Strategy">
      <div className="relative">
        <img className="absolute -z-30 right-[-600px]" src={gradient} />
      </div>

      <div className="w-full h-full flex justify-center">
        <div className="w-full h-full">
          <div className="text-center mb-5 flex justify-center">
            <h2 className='header lg:w-1/2'>
              How to generate 10-20 new clients every month without
              spending a single hour of time.
            </h2>
          </div>

          <div className="flex justify-center w-full h-fit">
            <div className="w-2/3 h-[350px] lg:h-[580px] flex justify-center mb-5 gradient-border">
              <iframe
                loading='lazy'
                className="h-full w-full  rounded-xl"
                src="https://www.youtube.com/embed/qRODjitiKP8?si=Wgi5pt4tk_kwoDqM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="text-center font-bold text-xl mb-5">
            Curious to see if we're a match?
          </div>

          <div className="w-full flex justify-center mb-20">
            <div className="w-1/7">
              <Button title={"Book A Call"} />
            </div>
          </div>

          <div className="text-center header pt-10">
            Wanna know how you get clients, without the usual hassle?
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Strategy