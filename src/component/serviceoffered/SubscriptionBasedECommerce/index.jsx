import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import SubscriptionBasedECommerceNeeds from "./SubscriptionBasedECommerceNeeds";
import Footer1 from "../../Homepage/footer1";
import WhychooseSubscriptionBasedECommerce from "./WhychooseSubscriptionBasedECommerce";

const SubscriptionBasedECommerce = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <SubscriptionBasedECommerceNeeds />
        <WhychooseSubscriptionBasedECommerce />
        <Footer1/>
    </div>
  );
};

export default SubscriptionBasedECommerce;
