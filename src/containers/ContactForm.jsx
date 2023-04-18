import React, { useState } from 'react';
import './ContactForm.css'; // Import CSS file for styling
import ContactImg from '../assets/img/contact-form-hero.png'

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email) {
        alert('Please fill in all required fields.');
        return;
      }
    // Handle form submission
    // alert(`Thank you ${ firstName }! We'll Contact you soon.` );
    // Clear form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');


    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.innerHTML = `Thank you ${firstName}! We'll contact you soon.`;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 1500);

    // window.location = '/';
  };

  return (
    <div className="contact-form">
      <div className="contact-form__image">
        <img className='contact-img' src={ContactImg} alt="ContactImage" />
      </div>
      <div className="contact-form__form">
        <form onSubmit={handleSubmit}>
            <div className="first-last">
            <label className='first-n'>
                First Name*
                <input className='f-n' type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder='Eg. John' required/>
            </label>
            <br />
            <label className='last-n'>
                Last Name*
                <input className='l-n' type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder='Eg. Mehta' required/>
            </label>
            </div>
            {/* <br /> */}
            <label className='contact-email'>
                Email* <br />
                <input className='e-n' type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Eg. john@gmail.com' required/>
            </label>
            <br />
            <label className='contact-no'>
                Phone Number* <br />
                <input className='p-n' type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder='Eg. +93725 84753' required/>
            </label>
            <br />
            <label className='contact-msg'>
                What would you like to discuss <br />
                <textarea className='m-n' value={message} onChange={(event) => setMessage(event.target.value)} placeholder='Tell us about your team and provide some details about a project or process you would like
to track in Ybc' />
            </label>
            <br />
            <button className='shop-now' type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;