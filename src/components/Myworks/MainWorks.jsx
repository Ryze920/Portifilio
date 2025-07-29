import React from "react";
import { mywork } from "../../data/Mywork.js";

const MainWorks = () => {
  return (
    <div
      className=" flex items-center justify-center max-w-[1200px] px-4 b-0 mx-auto min-h-[600px] relative overflow-hidden gap-5 grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4  gap-[50px] 
    mb-[50px]"
    >
      {mywork.map((item, index) => (
        <div className="group relative items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transition ">
          <div key={index} className="   h-90 w-full">
            <img className="" src={item.foto} alt={item.Title} />
          </div>
          <div
            className=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black
                            group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black-/70"
          ></div>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[40%]
              group-hover:translate-y-0 transition-all"
          >
            <h1 className="text-3xl font-bold text-white">{item.Title}</h1>
            <p className="text-md  text-white mb-3 hidden  group-hover:block transition-opacity duration-400">
              {item.desc}
            </p>
            <button className="rounded-full hidden group-hover:block transition-all bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
              See More
            </button>
          </div>
        </div>
      ))}
      <div className="fixed bottom-16"></div>
    </div>
  );
};

export default MainWorks;
