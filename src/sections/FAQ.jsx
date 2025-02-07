import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { faqs } from '../constants';
import { arrowdown } from '../../public/assets';

const FAQ = () => {
  const [activeId, setActiveId] = useState()
  
  return (
    <Element name="FAQ" className='mb-20 pt-10'>
      <div className="mb-10">
        <h2 className="header text-center">Frequently Asked Questions</h2>
      </div>

      <div className="flex w-full justify-center">
        <div className="grid gap-5 w-10/12 lg:w-2/3">
          {faqs.map((faq) => {
            const active = activeId === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-lg p-4 transition-all duration-500 overflow-hidden ${
                active ? "bg-primary h-40" : "bg-secondary h-14 lg:h-16"
              }`}
            >
              <h3 className="lg:text-2xl font-semibold mb-5 flex justify-between">
                {faq.question}
                <div
                  onClick={() => setActiveId(faq.id)}
                  className="cursor-pointer flex items-center"
                >
                  <img
                    src={arrowdown}
                    className={`select-none w-5 lg:w-9 transition-all duration-500 ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </h3>

              <div className="">{faq.answer}</div>
            </div>
          );})}

        </div>
      </div>
    </Element>
  );
}

export default FAQ