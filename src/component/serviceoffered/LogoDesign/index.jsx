import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About"
import Aspect from "./Aspect"
import ChooseUsLogo from "./ChooseUsLogo";
import CreateLogo from "./CreateLogo";
import Footer1 from "../../Homepage/footer1";

const LogoDesign = () => {
  return (
    <div >
      <Topbar/>
      <Topmenu/>
      <Hero />
      <About />
      <Aspect />
      <CreateLogo/>
      <ChooseUsLogo />
      <Footer1/>
    </div>
  );
};

export default LogoDesign;
