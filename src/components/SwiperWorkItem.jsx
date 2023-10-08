import React, { useState } from 'react';

import '../styles/components/_swiperWorkItem.scss';

export const SwiperWorkItem = ({ avatar, description, technologies }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className={'work-swiper-slide'}>
      <div className='work-swiper-slide-item'>
        <div
          className={`work-swiper-image-wrapper ${
            isHovering ? 'work-swiper-image-wrapper-hover' : ''
          }`}
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          <img src={avatar} alt='project_image' className='work-swiper-image' />
          {isHovering && (
            <a href='#1' className='work-swiper-image-link'>
              Live Project
            </a>
          )}
        </div>
      </div>
      <div className='work-swiper-slide-item'>
        <h3 className='work-swiper-slide-title'>My work</h3>
        <p className='work-swiper-slide-description'>{description}</p>
        <p className='work-swiper-slide-description-title'>Technologies</p>
        <p className='work-swiper-slide-description'>{technologies}</p>
      </div>
    </div>
  );
};
