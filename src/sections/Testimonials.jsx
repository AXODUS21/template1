import React from 'react'
import { Element } from 'react-scroll'
import { gradient } from '../../public/assets'
const Testimonials = () => {
  return (
    <Element name="Testimonials">
      <div className="relative">
        <img className="absolute -top-96 -z-30 left-[-600px]" src={gradient} />
      </div>

      <div className="">
        <div className="">
          <h2 className='text-center header'>
            What our clients have to say about our work
          </h2>
        </div>
      </div>
    </Element>
  );
}

export default Testimonials