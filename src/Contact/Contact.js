import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-form">
      <div className="contact-form__header">Contact Us</div>
      <div className="contact-form__info">
        <div className="contact-form__info-item">
          <div className="contact-form__info-item-header">Phone:</div>
          <div className="contact-form__info-item-value">7985689195</div>
        </div>
        <div className="contact-form__info-item">
          <div className="contact-form__info-item-header">Send Email:</div>
          <div className="contact-form__info-item-value">
            Startupway24@gmail.com
          </div>
        </div>
        <div className="contact-form__info-item">
          <div className="contact-form__info-item-header">Address:</div>
          <div className="contact-form__info-item-value">
            B-717, Gali Number 8, Pusta Number 1, Sonia Vihar, Delhi, 110094
          </div>
        </div>
      </div>
      <div className="contact-form__form">
        <div className="contact-form__form-header">Drop Us a Line</div>
        <form onSubmit={handleSubmit}>
          <div className="contact-form__form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form__form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form__form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form__form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-form__form-submit">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;