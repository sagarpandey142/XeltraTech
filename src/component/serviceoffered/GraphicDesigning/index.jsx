import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import Footer1 from "../../Homepage/footer1";
import OurServices from "./OurServices";

const GraphicDesign = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <OurServices />
        <Footer1/>
    </div>
  );
};

export default GraphicDesign;
