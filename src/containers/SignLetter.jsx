import React from 'react';
import './NewsletterSignUp.css';

function NewsletterSignUp() {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   // TODO: Submit email to server
  // }

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
  
    // Send email data to server
    fetch('/api/submit-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(response => {
      if (response.ok) {
        alert('Email submitted successfully!');
      } else {
        throw new Error('Error submitting email');
      }
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while submitting the email');
    });
  }

  return (
    <div className="newsletter-sign-up">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className='newsletter-head' htmlFor="email">Sign up for send Newsletter</label>
          <input className='newsletter-mail' type="email" id="email" name="email" placeholder="Enter your email" required />
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </div>
      </form>
      <button className="google-sign-in">
        <div className="google-icon-wrapper">
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
        </div>
      </button>
    </div>
  );
}

export default NewsletterSignUp;