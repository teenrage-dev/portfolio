import React from 'react';
import '../styles/components/_accentButton.scss';

export default function AccentButton({
  onClick = () => {},
  text,
  styles,
  type = 'button',
}) {
  return (
    <button
      className='accent-btn'
      type={type}
      onClick={() => onClick()}
      style={styles}
    >
      {text}
    </button>
  );
}
