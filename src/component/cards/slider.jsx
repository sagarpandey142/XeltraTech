import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slider.css';
import '../clients.css'
import architect from '../../assets/connection.svg'
import aurora from '../images/aurora.png'
import connection from '../images/connection.png'
import domo from '../images/domo.png'
import marine from '../images/marine.png'



// import required modules
import { FreeMode, Pagination,Autoplay } from 'swiper/modules';

export default function slider() {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{  // Configure autoplay
          delay: 2000, // Time between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Keep autoplay even when user interacts (optional)
        }}
        modules={[Autoplay]}
        className="client-box"
      >
        <SwiperSlide className='ul'><img  src={architect}/></SwiperSlide>
        <SwiperSlide  className='ul'><img  src={aurora}/></SwiperSlide>
        <SwiperSlide  className='ul'><img  src={connection}/></SwiperSlide>
        <SwiperSlide  className='ul'><img  src={connection}/></SwiperSlide>
        <SwiperSlide  className='ul'><img  src={aurora}/></SwiperSlide>
      </Swiper>
    </div>
  );
}
