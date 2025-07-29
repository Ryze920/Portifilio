import React from "react";
import Foto from "./About/Foto";
const AboutMe = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  m-8 items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Enthusiast</span>
            <h1 className="h1 mb-6">
              About Me <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-violet-500">
                The Random Guy
              </span>
            </h1>
            <p className="max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium sapiente fugit consequuntur? Minima, molestiae.
              Ratione vero illo molestias consequatur quis, asperiores quia in
              at quisquam nostrum. Alias, aperiam. Veniam, itaque.
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
