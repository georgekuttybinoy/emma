"use client";
import Image from 'next/image';



const Footer = () => {

    return (
        <section className='relative' id="footer-section">

<div className="flex flex-col min-h-screen">
<footer className="w-full h-[77px] bg-[#0F0F0F] text-white flex items-center justify-center">
        <p>&copy; {new Date().getFullYear()} Developed and managed by Parent company Deepnetsoft solutions Pvt Ltd . All rights reserved.</p>
      </footer>
    </div>
             </section >
    )
    }
    
    export default Footer