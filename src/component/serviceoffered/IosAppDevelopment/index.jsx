import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import Approach from "./approach";
import Footer1 from "../../Homepage/footer1";
import Importance from "./Importance";

const IosAppDevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <Approach />
        <Importance />
        <Footer1/>
    </div>
  );
};

export default IosAppDevelopment;
