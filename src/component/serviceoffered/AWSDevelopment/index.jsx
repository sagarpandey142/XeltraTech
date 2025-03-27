import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import AWSApproach from "./AWSApproach";
import AWSValues from "./AWSValues";
import WhychooseAWS from "./WhychooseAWS";
import Footer1 from "../../Homepage/footer1";

const AWSDevelopment = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <AWSValues />
        <AWSApproach />
        <WhychooseAWS />
        <Footer1/>
    </div>
  );
};

export default AWSDevelopment;
