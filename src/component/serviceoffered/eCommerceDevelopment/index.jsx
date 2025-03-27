import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import ECommerceApproach from "./eCommerceApproach";
import ECommerceValues from "./eCommerceValues";
import WhychooseEcommerce from "./WhychooseEcommerce";
import Footer1 from "../../Homepage/footer1";

const eCommerceDevelopment = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <ECommerceApproach />
        <ECommerceValues />
        <WhychooseEcommerce />
        <Footer1/>
    </div>
  );
};

export default eCommerceDevelopment;
