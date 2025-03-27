import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import AzureApproach from "./AzureApproach";
import AzureValues from "./AzureValues";
import WhychooseAzure from "./WhychooseAzure";
import Footer1 from "../../Homepage/footer1";

const AzureDevelopment = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <AzureValues />
        <AzureApproach />
        <WhychooseAzure />
        <Footer1/>
    </div>
  );
};

export default AzureDevelopment;
