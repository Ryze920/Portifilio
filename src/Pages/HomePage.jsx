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
      from-violet-900 to-black overflow-hidden"
    >
      <Header />
      {/* Menggunakan id="home" untuk HeroSection */}
      <HeroSection id="home" />
      {/* CustomCursor tidak perlu ID */}
      <CustomCursor />
      {/* Menggunakan id="about" untuk AboutMe */}
      <AboutMe id="about" />
      {/* Tab juga tidak perlu ID untuk navigasi, asumsi ini adalah bagian dari portofolio */}
      <Tab id="expirience" />
      <Lagu id="" />{" "}
    </div>
  );
};

export default HomePage;
