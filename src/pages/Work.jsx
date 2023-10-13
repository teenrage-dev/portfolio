import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { SwiperWorkItem } from '../components/SwiperWorkItem';
import IELTSImg from '../assets/images/project-ielts.png';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles/_work.scss';

const data = [
  {
    avatar: IELTSImg,
    description:
      'Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed aliquet neque at. ',
    technologies: 'Angular • Kendo UI • etc',
    link: '#1',
  },
  {
    avatar: IELTSImg,
    description:
      'Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed aliquet neque at. ',
    technologies: 'Angular • Kendo UI • etc',
    link: '#1',
  },
  {
    avatar: IELTSImg,
    description:
      'Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed aliquet neque at. ',
    technologies: 'Angular • Kendo UI • etc',
    link: '#1',
  },
  {
    avatar: IELTSImg,
    description:
      'Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed aliquet neque at. ',
    technologies: 'Angular • Kendo UI • etc',
    link: '#1',
  },
];

export const Work = () => {
  return (
    <div className='work-section'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='work-swiper'
      >
        {data.map(({ avatar, description, technologies, link }, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperWorkItem
                avatar={avatar}
                description={description}
                technologies={technologies}
                link={link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
