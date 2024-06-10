// components/ContactForm.js
import React from 'react';
import "./contatoForm.css"
import Link from 'next/link';
import CustomImage from '../customImage/CustomImage';
export default function ContactForm(){
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Entre em contato conosco!</h2>
      <p className="contact-form__description">
        Preencha o formulário ou nos envie diretamente pelas redes sociais, entraremos em contato assim que possível.
      </p>
      <form className='contact-form__form'>
        <input
          type="text"
          name="firstName"
          placeholder="Nome"
          className="contact-form__input"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          className="contact-form__input"
          required
        />
        <textarea
          name="message"
          placeholder="Escreva sua mensagem aqui :)"
          className="contact-form__textarea"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="contact-form__button">Enviar</button>
      </form>
      <div className="contact-form__social">
        <Link target='_blank' href="https://www.instagram.com/cbheavenshair/"><CustomImage src="/icon/instagram.png"/></Link>
        <Link target='_blank' href="https://www.instagram.com/cbheavenshair/"><CustomImage src="/icon/facebook.png"/></Link>
        <Link target='_blank' href="mailto:cbeheavenshair@gmail.com"><CustomImage src="/icon/email.png"/></Link>
      </div>
    </div>
  );
};
