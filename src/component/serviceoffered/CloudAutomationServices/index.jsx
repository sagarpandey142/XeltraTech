import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import CASApproach from "./CASApproach";
import OurServices from "./OurServices";
import WhychooseCAS from "./WhychooseCAS";
import Footer1 from "../../Homepage/footer1";

const CloudAutomationServices = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <CASApproach />
        <OurServices />
        <WhychooseCAS />
        <Footer1/>
    </div>
  );
};

export default CloudAutomationServices;
