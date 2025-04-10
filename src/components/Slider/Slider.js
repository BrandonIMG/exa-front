import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


export default function Slider() {
    return (
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-5">
          <SwiperSlide>
            <img src="/images/slide_1.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
          <img src="/images/slide_2.jpg"></img>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }