import React from "react";
// import Fotosaya from "../../assets/profile2.png";
import Fotosaya from "../../assets/yosua2.jpg";
// import Fotosaya from "../../assets/Yosua.jpg";

import { motion } from "framer-motion";
// import Image from "next/Image";
const Foto = () => {
  return (
    <div className="w-full relative  mt-5">
      {/* Foto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]  rounded-full absolute  overflow-hidden "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <img
            src={Fotosaya}
            alt="Foto Profil"
            className="w-full h-auto rounded-full object-contain mix-blend-color-dodge top-1/2 left-0 -translate-x-[-10px] -translate-y-[11px] "
          />
        </motion.div>

        {/* lingkaran nya  */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="violet"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Foto;
