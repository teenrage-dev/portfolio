import React from 'react';

import '../styles/components/_contactInfoItem.scss';
import { Icon } from './Icon';

export const ContactInfoItem = ({ item }) => {
  return (
    <li className='contact-info-list-item'>
      <Icon
        id={item.icon.id}
        className={'contact-info-list-item-icon'}
        width={item.icon.width}
        height={item.icon.height}
      />
      <div className='contact-info-list-item-text-wrapper'>
        <p className='contact-info-list-item-text-title'>{item.info.name}</p>
        <p className='contact-info-list-item-text-text'>{item.info.text}</p>
      </div>
      <a href={item.link.link} className='contact-info-list-item-link'>
        {item.link.name}
      </a>
    </li>
  );
};
