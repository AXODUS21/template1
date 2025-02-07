import React from 'react'
import { Element } from "react-scroll";
import CardStack from '../components/CardStack';
import { gradient } from '../../public/assets';
const Solutions = () => {
  return (
    <Element
      name="Solutions"
      className="flex justify-center items-center h-[200vh] mb-32"
    >
      <CardStack />
    </Element>
  );
}

export default Solutions