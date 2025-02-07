import React, {useEffect} from 'react'
import { Element } from 'react-scroll'
import { gradient } from '../../public/assets';

const BookCall = () => {

   useEffect(() => {
     const script = document.createElement("script");
     script.src = "https://assets.calendly.com/assets/external/widget.js";
     script.async = true;
     document.body.appendChild(script);

     return () => {
       document.body.removeChild(script);
     };
   }, []);

  return (
    <Element name="Call" className='mb-20'>
       <div className="relative">
          <img className="absolute -z-30 -top-96 left-[-600px]" src={gradient} />
        </div>
      <div className="flex justify-center">
        <div className="grid gap-10">
          <div className="flex justify-center">
            <h2 className="header">
              Book your FREE demo here and find out if we're a match
            </h2>
          </div>

          <div className="relative min-w-[80vw]">
            <div className="relative z-20 flex items-center h-[39rem] mb-5 p-5 border-2 border-default border-opacity-50 rounded-3xl overflow-hidden lg:p-7 xl:h-[47rem]">
              <div
                className="calendly-inline-widget h-full w-full"
                data-url="https://calendly.com/oscar-hansen1/meeting?hide_gdpr_banner=1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default BookCall