import React from 'react';

import MainTitle from './MainTitle';
import AccentButton from './AccentButton';

import '../styles/components/_contactFormContainer.scss';

export const ContactFormContainer = () => {
  return (
    <div className='contact-form-container'>
      <MainTitle
        titleText={'Contact'}
        titleFieldText={' me'}
        isNewLine={false}
        style={{ 'margin-bottom': '10px', 'text-align': 'center' }}
      />

      <form className='contact-form-form'>
        <input
          type='text'
          name='fullname'
          id='fullname'
          className='contact-form-field'
          placeholder='Your full name'
        />
        <input
          type='email'
          name='email'
          id='email'
          className='contact-form-field'
          placeholder='Your Email'
        />
        <textarea
          name='message'
          id='message'
          cols='30'
          rows='10'
          className='contact-form-field'
          placeholder='Your Message'
        ></textarea>
        <AccentButton
          onClick={() => {
            console.log('Send Email');
          }}
          text={'Send message'}
          styles={{ width: 'fit-content' }}
        />
      </form>
    </div>
  );
};
