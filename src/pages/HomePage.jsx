import React from 'react';
import { Outlet } from 'react-router';

import { NavigationBar } from '../components/NavigationBar';
import { Menu } from '../components/Menu';

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

        <NavigationBar />
      </header>
      <Menu />
      <Outlet />
    </div>
  );
};
