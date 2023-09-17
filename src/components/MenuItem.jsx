import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ACCENT_ICON_COLOR, WHITE_ICON_COLOR } from '../constants';

import '../styles/components/_menuItem.scss';

export const MenuItem = ({ menuItem }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <li
      className='menu-nav-list-item'
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <NavLink to={menuItem.to}>
        {({ isActive }) =>
          React.cloneElement(menuItem.icon, {
            color:
              isActive || isHovering ? ACCENT_ICON_COLOR : WHITE_ICON_COLOR,
          })
        }
      </NavLink>

      <div
        className={`menu-nav-list-item-hover-container ${
          isHovering ? 'hovered' : ''
        }`}
      >
        <div className='menu-nav-list-item-hover-field'>
          {menuItem.hoverText}
        </div>
      </div>
    </li>
  );
};
