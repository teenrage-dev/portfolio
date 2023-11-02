import React from 'react';
import '../styles/components/_accentButton.scss';

export default function AccentButton({ onClick, text, styles }) {
  return (
    <button
      className='accent-btn'
      type='button'
      onClick={() => onClick()}
      style={styles}
    >
      {text}
    </button>
  );
}
