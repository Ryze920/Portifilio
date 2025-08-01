import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CustomCursor from "../components/CustomCursor";
import Tab from "../components/Tab";
import AboutMe from "../components/AboutMe";
import Lagu from "../components/Lagu";
const HomePage = () => {
  return (
    <div
      className="bg-gradient-to-b
      from-violet-900 to-black"
    >
      <HeroSection />
      <CustomCursor />
      <AboutMe />
      <Tab />
      <Lagu />
    </div>
  );
};

export default HomePage;
