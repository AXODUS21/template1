import React, { useState } from 'react'
import Burger from './Burger'
import { navigation } from '../constants'
import { Link } from 'react-scroll'
import { bgFill, bgOutlines } from '../../public/assets'

const Slots = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className={`flex gap-1 pt-4 w-screen backdrop-blur-sm fixed pb-2 z-50 ${isNavOpen ? "bg-bgColor" : ""}`}>
      <div className="flex relative w-full justify-center gap-1">
        <h1 className="font-semibold">Client Slots Left:</h1>
        <span className="font-semibold text-primary">10</span>

        <div className="absolute right-5 lg:hidden block z-10">
          <Burger setIsNavOpen={setIsNavOpen} />
        </div>

        {isNavOpen && (
          <div className="fixed bg-bgColor h-[98vh] w-screen top-12 flex items-center">
            <div className="grid relative gap-5 pl-10">
              <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                <img
                  src={bgOutlines}
                  alt="outline"
                  width={960}
                  height={380}
                  className="relative z-2"
                />
                <img
                  src={bgFill}
                  alt="outline"
                  width={960}
                  height={380}
                  className="absolute inset-0 mix-blend-soft-light opacity-5"
                />
              </div>

              {navigation.map((item) => (
                <Link
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  to={item.url}
                  activeClass="nav-active"
                  spy
                  className="nav-item !text-2xl font-semibold"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Slots