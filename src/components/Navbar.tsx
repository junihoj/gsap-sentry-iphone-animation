import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-center items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple logo" width={14} height={18}/>
            {/* desktop */}
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((navItem)=>(
                    <div key={navItem} className='px-5 text-sm text-gray cursor-pointer hover:text-white transition-all'>
                        {navItem}
                    </div>
                ))}
            </div>
            {/* mobile nav */}
            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="search" width={18} height={18}/>
                <img src={bagImg} alt="search" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar