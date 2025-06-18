import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-gradient-to-b
  from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center 
  justify-between lg:px-24 px-10 relative overflow-hidden"
    >
      <div className="z-40 lg:mb-0 mb-[20] ">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffnes: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 "
        >
          Hello! Am i <br />
          Yosua Kurniawan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffnes: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-1xl text-purple-200 max-w-2xl "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, ad
          facilis. Atque dolorem eos qui cum quis impedit consequuntur! Vitae,
          nemo, suscipit nobis tempora repellat voluptate iure soluta ullam
          officiis labore, iste incidunt nostrum. Laborum, sapiente! Accusantium
          quos, odio delectus voluptatum ipsum porro quibusdam impedit aut animi
          neque, deserunt est cum quod.
        </motion.p>
      </div>

      {/* Kanan Section */}

      <div className="pt-10">
        <h1>3d</h1>
        <Spline
          className="absolute xl:right-[-18%] xl:top-[-12%] sm:top-[30%] top-0 sm:w-full sm:h-96  "
          scene="https://prod.spline.design/DoWkaMYpYnc0lpR8/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default HeroSection;
