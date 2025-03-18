import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from './Hero';
import Footer1  from "../../Homepage/footer1";
import AboutUI from "./AboutUI";
import Maintenance from "./AppMaintenance";
import Services from "./Services";


const AndroidAppDevelopment = () => {
  return (
    <div>
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

export default AndroidAppDevelopment;
