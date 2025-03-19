import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import SplitText from "../SingleComponents/SplitText";
import AnimatedContent from "../SingleComponents/AnimatedContent";
import { Link } from "react-router-dom";
import banner from "../images/banner.webp"; // Optimized WebP
import banner1 from "../images/banner1.webp";
import banner2 from "../images/banner2.webp";

function Header() {
  return (
    <div className="body-main">
      <div className="banner-slider1-content">
        <div className="banner-slider1-content-text1">Boosting Business with Tech</div>
        <SplitText text="Unlocking Your Business" className="banner-slider1-content-text2" delay={50} />
        <div className="banner-slider1-content-text4">Potential with Technology</div>
        <div className="banner-slider1-content-text5">
          Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.
        </div>
        <AnimatedContent>
          <div className="banner-slider1-content-btn">
            <Link to="/ContactUs">Get Started</Link>
          </div>
        </AnimatedContent>
      </div>

      {/* Swiper Slider */}
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={false}
        keyboard={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        preloadImages={false} // Prevents preloading
        lazy={true} // Enables lazy loading
        watchSlidesVisibility={true} // Only loads visible slides
        watchSlidesProgress={true}
      >
        <SwiperSlide className="banner-slider1">
          <img src={banner} alt="Banner 1" className="swiper-lazy" />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>

        <SwiperSlide className="banner-slider1">
          <img src={banner1} alt="Banner 2" className="swiper-lazy" />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>

        <SwiperSlide className="banner-slider1">
          <img src={banner2} alt="Banner 3" className="swiper-lazy" />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
