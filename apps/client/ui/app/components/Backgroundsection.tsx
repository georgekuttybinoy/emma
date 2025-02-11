import React from 'react'

const Backgroundsection = () => {
  return (

    <div className="absolute w-[1350px] h-[1021px] top-[-1px] left-[0px] opacity-100 bg-cover bg-center"
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




    <button className="relative w-[177px] h-[44px] absolute top-[-150px] left-[632px] rounded-[6px] text-white font-medium text-lg bg-transparent px-4 py-2">
  Request a Demo
  {/* Border Effect */}
  <span className="absolute inset-0 rounded-[6px] border-[2px] border-transparent"
    style={{
      background: "linear-gradient(244.91deg, #D4FFEC 15.94%, #57F2CC 48.55%, #4596FB 84.06%)",
      WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "destination-out",
      maskComposite: "exclude",
    }}
  ></span>
</button>





<div
  className="absolute w-[699px] h-[699px] top-[-243px] left-[413px] rounded-full"
  style={{
    background: "linear-gradient(180deg, #0E7BF8 0%, rgba(14, 123, 248, 0) 86.35%)",
    filter: "blur(160px)",
  }}
></div>



  </div>






  


  )
}

export default Backgroundsection