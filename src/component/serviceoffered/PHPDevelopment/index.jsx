import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import PHPApproach from "./PHPApproach";
import PHPValues from "./PHPValues";
import Footer1 from "../../Homepage/footer1";

const PHPDevelopment = () => {
  return (
    <div className="">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <PHPApproach />
        <PHPValues />
        <Footer1/>
    </div>
  );
};

export default PHPDevelopment;
