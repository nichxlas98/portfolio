import { Helmet } from 'react-helmet';
import InquiryComponent from './InquiryComponent';
import './css/inquiry.css';
import './css/App.css';
import './css/main.css';
import './css/colors.css';
import './css/nav.css';
import './css/anims.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';


function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Inquiry:', inquiry);

    const url = "https://discordapp.com/api/webhooks/1093536885743292496/TtnVUgKO7Ww4ZL7owntOrMLzF5yw6GTCI7fbPV9k6YYrHm28pE5y8oVoXsZFQ80QtfqS";
    const webhook = require("webhook-discord");
  
    const Hook = new webhook.Webhook(url);
    
    const msg = new webhook.MessageBuilder()
                    .setName("Inquiries (Webhook)")
                    .setFooter("Contact: " + email)
                    .setAuthor('From: "' + name + '"')
                    .setColor("#aabbcc")
                    .setDescription(inquiry);
    Hook.send(msg);
  }

  return (
    <>
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      </Helmet>
    </div>
    
    <div className="topnav">
      <li>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link className="active" to="/inquiries">Contact</Link>
      </li>
    </div>
    <section className="dark">  
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1 style={{ textAlign: 'center', color:"rgb(255, 255, 255)" }}>Inquiry Submission</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name" style= {{ color: "rgb(255, 255, 255)" }}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />

        <label htmlFor="email" style= {{ color: "rgb(255, 255, 255)" }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />

        <label htmlFor="inquiry" style= {{ color: "rgb(255, 255, 255)" }}>Inquiry:</label>
        <textarea
          id="inquiry"
          name="inquiry"
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          required
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
      </section>
      </>
  );
}

export default ContactForm;