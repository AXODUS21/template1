import React from 'react'
import { Element } from 'react-scroll'

const BookCall = () => {
  return (
    <Element name='Call'>
        <div className="">
          <div className="relative">
            <div className="relative z-20 flex items-center h-[39rem] mb-5 p-5 border border-n-1/10 rounded-3xl overflow-hidden lg:p-7 xl:h-[47rem]">
              <div
                className="calendly-inline-widget h-full w-full"
                data-url="https://calendly.com/oscar-hansen1/meeting?hide_gdpr_banner=1"
              ></div>
            </div>
          </div>
        </div>
    </Element>
  )
}

export default BookCall