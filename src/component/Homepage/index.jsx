import { useState } from "react";

import "../../App.css";
import Featuredservices from "../Homepage/Featuredservices";
import Header1 from "../Homepage/Header1";
import Portfolio from "../homepage/portfolio";
import Wecando from "../homepage/wecando";
import Testimonials from "../Homepage/testimonials";
import Clients from "../homepage/clients";
import Chooseus from "../homepage/chooseus";
import Development from "../homepage/developmentprocess";
import Footer1 from "../homepage/footer1";
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