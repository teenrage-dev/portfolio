import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { IoPersonSharp } from 'react-icons/io5';
import { PiSquaresFourFill } from 'react-icons/pi';
import { MdMessage } from 'react-icons/md';
import { TbMailFilled } from 'react-icons/tb';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import HeaderLink from '../components/HeaderLink';
import {
  ACCENT_ICON_COLOR,
  MENU_ICON_SIZE,
  PRIMARY_ICON_SIZE,
  WHITE_ICON_COLOR,
} from '../constants';

import '../styles/components/_container.scss';
import './styles/_homePage.scss';

export const HomePage = () => {
  return (
    <div className='container'>
      <header className='header'>
        <div className='title-name'>
          <h2 className='title'>
            Renat Raiiend{' '}
            <span className='title-field'> FrontEnd Developer</span>
          </h2>
        </div>

        <nav className='nav-bar'>
          <ul className='nav-list'>
            <li className='nav-list-item'>
              <HeaderLink
                icon={
                  <FaLinkedin
                    size={PRIMARY_ICON_SIZE}
                    className='nav-list-item-link'
                  />
                }
                link={'https://www.linkedin.com/in/renat-raiend/'}
              />
            </li>
            <li className='nav-list-item'>
              <HeaderLink
                icon={
                  <FaGithub
                    size={PRIMARY_ICON_SIZE}
                    className='nav-list-item-link'
                  />
                }
                link={'https://github.com/teenrage-dev'}
              />
            </li>
          </ul>
        </nav>
      </header>
      <div className='menu-nav'>
        <ul className='menu-nav-list'>
          <li className='menu-nav-list-item'>
            <NavLink to='/'>
              {({ isActive }) => (
                <HiHome
                  size={MENU_ICON_SIZE}
                  color={isActive ? ACCENT_ICON_COLOR : WHITE_ICON_COLOR}
                />
              )}
            </NavLink>
          </li>
          <li className='menu-nav-list-item'>
            <NavLink to='/aboutme'>
              {({ isActive }) => (
                <IoPersonSharp
                  size={MENU_ICON_SIZE}
                  color={isActive ? ACCENT_ICON_COLOR : WHITE_ICON_COLOR}
                />
              )}
            </NavLink>
          </li>
          <li className='menu-nav-list-item'>
            <NavLink to='/messages'>
              {({ isActive }) => (
                <PiSquaresFourFill
                  size={MENU_ICON_SIZE}
                  color={isActive ? ACCENT_ICON_COLOR : WHITE_ICON_COLOR}
                />
              )}
            </NavLink>
          </li>
          <li className='menu-nav-list-item'>
            <NavLink to='/messages'>
              {({ isActive }) => (
                <MdMessage
                  size={MENU_ICON_SIZE}
                  color={isActive ? ACCENT_ICON_COLOR : WHITE_ICON_COLOR}
                />
              )}
            </NavLink>
          </li>
          <li className='menu-nav-list-item'>
            <NavLink to='/messages'>
              {({ isActive }) => (
                <TbMailFilled
                  size={MENU_ICON_SIZE}
                  color={isActive ? ACCENT_ICON_COLOR : WHITE_ICON_COLOR}
                />
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
