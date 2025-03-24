import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import EcommerceMaintenanceApproach from "./EcommerceMaintenanceApproach";
import EcommerceMaintenanceValues from "./EcommerceMaintenanceValues";
import WhychooseEcommerceMaintenance from "./WhychooseEcommerceMaintenance";
import Footer1 from "../../Homepage/footer1";

const EcommerceMaintenanceDevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <EcommerceMaintenanceValues />
        <EcommerceMaintenanceApproach />
        <WhychooseEcommerceMaintenance />
        <Footer1/>
    </div>
  );
};

export default EcommerceMaintenanceDevelopment;
