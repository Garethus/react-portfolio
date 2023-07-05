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
    <section>
      <h2>Get In Touch</h2>
      <p>If you believe in my passion in programming, I'm interested to be a part of building your applications that's
        attractive, engaging and adaptive.</p>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
