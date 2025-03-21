import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Service from "./Service"
import WordPressNeeds from "./WordPressNeeds";
import Footer1 from "../../Homepage/footer1";
import WhychooseWp from "./WhychooseWp";

const WordPressDevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Service />
        <WordPressNeeds />
        <WhychooseWp />
        <Footer1/>
    </div>
  );
};

export default WordPressDevelopment;
