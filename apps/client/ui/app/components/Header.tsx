"use client";
import React from 'react'

const Header = () => {
  return (
    <header className="relative top-0 left-0 w-full h-[77px] flex justify-between items-center px-6 z-50">
        
      {/* Logo Section */}

      <div className="absolute w-[127px] h-[53px] top-[21px] left-[168px] flex items-center ">
        <h1
          className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 underline"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          emma
        </h1>
      </div>

      {/* Navigation */}

      <nav className="flex gap-8 text-white text-lg">
        <a href="#" className="absolute w-[46] h-[24px] top-[42px] left-[788px] text-white text-[18px] font-normal leading-[24px] text-left  decoration-skip-ink-none flex items-center justify-start font-[Rounded Mplus 1c] hover:text-gray-400 transition">Home</a>
        <a href="#" className="absolute w-[74px] h-[24px] top-[42px] left-[872px] text-white text-[18px] font-normal leading-[24px] text-left  decoration-skip-ink-none flex items-center justify-start font-[Rounded Mplus 1c] hover:text-gray-400 transition">Features</a>
        <a href="#" className="absolute w-[94] h-[24px] top-[42px] left-[979px] text-white text-[18px] font-normal leading-[24px] text-left  decoration-skip-ink-none flex items-center justify-start font-[Rounded Mplus 1c] hover:text-gray-400 transition">Screenshot</a>
        <a href="#" className="absolute w-[60] h-[24px] top-[42px] left-[1109px] text-white text-[18px] font-normal leading-[24px] text-left  decoration-skip-ink-none flex items-center justify-start font-[Rounded Mplus 1c] hover:text-gray-400 transition">Pricing</a>
        <a href="#" className="absolute w-[68] h-[24px] top-[42px] left-[1201px] text-white text-[18px] font-normal leading-[24px] text-left  decoration-skip-ink-none flex items-center justify-start font-[Rounded Mplus 1c] hover:text-gray-400 transition">Contact</a>

       </nav>

    </header>


)
}
export default Header

