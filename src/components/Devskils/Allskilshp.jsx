import React from "react";
import { skills } from "../../data/Allskill";

const Allskilshp = () => {
  return (
    <div className="grid md:grid-cols-4  grid-cols-2 gap-8 md:gap-12 my-12 ">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col  items-center">
            <item.icon className="text-7xl text-violet-700 " />
            <p className="text-center mt-4">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Allskilshp;
