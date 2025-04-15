import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';

import { map } from 'lodash';

import { ENV } from '@/utils/constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


export default function Slider({slides}) {
  console.log(slides)
    return (
      <>
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper mt-5">
        {slides &&
                map(slides, (slide) => (
                  <SwiperSlide key={slide.id}>
                    <Link href={slide.url} target="_blank" rel="noopener noreferrer">
                      <img src={`${ENV.SERVER_HOST}${slide.thumbnail.url}`} className='img fluid rounded w-100 '></img>
                    </Link>

                  </SwiperSlide>
                ))}
        </Swiper>
      </>
    );
  }