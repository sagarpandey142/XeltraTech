import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service";
import WhychooseContent from "./WhychooseContent";
import Footer1 from "../../Homepage/footer1";

const ContentWriting = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <WhychooseContent />
        <Footer1/>
    </div>
  );
};

export default ContentWriting;
