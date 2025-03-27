import { useState } from "react";

import "../../App.css";
import Featuredservices from "../Homepage/Featuredservices";
import Header1 from "../Homepage/Header1";
import Portfolio from "../Homepage/portfolio";
import Wecando from "../Homepage/wecando";
import Testimonials from "../Homepage/testimonials";
import Clients from "../Homepage/clients";
import Chooseus from "../Homepage/chooseus";
import Development from "../Homepage/developmentprocess";
import Footer1 from "../Homepage/footer1";
import Topbar from "../Homepage/Topbar";
import Topmenu from "../commonpage/Topmenu";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-hidden">
      <Topbar />
      <Topmenu />
      <Header1 />
      <Featuredservices />
      <Chooseus />
      {/* <Portfolio /> */}
      <Wecando />
      <Development />
      <Testimonials />
      <Clients/>
      <Footer1 />
    </div>
  );
}

export default Homepage;