import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import SEOApproach from "./SEOApproach";
import SEOValues from "./SEOValues";
import WhychooseSEO from "./WhychooseSEO";
import Footer1 from "../../Homepage/footer1";

const SEODevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <SEOApproach />
        <SEOValues />
        <WhychooseSEO />
        <Footer1/>
    </div>
  );
};

export default SEODevelopment;
