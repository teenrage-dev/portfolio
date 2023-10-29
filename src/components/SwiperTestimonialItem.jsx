import React from 'react';

import BellAnimation from './BellAnimation';
import { getFirstLetterName } from '../utils/index';
import { Icon } from './Icon';

import '../styles/components/_swiperTestimonialItem.scss';

const iconId = 'quote';

export const SwiperTestimonialItem = ({
  avatar,
  name,
  description,
  rates,
  isActive,
}) => {
  return (
    <div className='swiper-testimonial-item'>
      <div className='avatar' style={{ backgroundColor: avatar }} title={name}>
        <p className='avatar-name'>{getFirstLetterName(name)}</p>
      </div>
      <p className='description'>{description}</p>
      <div className='icon-field'>
        <BellAnimation isAnimate={isActive}>
          <Icon id={iconId} className={'icon'} />
        </BellAnimation>
      </div>
    </div>
  );
};
