import React from "react";
import Topmenu from "../../commonpage/Topmenu"
import Topbar from "../../Homepage/Topbar"
import Hero from './Hero';
import Footer1  from "../../Homepage/footer1";
import AboutUI from "./AboutUI";
import Services from "./Services"
import Specialize from "./specialize";
import Tools from "./Tools"


const MobileUI = () => {
  return (
    <div className="overflow-hidden">
      <Topbar/>
      <Topmenu/>
      <Hero/>
      <AboutUI/>
      <Services/>
      <Specialize/>
      <Tools/>
      <Footer1/>
    </div>
  );
};

export default MobileUI;
