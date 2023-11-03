import React from 'react';

import MainTitle from '../components/MainTitle';
import { TestimonialSwiper } from '../components/TestimonialsSwiper';

import './styles/_testimonials.scss';

export const Testimonials = () => {
  return (
    <div className='testimonials-section'>
      <div className='testimonials-container'>
        <MainTitle
          titleText={'What clients'}
          titleFieldText={' say'}
          isNewLine={false}
          style={{ marginBottom: '55px', textAlign: 'center' }}
        />
        <div className='swiper-container'>
          <TestimonialSwiper />
        </div>
      </div>
    </div>
  );
};
