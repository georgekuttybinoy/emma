"use client";
import React from 'react'

const Header = () => {
  return (
    <header className="relative top-0 left-0 w-full h-[77px] flex justify-between items-center px-6 z-50">
        
  {/* Logo Section */}
  <div className="absolute w-[127px] h-[53px] top-[21px] left-[168px] flex items-center">
  <h1 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 underline font-['Rounded_Mplus_1c',sans-serif]">
  emma
</h1>
  </div>

  {/* Navigation */}
  <nav className="absolute top-[42px] left-[73%] transform -translate-x-[40%] flex gap-[30px] text-white text-lg">
    <a href="#" className="w-[46px] h-[24px] text-[18px] font-normal leading-[24px] text-left font-[Rounded Mplus 1c] hover:text-gray-400 transition">Home</a>
    <a href="#" className="w-[74px] h-[24px] text-[18px] font-normal leading-[24px] text-left font-[Rounded Mplus 1c] hover:text-gray-400 transition">Features</a>
    <a href="#" className="w-[94px] h-[24px] text-[18px] font-normal leading-[24px] text-left font-[Rounded Mplus 1c] hover:text-gray-400 transition">Screenshot</a>
    <a href="#" className="w-[60px] h-[24px] text-[18px] font-normal leading-[24px] text-left font-[Rounded Mplus 1c] hover:text-gray-400 transition">Pricing</a>
    <a href="#" className="w-[68px] h-[24px] text-[18px] font-normal leading-[24px] text-left font-[Rounded Mplus 1c] hover:text-gray-400 transition">Contact</a>
  </nav>

</header>



)
}
export default Header

