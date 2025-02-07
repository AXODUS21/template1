import React from 'react'
import { socials } from '../constants';

const Footer = () => {
  return (
    <div className="border-t-2 h-[10px] border-b-navBorder">
      <div className="h-20 px-5">
        <div className="flex justify-between items-center h-full">
          <div className="">© 2025 John Doe Agency. All rights reserved</div>
          <div className="flex gap-10">
            {socials.map((social) => (
                <div key={social.id} className='border-2 rounded-lg p-1'>
                    <img className='w-8' src={social.icon} />
                </div>
            ))}
          </div>
          <div className="">Vat: 12345678</div>
        </div>
      </div>
    </div>
  );
}

export default Footer