import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import Footer1 from "../../Homepage/footer1";
import UseReactJs from "./UseReactJs";

const ReactNativeDevelopment = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <UseReactJs />
        <Footer1/>
    </div>
  );
};

export default ReactNativeDevelopment;
