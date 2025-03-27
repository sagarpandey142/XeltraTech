import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import CustomECommerceWebsiteNeeds from "./CustomECommerceWebsiteNeeds";
import Footer1 from "../../Homepage/footer1";
import WhychooseCustomECommerceWebsite from "./WhychooseCustomECommerceWebsite";

const CustomECommerceWebsite = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <CustomECommerceWebsiteNeeds />
        <WhychooseCustomECommerceWebsite />
        <Footer1/>
    </div>
  );
};

export default CustomECommerceWebsite;
