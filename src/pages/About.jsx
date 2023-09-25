import React from 'react';

import MainTitle from '../components/MainTitle';
import MainText from '../components/MainText';
import BackgoundImage from '../components/BackgoundImage';
import { Achievement } from '../components/Achievement';
import { CustomAccordion } from '../components/CustomAccordion';
import { aboutfText } from '../constants';

import './styles/_about.scss';

export const About = () => {
  return (
    <>
      <div className='about-section'>
        <div className='about-item'>
          <MainTitle />
          <MainText text={aboutfText} />
          <div className='achievement-wrapper'>
            <Achievement />
          </div>
        </div>

        <div className='about-item'>
          <CustomAccordion />
        </div>
      </div>
      <div className='myface'>
        <BackgoundImage style={{ left: '-410px' }} />
      </div>
    </>
  );
};
