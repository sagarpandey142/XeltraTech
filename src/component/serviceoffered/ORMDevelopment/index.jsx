import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import ORMApproach from "./ORMApproach";
import ORMValues from "./ORMValues";
import WhychooseORM from "./WhychooseORM";
import Footer1 from "../../Homepage/footer1";

const ORMDevelopment = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <ORMValues />
        <ORMApproach />
        <WhychooseORM />
        <Footer1/>
    </div>
  );
};

export default ORMDevelopment;
