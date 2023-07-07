import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ttsd009', 'template_32eatfa', form.current, 'fkiFAFONHh8zWxKHe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div id="contact" className="contact-wrapper">
      <div className="contact-header">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>amalcpaulson@gmail.com</h5>
            <a href="mailto:amalcpaulson@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaTelegramPlane className="contact_option_icon" />
            <h4>Telegram</h4>
            <h5>@amalcpaulson</h5>
            <a href="https://t.me/amalcpaulson" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+91 7994043754</h5>
            <a href="https://wa.me/+917994043754" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email ID"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="formbtn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
