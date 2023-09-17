import React from 'react';

import '../styles/components/_container.scss';
import './styles/_myselfPage.scss';

import AccentButton from '../components/AccentButton';
import BackgoundImage from '../components/BackgoundImage';
import MainTitle from '../components/MainTitle';
import MainText from '../components/MainText';
import { myselfText } from '../constants';
import { ParticlesContainer } from '../components/ParticlesContainer';

export const MyselfPage = () => {
  return (
    <>
      <div className='section'>
        <MainTitle />
        <MainText text={myselfText} />
        <div className='wrapper-btn'>
          <AccentButton />
        </div>
      </div>
      <div className='myface'>
        <BackgoundImage />
      </div>
      <ParticlesContainer />
    </>
  );
};
