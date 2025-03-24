import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import PaymentApproach from "./PaymentApproach";
import PaymentValues from "./PaymentValues";
import WhychoosePayment from "./WhychoosePayment";
import Footer1 from "../../Homepage/footer1";

const PaymentDevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <PaymentValues />
        <PaymentApproach />
        <WhychoosePayment />
        <Footer1/>
    </div>
  );
};

export default PaymentDevelopment;
