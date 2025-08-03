import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Clo, Container, Row } from "react";
import { fromJSON } from "postcss";
import RotatingText from "./RotatingText";

const HeroSection = ({ home }) => {
  return (
    <section
      id="home"
      className="h-screen bg-transparent flex xl:flex-row flex-col-reverse items-center
      justify-between lg:px-24 px-10 relative overflow-hidden lg:mt-[0px] mt-50"
    >
      {/* Ledt Section */}
      <div className="z-40 lg:mb-[0%] mb-[10%]   min-w-[65%]">
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 md:mb-2"
        >
          Hello! I'm <br />
          <RotatingText />
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
          className="text-[1rem] md:text-1xl lg:text-2xl text-purple-200 max-w-2xl "
        >
          Alongside my passion for web and app development, I am a visual
          storyteller at heart. As a freelance social media designer and video
          editor, I enjoy bringing ideas to life through engaging visuals. My
          hobbies in photography and creative editing inspire me to create
          beautiful and functional designs, both on and off the screen.
        </motion.p>
      </div>
      {/* Kanan Section */}

      <Spline
        className=" absolute scale-[80%]  lg:scale-[100%] xl:right-[-28%] p-0 w-full right-0  top-[-20%] lg:top-[-10%]  z-0 lg:top-3"
        scene="https://prod.spline.design/A6xBgeNpMShMRxt6/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;
