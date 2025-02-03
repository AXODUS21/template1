import React from 'react'

const Button = ({title}) => {
  return (
    <div className='bg-primary px-7 py-3 rounded-xl transition-all active:scale-90 cursor-pointer'>
        <div className="font-semibold text-center">
            {title}
        </div>
    </div>
  )
}

export default Button