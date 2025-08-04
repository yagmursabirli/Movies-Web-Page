import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar bg-bgNavbar p-[16px] md:py-[16px] md:px-[32px] flex justify-between items-center shadow-custom'>
        <div className='navbar-brand text-[16px] md:text-[24px] font-bold'>
            <Link to="/">Movie App</Link>
        </div> 
        <div className="navbar-links flex md:gap-[32px] gap-[16px]">

            <Link to="/" className='nav-link text-[16px] md:py-[8px] md:px-[16px] p-[8px] border-[4px] border-black text-white transition-colors duration-200
 hover:bg-hoverColor'>Home</Link>
            <Link to="/favorites" className='nav-link text-[16px] md:py-[8px] md:px-[16px] p-[8px] border-[4px] border-black text-white transition-colors duration-200
 hover:bg-hoverColor'>Favorites</Link>
        </div>   
    </div>
  )
}

export default Navbar