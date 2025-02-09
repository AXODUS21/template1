import React from 'react'
import { Element } from 'react-scroll'
import { gradient, logoBg } from '../../public/assets'
import Button from "../components/Button"
import Parallax from '../components/Parallax'
const Hero = () => {
  return (
    <Element name="hero" className="w-full h-screen">
      <div className="relative">
        <img className="absolute lg:-top-96 -z-30 lg:left-[-500px] max-sm:top-12 max-sm:left-[-140px] max-sm:scale-150 w-screen" src={gradient} />
        <img
          className="absolute lg:-top-32 -z-30 lg:right-[-60px] lg:w-[60%] opacity-5 max-sm:top-36 max-sm:right-[-50px]"
          src={logoBg}
        />
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="text-center w-full pt-56">
          <h2 className='text-primary font-bold lg:text-3xl text-lg lg:mb-3'>B2B MARKETING</h2>
          <h1 className='text-2xl lg:text-6xl font-bold mb-9'>PROSPECTS<br/> THAT TURN INTO PARTNERS</h1>
          <h2 className='font-semibold text-lg lg:text-4xl mb-9 capitalize'>Get 10-20 new clients every single month<br/> completely on autopilot</h2>
          <div className="w-full flex justify-center">
            <Button title="Book A Call"/>
          </div>
        </div>
        <Parallax/>
      </div>
    </Element>
  );
}

export default Hero