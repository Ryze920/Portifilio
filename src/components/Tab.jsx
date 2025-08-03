import React, { useState } from "react";
import Devskills from "./Devskills";
import Myworks from "./Myworks";
import Mainskill from "./Devskils/Mainskill";

const Tabs = (expirience) => {
  const [selectedTab, setSelectedTab] = useState("devSkills"); // State untuk menyimpan tab yang dipilih

  return (
    <div className="w-full mx-auto bg-transparent" id="expirience">
      <h1
        className="text-center text-3xl lg:text-5xl  mb-5
      font-bold p-3"
      >
        Expirience
      </h1>
      <div className="flex   justify-center ">
        <div className=" lg:me-[100px] items-center ">
          <button
            onClick={() => setSelectedTab("devSkills")}
            className={`py-2 px-4 text-lg font-semibold ${
              selectedTab === "devSkills"
                ? "border-b-2 border-violet-500 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-900"
                : "text-gray-500"
            }`}
          >
            Dev Skills
          </button>
        </div>
        <div className=" lg:ms-[100px] items-center">
          <button
            onClick={() => setSelectedTab("myWorks")} // Mengubah tab yang dipilih
            className={`py-2 px-4 text-lg font-semibold ${
              selectedTab === "myWorks"
                ? "border-b-2 border-violet-600 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-900 "
                : "text-gray-600  "
            }`}
          >
            My Works
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {selectedTab === "devSkills" ? (
          <div className="p-0 flex items-center justify-center mb-0  md:m-[80px] w-[auto] bg-gray-400 rounded-md shadow-sm bg-opacity-[0.3] ">
            {/* <h1 className="font-bold text-7xl ">Ngeprompt GPT </h1> */}
            <Devskills />
          </div>
        ) : (
          <Myworks />
        )}
      </div>
    </div>
  );
};

export default Tabs;
