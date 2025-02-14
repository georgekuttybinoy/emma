import React from 'react'
import Image from "next/image";
const Homesection4 = () => {
  return (
    
                <section className="absolute min-h-screen w-full h-[650px] top-[3860px] left-0 opacity-100 bg-black bg-cover bg-center overflow-hidden">






<div
  className="absolute max-w-[1440px] w-full h-[590px] top-[10px] left-1/2 -translate-x-1/2  border border-[#232323] flex items-center justify-center p-4 overflow-hidden bg-[#0D0D0D]"
>
  {/* Add content here */}

  <div className="absolute w-full max-w-[521px] h-[134px] top-[145px] left-[650px] flex flex-col justify-center items-start">
  <h1 className="text-[40px] leading-[44px] font-[400] text-left font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 underline font-['Rounded_Mplus_1c',sans-serif] sm:text-[36px] sm:leading-[40px]">
    Do not miss a lead by any chance. Access our CRM from any device
  </h1>
</div>


<div className="absolute w-full max-w-[521px] h-[76px] top-[295px] left-[650px] flex justify-center items-center">
  <p className="text-[18px] leading-[19.8px] font-[400] text-left text-[#ABA7A7] font-['Rounded_Mplus_1c',sans-serif]">
  Whether you're traveling without a laptop or simply on the go, there's no need to worry when using Emma. Our software is accessible on mobile phones, tablets, laptops, and desktop devices.
  </p>
</div>



<button
  className="absolute w-[144px] h-[44px] top-[413px] left-1/2 transform -translate-x-[15%] rounded-[6px] bg-transparent text-white font-medium flex items-center justify-center border-2 border-transparent overflow-hidden transition-all duration-300 ease-in-out hover:bg-white/10"
  style={{
    borderImageSource:
      "linear-gradient(0deg, #D4FFEC 15.94%, #57F2CC 48.55%, #4596FB 84.06%)",
    borderImageSlice: "1",
  }}
>
Try Now
</button>



<div className="absolute top-[140px] left-1/2 transform -translate-x-[160%] w-[132px] h-[287px] max-w-full sm:max-w-[132px] sm:h-[287px] flex justify-center items-center overflow-hidden">
      <Image
        src="/images/aaa.png" // Replace with your image path
        alt="Responsive Image"
        width={132}
        height={287}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>





</div>




                </section >
       
  )
}

export default Homesection4