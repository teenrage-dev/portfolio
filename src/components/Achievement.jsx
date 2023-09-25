import React from 'react';
import CountUp from 'react-countup';

import '../styles/components/_achievement.scss';

const achivments = [
  {
    title: 'years of experience',
    value: 10,
  },
  {
    title: 'satisfied clients',
    value: 250,
  },
  {
    title: 'finished projects',
    value: 648,
  },
  {
    title: 'winning awards',
    value: 8,
  },
];

export const Achievement = () => {
  return (
    <div className='achievement-container'>
      <ul className='achievement-list'>
        {achivments.map((item) => (
          <li key={item.title} className='achievement-item'>
            <CountUp
              end={item.value}
              duration={5}
              className='achievement-item-title'
              suffix='+'
            />{' '}
            <p className='achievement-item-text'>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
