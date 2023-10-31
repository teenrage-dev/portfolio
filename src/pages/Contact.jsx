import React from 'react';

import { ContactInfoContainer } from '../components/ContactInfoContainer';
import { ContactFormContainer } from '../components/ContactFormContainer';

import './styles/_contact.scss';

export const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='contact-container'>
        <ContactInfoContainer />
        <ContactFormContainer />
      </div>
    </div>
  );
};
