import React from 'react';

import { getFirstLetterName } from '../utils/index';

import '../styles/components/_swiperTestimonialItem.scss';

export const SwiperTestimonialItem = ({ avatar, name, description, rates }) => {
  return (
    <div className='swiper-testimonial-item'>
      <div className='avatar' style={{ backgroundColor: avatar }} title={name}>
        <p className='avatar-name'>{getFirstLetterName(name)}</p>
      </div>
      <p className='description'>{description}</p>
      <div className='icon'>
        <svg>
          <use xlinkHref='../assets/sprite#quote' />
        </svg>
      </div>
    </div>
  );
};
