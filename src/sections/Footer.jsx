import React from 'react'
import { socials } from '../constants';

const Footer = () => {
  return (
    <div className="border-t-2 border-t-navBorder border-opacity-50">
      <div className="lg:h-20 px-5">
        <div className="grid lg:gap-0 gap-2 place-items-center lg:flex lg:justify-between items-center h-full w-full py-2">
          <div className="opacity-65">
            © {new Date(Date.now()).getFullYear()} John Doe Agency. All rights
            reserved
          </div>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a href={social.url} key={social.id} className="rounded-lg p-1">
                <img className="w-8" src={social.icon} />
              </a>
            ))}
          </div>
          <div className="opacity-65">VAT: 12345678</div>
        </div>
      </div>
    </div>
  );
}

export default Footer