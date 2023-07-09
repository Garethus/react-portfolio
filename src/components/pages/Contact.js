import React, { useState } from 'react';
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className='py-3'>
      <h3>Get In Touch</h3>
      <p>If you believe in my passion in programming, I'm interested to be a part of building your applications that's
        attractive, engaging and adaptive.</p>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="email" className="form-label">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        {errorMessage && (
          <div>
            <p className='text-danger'>{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
