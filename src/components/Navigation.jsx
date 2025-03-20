import React from 'react'

function Navigation() {
  return (
    <div className=' flex items-center justify-between w-full h-[70px] p-2 bg-blue-400'>
        <div className='mx-[104px]'>
            <img className='w-[60px] h-[60px]' src="./images/logo.png" alt="Logo" />
        </div>
        <div className='mx-[74px] flex gap-[30px]'>
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
        </div>
    </div>
  )
}

export default Navigation
