import React from "react";
import Topmenu from "../commonpage/Topmenu";
import Topbar from "../Homepage/Topbar";
import Hero from './Hero';
import Footer1 from "../Homepage/footer1"
import PortfolioContent from "./PortfolioContent";



const Portfolio = () => {
  return (
    <div>
      <Topbar/>
      <Topmenu/>
      <Hero/>
      <PortfolioContent/>
      <Footer1/>
    </div>
  );
};

export default Portfolio;
