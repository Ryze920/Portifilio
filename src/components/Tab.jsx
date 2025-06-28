import React, { useState } from "react";
import Devskills from "./Devskills";
import Myworks from "./Myworks";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("devSkills"); // State untuk menyimpan tab yang dipilih

  return (
    <div className="w-full mx-auto bg-transparent">
      <h1
        className="text-center text-3xl lg:text-6xl 
      font-bold p-3"
      >
        My Skill
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
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
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
