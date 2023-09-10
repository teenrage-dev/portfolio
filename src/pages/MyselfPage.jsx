import React from 'react';

import '../styles/components/_container.scss';
import './styles/_myselfPage.scss';
import myFaceImage from '../assets/images/my-face.png';
import { ReactComponent as BackgroundFace } from '../assets/images/backgorund-face.svg';
import AccentButton from '../components/AccentButton';

export const MyselfPage = () => {
  return (
    <>
      <div className='section'>
        <h1 className='main-title'>
          Lorem ipsum dolor sit
          <br />
          <span className='main-title-field'>amet consectetur!</span>
        </h1>
        <p className='main-text'>
          Lorem ipsum dolor sit amet consectetur. Proin nunc sagittis diam sed
          sit. Auctor ullamcorper ultricies suscipit commodo volutpat sed
          aliquet neque at.
        </p>

        <div className='wrapper-btn'>
          <AccentButton />
        </div>
      </div>
      <div className='myface'>
        <div className='background-container'>
          <BackgroundFace />
          <img
            src={myFaceImage}
            alt='BackgroundImage'
            className='background-image'
          />
        </div>
      </div>
    </>
  );
};
