import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import PPCApproach from "./PPCApproach";
import PPCValues from "./PPCValues";
import WhychoosePPC from "./WhychoosePPC";
import Footer1 from "../../Homepage/footer1";

const PPCDevelopment = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <PPCValues />
        <PPCApproach />
        <WhychoosePPC />
        <Footer1/>
    </div>
  );
};

export default PPCDevelopment;
