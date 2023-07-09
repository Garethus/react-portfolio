import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setFormState({ ...formState, [e.target.name]: e.target.value });
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
