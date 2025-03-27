import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import SeoDigitalApproach from "./SeoDigitalApproach";
import SeoDigitalValues from "./SeoDigitalValues";
import WhychooseSeoDigital from "./WhychooseSeoDigital";
import Footer1 from "../../Homepage/footer1";

const SeoDigitalDevelopment = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <SeoDigitalValues />
        <SeoDigitalApproach />
        <WhychooseSeoDigital />
        <Footer1/>
    </div>
  );
};

export default SeoDigitalDevelopment;
