import React from 'react';

import { ContactInfoItem } from './ContactInfoItem';

const data = [
  {
    icon: 'email',
    info: { name: 'Email', text: 'raiiend.r@gmail.com' },
    buttonName: 'Send a message',
  },
  {
    icon: 'telegram',
    info: { name: 'Telegram', text: '@teenrage' },
    buttonName: 'Send a message',
  },
  {
    icon: 'cv',
    info: { name: 'Curriculum vitae', text: '' },
    buttonName: 'Download CV',
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
