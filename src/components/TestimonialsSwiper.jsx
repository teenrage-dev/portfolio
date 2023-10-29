import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { SwiperTestimonialItem } from './SwiperTestimonialItem';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/components/_testimonialSwiper.scss';

const data = [
  {
    avatar: '#446ee7',
    name: 'elenache781',
    description:
      'Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed aliquet neque at. ',
    rates: 1,
  },
  {
    avatar: '#6689ec',
    name: 'younhee0702',
    description:
      'Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed aliquet neque at. ',
    rates: 1,
  },
  {
    avatar: '#a23f6e',
    name: 'taras_g',
    description:
      'Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed aliquet neque at. ',
    rates: 1,
  },
  {
    avatar: '#c14a83',
    name: 'z0rz0r',
    description:
      'Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed aliquet neque at. ',
    rates: 1,
  },
];

export const TestimonialSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSlideChange = (swiper) => {
    if (swiper.swipeDirection === 'next') {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={onSlideChange}
      onSwiper={(swiper) => console.log(swiper)}
      className='testimonials-swiper'
    >
      {data.map(({ avatar, name, description, rates }, index) => {
        return (
          <SwiperSlide key={index}>
            <SwiperTestimonialItem
              avatar={avatar}
              name={name}
              description={description}
              rates={rates}
              isActive={index === currentSlide}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
