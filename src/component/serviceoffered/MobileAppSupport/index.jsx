import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from './Hero';
import Footer1  from "../../Homepage/footer1";
import AboutUI from "./AboutUI";
import Maintenance from "./Maintenance";
import Services from "./Services";


const MobileAppSupport = () => {
  return (
    <div className="overflow-hidden">
      <Topbar/>
      <Topmenu/>
      <Hero/>
      <AboutUI/>
      <Maintenance/>
      <Services/>
      <Footer1/>
    </div>
  );
};

export default MobileAppSupport;
