import React from 'react';
import emailjs from '@emailjs/browser';

import MainTitle from './MainTitle';
import AccentButton from './AccentButton';
import { Input } from './Input';
import { successNotification, errorNotification } from '../utils/index';

import '../styles/components/_contactFormContainer.scss';

export const ContactFormContainer = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    successNotification('Повідомлення відправлено ✉️');

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then((res) => {
        if (res.status === 200 || res.text === 'OK') {
          successNotification('Повідомлення відправлено ✉️');
        }
      })
      .catch((err) => {
        errorNotification('Помилка 🙄');
      });
  };

  return (
    <div className='contact-form-container'>
      <MainTitle
        titleText={'Contact'}
        titleFieldText={' me'}
        isNewLine={false}
        style={{ marginBottom: '10px', textAlign: 'center' }}
      />

      <form className='contact-form-form' onSubmit={sendEmail}>
        <Input
          type={'text'}
          id={'fullname'}
          name={'fullname'}
          className={'contact-form-field'}
          placeholder={'Your full name'}
        />{' '}
        <Input
          type={'email'}
          id={'email'}
          name={'email'}
          className={'contact-form-field'}
          placeholder={'Your email'}
          isRequired={true}
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
          text={'Send message'}
          styles={{ width: 'fit-content' }}
          type={'submit'}
        />
      </form>
    </div>
  );
};
