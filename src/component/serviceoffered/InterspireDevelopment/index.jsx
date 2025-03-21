import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import InterspireApproach from "./InterspireApproach";
import InterspireNeeds from "./InterspireNeeds";
import InterspireValues from "./InterspireValues";
import Footer1 from "../../Homepage/footer1";

const InterspireDevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <InterspireApproach />
        <InterspireNeeds/>
        <InterspireValues />
        <Footer1/>
    </div>
  );
};

export default InterspireDevelopment;
