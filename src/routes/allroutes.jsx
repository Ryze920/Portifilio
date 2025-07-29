import React from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "../components/Header";
import Home from "../Pages/HomePage";
const allroutes = () => {
  return (
    <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Home />} />

      <Route
        path="*"
        element={
          <div className="text-center mt-10 text-red-500">
            404 Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default allroutes;
