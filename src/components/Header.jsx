import React from 'react'
import { logoBannerNoBg } from '../../public/assets'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div>
        <div className="flex gap-1 justify-center pt-4">
            <h1 className='font-semibold'>Client Slots Left:</h1>
            <span className='font-semibold text-primary'>10</span>
        </div>
        <div className="nav">
            <Link smooth={true} offset={-100} duration={500} to='hero'>
                <img src={logoBannerNoBg} className='h-full w-48 object-cover'/>
            </Link>
            <div className="flex gap-7 border-2 px-10 py-3 border-navBorder rounded-full">
                <Link className='nav-item' to='Our Strategy' spy={true} smooth={true} offset={-70} duration={500}>
                    Our Strategy
                </Link>
                <Link className='nav-item' to='Solutions' spy={true} smooth={true} offset={-70} duration={500}>
                    Solutions
                </Link>
                <Link className='nav-item' to='Testimonials' spy={true} smooth={true} offset={-70} duration={500}>
                    Testimonials
                </Link>
                <Link className='nav-item' to='Case Studies' spy={true} smooth={true} offset={-70} duration={500}>
                    Case Studies
                </Link>
                <Link className='nav-item' to='FAQ' spy={true} smooth={true} offset={-70} duration={500}>
                    FAQ
                </Link>
            </div>
            <div className="pr-10">
                Custom Button
            </div>
        </div>
    </div>
  )
}

export default Header