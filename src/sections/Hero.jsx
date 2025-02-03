import React from 'react'
import { Element } from 'react-scroll'
import { gradient, logoBg } from '../../public/assets'
import Button from "../components/Button"
const Hero = () => {
  return (
    <Element name="hero" className="w-full">
      {/*TODO: make this shit responsive and TODO: Parallax effect  */}
      <div className="relative">
        <img className="absolute -top-96 -z-30 left-[-500px]" src={gradient} />
        <img
          className="absolute -top-64 -z-30 right-[-60px] w-[55````%]"
          src={logoBg}
        />
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="text-center w-full pt-56">
          <h2 className='text-primary font-bold text-3xl mb-3'>B2B MARKETING</h2>
          <h1 className='text-6xl font-bold mb-9'>PROSPECTS<br/> THAT TURN INTO PARTNERS</h1>
          <h2 className='font-semibold text-4xl mb-9 capitalize'>Get 10-20 new clients every single month<br/> completely on autopilot</h2>
          <div className="w-full flex justify-center">
            <Button title="Book A Call"/>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Hero