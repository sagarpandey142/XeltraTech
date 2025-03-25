import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import DevOpsNeeds from "./DevOpsNeeds";
import Footer1 from "../../Homepage/footer1";
import WhychooseDevOps from "./WhychooseDevOps";

const DevOpsDevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <DevOpsNeeds />
        <WhychooseDevOps />
        <Footer1/>
    </div>
  );
};

export default DevOpsDevelopment;
