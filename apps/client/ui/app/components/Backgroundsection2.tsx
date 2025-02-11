import React from 'react'
import Image from "next/image";


const Backgroundsection2 = () => {
  return (
    <div className="bg-black flex justify-center items-start relative ">


      {/* Main Container */}
      <div className="absolute w-[1113px] h-[594px] top-[1150px] left-[165px] rounded-[17px] bg-transparent text-white shadow-lg p-6">
        {/* Title */}




        <div className="absolute w-[857] h-[53px] top-[21px] left-[16px] flex items-center ">
        <h1
          className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 underline"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Why Choose emma?
        </h1>
      </div>





      <div className="absolute w-auto min-w-[120px] h-[24px] top-[150px] left-[16px] flex items-center whitespace-nowrap">
  <h1 className="text-[16px] leading-[24px] font-medium font-mplus text-gray-900 truncate">
    Custom CRM
  </h1>

  <p
  className="absolute w-[90%] md:w-[492px] h-auto top-[50px] left-[-10px] 
             text-[16px] md:text-[18px] leading-[20px] md:leading-[19.8px] 
             font-normal font-mplus text-[#ABA7A7] left-0 p-2"
>
Streamline your lead capture from multiple sources such as Facebook, Google Ads, your website, and more, ensuring no lead goes unnoticed. 
</p>
</div>









        {/* Positioned Image */}
        <div className="absolute w-[558px] h-[366px] top-[196px] left-[555px] rounded-[17px] overflow-hidden">
          <Image
            src="/images/img comp.png" // Replace with your image path
            alt="Custom Image"
            width={558}
            height={366}
            className="rounded-[17px] object-cover"
          />
        </div>


      </div>



    </div>
  )
}

export default Backgroundsection2