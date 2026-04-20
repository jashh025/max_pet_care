import React, { useRef } from 'react';
import './css/contact.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    window.emailjs
      .sendForm(
        'service_rbn9aqa',
        'template_4sgnqib',
        formRef.current
      )
      .then(
        () => alert('Message sent successfully!'),
        () => alert('Failed to send message')
      );

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <Header />

      <div className="contactpage">
        <p>Contact us</p>
        <h1>Get in touch</h1>
        <p>Our friendly team would love to hear from you.</p>

        {/* GRID WRAPPER */}
        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <div className="emailblock">
              <div><i className="fas fa-envelope"></i></div>
              <div>
                <p>Email</p>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:maxpetcare2015@gmail.com">
                  maxpetcare2015@gmail.com
                </a>
              </div>
            </div>

            <div className="addressBlock">
              <div><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <p>Office</p>
                <p>Come say hello at our office HQ.</p>
                <a>
                  PLOT No 38 <br />
                  LVB NAGAR <br />
                  ANBU NAGAR EXTN KADACHANENTHAL <br />
                  MADURAI 625107
                </a>
              </div>
            </div>

            <div className="phoneBlock">
              <div><i className="fas fa-phone"></i></div>
              <div>
                <p>Phone</p>
                <p>Mon-Fri from 8am to 5pm.</p>
                <a href="tel:9952731063">
                  +91 9952731063
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="contact-right">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required />
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* MAP BOTTOM */}
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4713885372025!2d78.16994707393452!3d9.977864273417465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c6939dcffaf5%3A0x4bdd7eb8ed940a90!2sMAX%20PET%20CARE%20MADURAI"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
