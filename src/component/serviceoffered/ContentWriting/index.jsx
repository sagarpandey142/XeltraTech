import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import ContentApproach from "./ContentApproach";
import ContentValues from "./ContentValues";
import WhychooseContent from "./WhychooseContent";
import Footer1 from "../../Homepage/footer1";

const ContentWriting = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <ContentValues />
        <ContentApproach />
        <WhychooseContent />
        <Footer1/>
    </div>
  );
};

export default ContentWriting;
