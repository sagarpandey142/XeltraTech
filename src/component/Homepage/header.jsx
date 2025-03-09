import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import banner from '../images/banner.jpg';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import SplitText from '../SingleComponents/SplitText';
import AnimatedContent from "../SingleComponents/AnimatedContent"
import { Link } from 'react-router-dom';

function Header() {
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='body-main'>
            <div className="banner-slider1-content">
                <div className='banner-slider1-content-text1'>Boosting Business with Tech</div>
                <SplitText text="Unlocking Your Business" className="banner-slider1-content-text2" delay={50}/>
                <div className='banner-slider1-content-text4'>Potential with Technology</div>
                <div className='banner-slider1-content-text5'>
                    Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.
                </div>
              <AnimatedContent>  <div className='banner-slider1-content-btn'><Link to="/ContactUs">Get Started</Link></div> </AnimatedContent>
            </div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={false}
                keyboard={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='banner-slider1' style={{ backgroundImage: `url(${banner})` }}></SwiperSlide>
                <SwiperSlide className='banner-slider1' style={{ backgroundImage: `url(${banner1})` }}></SwiperSlide>
                <SwiperSlide className='banner-slider1' style={{ backgroundImage: `url(${banner2})` }}></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Header;
