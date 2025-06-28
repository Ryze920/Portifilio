import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CustomCursor from "../components/CustomCursor";
import Tab from "../components/Tab";

const HomePage = () => {
  return (
    <div
      className="bg-gradient-to-b
      from-violet-900 to-black"
    >
      <Header />
      <HeroSection />
      <CustomCursor />
      <Tab />
    </div>
  );
};

export default HomePage;
