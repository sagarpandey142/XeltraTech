import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import DrupalApproach from "./DrupalApproach";
import DrupalValues from "./DrupalValues";
import Footer1 from "../../Homepage/footer1";
import WhychooseDrupal from "./WhychooseDrupal";

const DrupalWebDevelopment = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <DrupalApproach />
        <DrupalValues />
        <WhychooseDrupal />
        <Footer1/>
    </div>
  );
};

export default DrupalWebDevelopment;
