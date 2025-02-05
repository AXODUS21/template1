import React from 'react'
import { Element } from "react-scroll";
import Button from '../components/Button';
const Strategy = () => {
  return (
    <Element name="Our Strategy" className="container mb-20">
      <div className="w-full h-full flex justify-center">
        <div className="w-full h-full">
          <div className="text-center mb-5 text-4xl font-semibold">
            How to generate 10-20 new clients every month <br /> without
            spending a single hour of time.
          </div>

          <div className="flex justify-center w-full">
            <div className="w-fit h-fit flex justify-center mb-5 gradient-border">
              <iframe
                className=" rounded-2xl"
                width="1100"
                height="600"
                src="https://www.youtube.com/embed/qRODjitiKP8?si=Wgi5pt4tk_kwoDqM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="text-center font-bold text-xl mb-5">Curious to see if we're a match?</div>

          <div className="w-full flex justify-center">
            <div className="w-1/7">
              <Button title={"Book A Call"}/>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Strategy