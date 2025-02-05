import React from 'react'
import { Element } from "react-scroll";
import CardStack from '../components/CardStack';
const Solutions = () => {
  return (
    <Element
      name="Solutions"
      className="flex justify-center items-center h-[200vh] pt-20"
    >
      <CardStack />
    </Element>
  );
}

export default Solutions