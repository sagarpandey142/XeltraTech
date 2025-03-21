import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import Footer1 from "../../Homepage/footer1";

const WordPressDevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <Footer1/>
    </div>
  );
};

export default WordPressDevelopment;
