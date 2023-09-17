import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { PRIMARY_ICON_SIZE } from '../constants';
import HeaderLink from './HeaderLink';

import '../styles/components/_navigationBar.scss';

const headerItems = [
  {
    icon: (
      <FaLinkedin size={PRIMARY_ICON_SIZE} className='nav-list-item-link' />
    ),
    link: 'https://www.linkedin.com/in/renat-raiend/',
  },
  {
    icon: <FaGithub size={PRIMARY_ICON_SIZE} className='nav-list-item-link' />,
    link: 'https://github.com/teenrage-dev',
  },
];

export const NavigationBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-list'>
        {headerItems.map((headerItem) => (
          <li className='nav-list-item' key={headerItem.link}>
            <HeaderLink icon={headerItem.icon} link={headerItem.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
