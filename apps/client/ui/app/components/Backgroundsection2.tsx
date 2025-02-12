import React from 'react'
import Image from "next/image";


const Backgroundsection2 = () => {
  return (

<section className="relative w-full h-[700px] top-[1010px] bg-black bg-cover bg-center">
  <div className="max-w-5xl mx-auto px-6 relative">

    {/* Main Container */}
    <div className="relative w-[1113px] h-[500px] mx-auto rounded-[17px] bg-transparent text-white shadow-lg p-6">

      {/* Title */}
      <div className="w-[857px] h-[53px] mt-[21px] flex items-center">
        <h1
          className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 underline"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Why Choose emma?
        </h1>
      </div>

      {/* Features List */}
      <div className="mt-10 space-y-10">
        
        {/* Feature 1 */}
        <div>
          <h2 className="text-[16px] leading-[24px] font-medium font-mplus text-white">
            Custom CRM
          </h2>
          <p className="text-[10px] md:text-[13px] leading-[22px] md:leading-[24px] font-normal font-mplus text-[#ABA7A7] max-w-[450px]">
            Streamline your lead capture from multiple sources such as Facebook, Google Ads,  
            your website, and more, ensuring no lead goes unnoticed.
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <h2 className="text-[16px] leading-[24px] font-medium font-mplus text-white">
            Best for Small-Scale Business
          </h2>
          <p className="text-[10px] md:text-[13px] leading-[22px] md:leading-[24px] font-normal font-mplus text-[#ABA7A7] max-w-[450px]">
            Streamline your lead capture from multiple sources such as Facebook, Google Ads,  
            your website, and more, ensuring no lead goes unnoticed.
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <h2 className="text-[16px] leading-[24px] font-medium font-mplus text-white">
            Lifetime Free
          </h2>
          <p className="text-[10px] md:text-[13px] leading-[22px] md:leading-[24px] font-normal font-mplus text-[#ABA7A7] max-w-[450px]">
            Streamline your lead capture from multiple sources such as Facebook, Google Ads,  
            your website, and more, ensuring no lead goes unnoticed.
          </p>
        </div>

      </div>

      {/* Positioned Image */}
      <div className="absolute top-[196px] right-0 w-[558px] h-[366px] rounded-[17px] overflow-hidden">
        <Image
          src="/images/img comp.png" 
          alt="Custom Image"
          width={558}
          height={366}
          className="rounded-[17px] object-cover"
        />
      </div>

    </div>
  </div>
</section>


    



  )
}

export default Backgroundsection2