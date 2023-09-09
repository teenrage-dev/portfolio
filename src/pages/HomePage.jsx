import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { IoPersonSharp } from 'react-icons/io5';
import { PiSquaresFourFill } from 'react-icons/pi';
import { MdMessage } from 'react-icons/md';
import { TbMailFilled } from 'react-icons/tb';

import HeaderLink from '../components/HeaderLink';
import {
  MENU_ICON_SIZE,
  PRIMARY_ICON_COLOR,
  PRIMARY_ICON_SIZE,
  WHITE_ICON_COLOR,
} from '../constants';

import '../styles/components/_container.scss';
import './styles/_homePage.scss';

const HomePage = () => {
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
                    color={PRIMARY_ICON_COLOR}
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
                    color={PRIMARY_ICON_COLOR}
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
            <HiHome size={MENU_ICON_SIZE} color={WHITE_ICON_COLOR} />
          </li>
          <li className='menu-nav-list-item'>
            <IoPersonSharp size={MENU_ICON_SIZE} color={WHITE_ICON_COLOR} />
          </li>
          <li className='menu-nav-list-item'>
            <PiSquaresFourFill size={MENU_ICON_SIZE} color={WHITE_ICON_COLOR} />
          </li>
          <li className='menu-nav-list-item'>
            <MdMessage size={MENU_ICON_SIZE} color={WHITE_ICON_COLOR} />
          </li>
          <li className='menu-nav-list-item'>
            <TbMailFilled size={MENU_ICON_SIZE} color={WHITE_ICON_COLOR} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
