import React from 'react'
import Image from "next/image";
const Backgroundsection = () => {
  return (

    <main className="w-full h-screen overflow-y-scroll snap-y snap-mandatory flex justify-between items-center">




    <section  className="absolute w-full h-[1021px] top-[-1px] left-[0px] opacity-100 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/photo copy.png')" }}>




<div className="overflow-hidden flex justify-center items-center h-[506px]">
      <h1 className="w-[730px] h-[106px] text-[48px] font-normal leading-[52.8px] text-center font-[Rounded Mplus 1c] animate-textColorChange">
        Accelerate your growth through hyper-qualified leads
      </h1>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes textColorChange {
            10% { color: #D4FFEC; } /* Light Green */
            15% { color: #FF9800; } /* Orange */
            50% { color: #57F2CC; } /* Cyan */
            100% { color: #4596FB; } /* Blue */
          }
          .animate-textColorChange {
            animation: textColorChange 6s infinite ease-in-out;
          }
        `}
      </style>
    </div>




    <button className="relative w-[177px] h-[44px] top-[-150px] left-1/2 transform -translate-x-1/2 rounded-[6px] text-white font-medium text-lg bg-transparent px-4 py-2">
  Request a Demo
  {/* Border Effect */}
  <span
    className="absolute inset-0 rounded-[6px] border-[2px] border-transparent"
    style={{
      background:
        "linear-gradient(244.91deg, #D4FFEC 15.94%, #57F2CC 48.55%, #4596FB 84.06%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "destination-out",
      maskComposite: "exclude",
    }}
  ></span>
</button>





<div
  className="absolute w-[699px] h-[699px] top-[-243px] left-1/2 transform -translate-x-[43%] rounded-full"
  style={{
    background: "linear-gradient(180deg, #0E7BF8 0%, rgba(14, 123, 248, 0) 86.35%)",
    filter: "blur(160px)",
  }}
></div>


  </section>

















  
{/* Second Section */}
<section className="absolute w-full h-[700px] top-[1010px] left-0 opacity-100 bg-black bg-cover bg-center">
  <div className="max-w-5xl mx-auto px-6 relative flex justify-center">
    


    {/* Main Container */}
    <div className="absolute w-[1113px] h-[500px] top-[120px] rounded-[17px] bg-transparent text-white shadow-lg p-6">
      



      {/* Title */}
      <div className="absolute w-[857px] h-[53px] top-[21px] left-[16px] flex items-center">
        <h1
          className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 underline"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Why Choose emma?
        </h1>
      </div>







      {/* Content Blocks */}
      <div className="absolute w-auto min-w-[120px] h-[24px] top-[150px] left-[16px] flex items-center whitespace-nowrap">
        <h1 className="text-[16px] leading-[24px] font-medium font-mplus text-white-900 truncate">
          Custom CRM
        </h1>
      </div>

      <div className="absolute top-[180px] left-[16px] p-2 max-w-[450px]">
        <p
          className="text-[10px] md:text-[13px] leading-[22px] md:leading-[24px] 
                     font-normal font-mplus text-[#ABA7A7]"
        >
          Streamline your lead capture from multiple sources such as Facebook, Google Ads,  
          your website, and more, ensuring no lead goes unnoticed.
        </p>
      </div>

      <div className="absolute w-auto min-w-[120px] h-[24px] top-[260px] left-[16px] flex items-center whitespace-nowrap">
        <h1 className="text-[16px] leading-[24px] font-medium font-mplus text-white-900 truncate">
          Best for small-scale business
        </h1>
      </div>

      <div className="absolute top-[290px] left-[16px] p-2 max-w-[450px]">
        <p
          className="text-[10px] md:text-[13px] leading-[22px] md:leading-[24px] 
                     font-normal font-mplus text-[#ABA7A7]"
        >
          Streamline your lead capture from multiple sources such as Facebook, Google Ads,  
          your website, and more, ensuring no lead goes unnoticed.
        </p>
      </div>

      <div className="absolute w-auto min-w-[120px] h-[24px] top-[370px] left-[16px] flex items-center whitespace-nowrap">
        <h1 className="text-[16px] leading-[24px] font-medium font-mplus text-white-900 truncate">
          Lifetime free
        </h1>
      </div>

      <div className="absolute top-[400px] left-[16px] p-2 max-w-[450px]">
        <p
          className="text-[10px] md:text-[13px] leading-[22px] md:leading-[24px] 
                     font-normal font-mplus text-[#ABA7A7]"
        >
          Streamline your lead capture from multiple sources such as Facebook, Google Ads,  
          your website, and more, ensuring no lead goes unnoticed.
        </p>
      </div>

      {/* Right Side Content */}
      <div className="absolute top-[24px] left-1/2 transform -translate-x-[50px] p-2 max-w-[450px]">
        <p
          className="text-[10px] md:text-[13px] leading-[22px] md:leading-[24px] 
                     font-normal font-mplus text-[#ABA7A7]"
        >
          Streamline your lead capture from multiple sources such as Facebook, Google Ads,  
          your website, and more, ensuring no lead goes unnoticed.
        </p>
      </div>





      {/* Positioned Image */}
      <div className="absolute w-[558px] h-[366px] top-[180px] left-[70%] transform -translate-x-1/2 rounded-[17px] overflow-hidden">
  <Image
    src="/images/img comp.png"
    alt="Custom Image"
    width={470}
    height={900}
    className="rounded-[17px] object-cover"
  />
</div>




    </div>

  </div>
</section>












</main>
  


  )
}

export default Backgroundsection