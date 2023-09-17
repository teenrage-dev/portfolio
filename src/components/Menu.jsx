import React from 'react';
import { HiHome } from 'react-icons/hi';
import { IoPersonSharp } from 'react-icons/io5';
import { MdMessage } from 'react-icons/md';
import { PiSquaresFourFill } from 'react-icons/pi';
import { TbMailFilled } from 'react-icons/tb';

import { MenuItem } from './MenuItem';
import { MENU_ICON_SIZE } from '../constants';

import '../styles/components/_menu.scss';

const menuItems = [
  {
    to: '/',
    icon: <HiHome size={MENU_ICON_SIZE} />,
    hoverText: 'Home',
  },
  {
    to: '/about',
    icon: <IoPersonSharp size={MENU_ICON_SIZE} />,
    hoverText: 'About',
  },
  {
    to: '/work',
    icon: <PiSquaresFourFill size={MENU_ICON_SIZE} />,
    hoverText: 'Work',
  },
  {
    to: '/testimonials',
    icon: <MdMessage size={MENU_ICON_SIZE} />,
    hoverText: 'Testimonials',
  },
  {
    to: '/contact',
    icon: <TbMailFilled size={MENU_ICON_SIZE} />,
    hoverText: 'Contact',
  },
];

export const Menu = () => {
  return (
    <div className='menu-nav'>
      <ul className='menu-nav-list'>
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.to} menuItem={menuItem} />
        ))}
      </ul>
    </div>
  );
};
