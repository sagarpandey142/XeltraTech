import React, { useRef, useState } from "react";
import "./Header1.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import banner from "../images/banner.webp"; // Optimized WebP
import banner1 from "../images/banner1.webp";
import banner2 from "../images/banner2.webp";


// Import Swiper styles
import "swiper/css";

function Header1() {
  return (
    <>
    <div className='header1-body'>
    <div className="header1-swiperslide-container">
        <div className="header1-swiperslide-container-heading1">Boosting Business with Tech</div>
        <div className="header1-swiperslide-container-line"></div>
        <div className="header1-swiperslide-container-heading2">Unlocking Your Business Potential with Technology</div>
        <div className="header1-swiperslide-container-para">Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.</div>
        <div className="header1-swiperslide-container-button"> <Link to="/ContactUs">Get Started</Link></div>
    </div>
    <Swiper className="mySwiper-header1"
    cssMode={true}
    keyboard={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Autoplay]}
    
    preloadImages={false} // Prevents preloading
    lazy={true} // Enables lazy loading
    watchSlidesVisibility={true} // Only loads visible slides
    watchSlidesProgress={true}>
        <SwiperSlide className="header1-swiperslide"><img src={banner}/></SwiperSlide>
        <SwiperSlide className="header1-swiperslide"><img src={banner1}/></SwiperSlide>
        <SwiperSlide className="header1-swiperslide"><img src={banner2}/></SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Header1
