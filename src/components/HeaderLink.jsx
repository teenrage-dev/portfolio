import React from 'react';

export default function HeaderLink({ icon, link }) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      {icon}
    </a>
  );
}
