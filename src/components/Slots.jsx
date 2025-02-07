import React, { useEffect, useState } from 'react'
import Burger from './Burger'
import { navigation } from '../constants'
import { Link } from 'react-scroll'

const Slots = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="flex gap-1 pt-4 w-full backdrop-blur-sm fixed pb-2 z-50">
      <div className="flex relative w-full justify-center gap-1">
        <h1 className="font-semibold">Client Slots Left:</h1>
        <span className="font-semibold text-primary">10</span>

        <div
         className="absolute right-5 lg:hidden block z-10">
          <Burger setIsNavOpen={setIsNavOpen}/>
        </div>

        {isNavOpen && (
          <div className='fixed h-[98vh] w-screen bg-bgColor top-12 flex items-center'>
            <div className="grid gap-5 pl-5">
              {navigation.map((item) => (
                <Link
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  to={item.url}
                  activeClass='nav-active'
                  spy
                  className='nav-item !text-2xl font-semibold'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Slots