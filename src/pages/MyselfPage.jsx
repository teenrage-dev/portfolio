import React from 'react';

import '../styles/components/_container.scss';
import './styles/_myselfPage.scss';

import AccentButton from '../components/AccentButton';
import BackgoundImage from '../components/BackgoundImage';
import MainTitle from '../components/MainTitle';
import MainText from '../components/MainText';

export const MyselfPage = () => {
  return (
    <>
      <div className='section'>
        <MainTitle />
        <MainText
          text={`Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed
          sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed
          aliquet neque at.`}
        />
        <p className='main-text'></p>
        <div className='wrapper-btn'>
          <AccentButton />
        </div>
      </div>
      <div className='myface'>
        <BackgoundImage />
      </div>
    </>
  );
};
