import React from 'react';

import '../styles/components/_mainTitle.scss';

export default function MainTitle({
  titleText,
  titleFieldText,
  isNewLine = true,
  style = {},
}) {
  return (
    <h1 className='main-title' style={style}>
      {titleText}
      {isNewLine && <br />}
      <span className='main-title-field'>{titleFieldText}</span>
    </h1>
  );
}
