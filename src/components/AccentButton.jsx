import React from 'react';
import '../styles/components/_accentButton.scss';

export default function AccentButton({ onClick }) {
  return (
    <button className='accent-btn' type='button' onClick={() => onClick()}>
      My projects
    </button>
  );
}
