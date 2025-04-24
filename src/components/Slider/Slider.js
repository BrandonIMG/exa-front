import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { map } from 'lodash';
import { ENV } from '@/utils/constants';
import 'animate.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export default function Slider({ slides }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activa la animación cuando el componente monta
    setAnimate(true);
  }, []);

  return (
    <div className={`mySwiper mt-5 ${animate ? 'animate__animated animate__fadeInLeft' : ''}`}>
      <Swiper navigation={true} modules={[Navigation]} loop={true}>
        {slides &&
          map(slides, (slide) => (
            <SwiperSlide key={slide.id}>
              <Link href={slide.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${ENV.SERVER_HOST}${slide.thumbnail.url}`}
                  className="img fluid rounded w-100"
                  alt={slide.title || 'Slide'}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}