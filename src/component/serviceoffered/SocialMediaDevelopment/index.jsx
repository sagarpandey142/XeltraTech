import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import SocialMediaApproach from "./SocialMediaApproach";
import SocialMediaValues from "./SocialMediaValues";
import WhychooseSocialMedia from "./WhychooseSocialMedia";
import Footer1 from "../../Homepage/footer1";

const SocialMediaDevelopment = () => {
  return (
    <div className="overflow-hidden">
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <SocialMediaValues />
        <SocialMediaApproach />
        <WhychooseSocialMedia />
        <Footer1/>
    </div>
  );
};

export default SocialMediaDevelopment;
