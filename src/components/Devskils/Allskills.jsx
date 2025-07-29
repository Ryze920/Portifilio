import React from "react";

import { skills } from "../../data/Allskill";
import Singleskills from "./Singleskills";

const Allskills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <Singleskills
              key={index}
              text={item.skill}
              imgSvg={<item.icon />}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Allskills;
