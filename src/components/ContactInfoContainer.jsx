import React from 'react';

import { ContactInfoItem } from './ContactInfoItem';
import cv from '../assets/cv/Renat_Raiiend_Frontend_Developer.pdf';

const data = [
  {
    icon: {
      id: 'email',
      width: 34,
      height: 22,
    },
    info: { name: 'Email', text: 'raiiend.r@gmail.com' },
    link: { name: 'Send a message', link: 'mailto:raiiend.r@gmail.com' },
  },
  {
    icon: {
      id: 'telegram',
      width: 40,
      height: 40,
    },
    info: { name: 'Telegram', text: '@teenrage' },
    link: { name: 'Send a message', link: 'https://t.me/teenrage' },
  },
  {
    icon: {
      id: 'cv',
      width: 36,
      height: 36,
    },
    info: { name: 'Curriculum vitae', text: '' },
    link: {
      name: 'Download CV',
      link: cv,
    },
  },
];

export const ContactInfoContainer = () => {
  return (
    <div className='contact-info-container'>
      <ul className='contact-info-list'>
        {data.map((item, i) => {
          return <ContactInfoItem key={i} item={item} />;
        })}
      </ul>
    </div>
  );
};
