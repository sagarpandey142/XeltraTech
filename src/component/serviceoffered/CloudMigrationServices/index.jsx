import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import CloudMigrationNeeds from "./CloudMigrationNeeds";
import Footer1 from "../../Homepage/footer1";
import Whychoosecm from "./Whychoosecm";

const CloudMigrationServices = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <CloudMigrationNeeds />
        <Whychoosecm />
        <Footer1/>
    </div>
  );
};

export default CloudMigrationServices;
