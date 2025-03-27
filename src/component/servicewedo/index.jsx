import React from "react";

import Hero from "./Hero";
import Topmenu from "../commonpage/Topmenu";
import Topbar from "../Homepage/Topbar";
import Offerings from "./Offerings";
import Footer1 from "../Homepage/footer1";
import Requirement from "./Requirement";

const servicewedo = () => {
  return (
    <div className="overflow-hidden">
      <Topbar />
      <Topmenu />
      <Hero />
      <Offerings />
      <Requirement />
      <Footer1/>
    </div>
  );
};

export default servicewedo;
