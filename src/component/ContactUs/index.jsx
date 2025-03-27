import React from "react";
import Hero from "./Hero";
import GetStarted from "./GetStarted";
import "./index.css";
import Enquiry from "./Enquiry";
import Maps from "./Maps";
import Footer1 from "../Homepage/footer1";
import Topmenu from "../commonpage/Topmenu";
import Topbar from "../Homepage/Topbar";
const ContactUs = () => {
  return (
    <div className=" overflow-hidden">
      <Topbar />
      <Topmenu />
      <Hero />
      <GetStarted />
      <Enquiry />
      <Maps />
      <Footer1 />
    </div>
  );
};

export default ContactUs;
