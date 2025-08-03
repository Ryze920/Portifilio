import React from "react";
import Allskills from "./Allskills";
import Textskills from "./Textskills";
import Allskilshp from "./Allskilshp";

const Mainskill = () => {
  return (
    <div id="skills" className="">
      <div className="max-w-[1200px] px-4 b-0 mx-auto min-h-[600px] relative overflow-hidden ">
        <Textskills />
        <div className="bottom-[50px] absolute left-[50%]  -translate-x-[50%] lg:flex hidden">
          <Allskills />
        </div>
        <div className="  md:hidden">
          <Allskilshp />
        </div>
      </div>
    </div>
  );
};

export default Mainskill;
