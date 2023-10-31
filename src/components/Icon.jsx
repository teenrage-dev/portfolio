import React from 'react';

import Icons from '../assets/sprite.svg';

export const Icon = ({ id, width, height, className }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={Icons + `#${id}`}></use>
    </svg>
  );
};
