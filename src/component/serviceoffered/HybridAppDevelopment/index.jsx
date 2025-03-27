import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "../HybridAppDevelopment/Hero";
import About from "./About"
import Solution from "./solution"
import Success from "./success";
import Why from "./why";
import Footer1 from "../../Homepage/footer1";

const HybridAppDevelopment = () => {
  return (
    <div className="overflow-hidden">
      <Topbar/>
      <Topmenu/>
      <Hero />
      <About />
      <Solution/>
      <Success/>
      <Why/>
      <Footer1/>
    </div>
  );
};

export default HybridAppDevelopment;
