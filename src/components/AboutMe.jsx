import React from "react";
import Foto from "./About/Foto";
const AboutMe = (about) => {
  return (
    <section className="h-full " id="about">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  m-8 items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              About Me <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-violet-500">
                The Random Guy
              </span>
            </h1>
            <p className="max-w-[700px] text-2xl">
              I have a passion for the digital world. As a Frontend Developer, I
              love turning ideas into interactive interfaces. My hobby in
              photography and experience as a Social Media Designer complements
              my skills with a creative touch. Oh yeah, greetings from my cat,
              Thanos.
            </p>
          </div>

          {/* FOTO */}
          <div>
            <Foto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
