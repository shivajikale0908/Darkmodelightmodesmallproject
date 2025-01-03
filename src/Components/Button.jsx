
// import React from "react";

// function Button({ val, setval }) {
//   return (
//     <div
//       className={`relative w-[14vw] mt-[2vw] h-[5.5vw] shadow-xl border border-black rounded-full transition-all duration-500 overflow-hidden p-[0.7vw] ${
//         val ? "bg-gray-400" : "bg-blue-400"
//       }`}
//       onClick={() => setval((prev) => !prev)}
//     >
//       <div
//         className={`absolute flex items-center justify-center z-10 w-[4vw] h-[4vw] transition-all duration-500 rounded-full ${
//           val
//             ? "bg-gray-200 translate-x-[8.5vw]  "
//             : "bg-yellow-400 translate-x-[0vw]"
//         }`}
        
//       >
         
//         {val && (
//           <>
//             <div className='absolute h-3 w-3 rounded-full bg-gray-400 transition-all duration-700 top-2 z-20 right-[10%]'></div>   
//          <div className='absolute h-3 w-3 rounded-full bg-gray-400 transition-all duration-700 top-5 z-20 right-[50%]'></div>   
//          <div className='absolute h-3 w-3 rounded-full bg-gray-400 transition-all duration-700 top-7 z-20 right-[10%]'></div>   
//           </>
          
//         )}
//       </div>
//     </div>
//   );
// }

// export default Button;




import React from "react";

function Button({ val, setval }) {
  return (
    <div
      className={`relative w-[14vw] mt-[2vw] h-[5.5vw] shadow-xl border border-black rounded-full transition-all duration-500 overflow-hidden p-[0.7vw] ${
        val ? "bg-gray-400" : "bg-blue-400"
      }`}
      onClick={() => setval((prev) => !prev)}
    >
      <div
        className={`absolute flex items-center justify-center z-10 w-[4vw] h-[4vw] transition-all duration-500 rounded-full ${
          val
            ? "bg-gray-200 translate-x-[8.5vw]"
            : "bg-yellow-400 translate-x-[0vw]"
        }`}
      />

      <img
        src={val ? "/star.png" : "/cloud.png"}
        alt={val ? "Star Icon" : "Cloud Icon"}
        className={`absolute w-[20vw] h-[15vw] object-contain transition-all duration-500 ${
          val
            ? "top-[-2vw] right-[4vw]" 
            : "top-[-2vw] left-[4vw]" 
        }`}
      />
    </div>
  );
}

export default Button;
