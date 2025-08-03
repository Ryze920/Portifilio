import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import Tab from "./components/Tab";

import HomePage from "./Pages/HomePage";
import AppRoutes from "../src/routes/allroutes";
import RotatingText from "./components/RotatingText";
export default function App() {
  return (
    <>
      <Header />
      {/* <HeroSection />
      <CustomCursor />
      <Tab /> */}
      {/* <HomePage /> */}
      <AppRoutes />
      {/* <RotatingText /> */}
    </>
  );
}
