import React from "react";

const Singleskills = ({ imgSvg, text }) => {
  return (
    <div className=" hover:-translate-y-10 transition-all duration-500">
      <div className="flex  flex-col items-center  lg:gap-4 gap-2  relative ">
        <div
          className="bg-gradient-to-t from-purple-700 to-violet-900  text-white h-[100px] w-[100px] flex items-center justify-center
        rounded-full hover:text-yellow-500 hover:scale-105 transform transition-all duration-500 text-6xl 
        border-4 border-violet-500  z-10 "
        >
          {imgSvg}
        </div>
        <p className="text-white font-bold z-10">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-gradient-to-b from-violet-900 to-black absolute top-[50px] z-[0] "></div>
    </div>
  );
};

export default Singleskills;
