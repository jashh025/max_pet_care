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
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current
      )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        () => {
          alert('Failed to send message');
        }
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

        <div>
          {/* LEFT SIDE */}
          <div>
            <div className="emailblock">
              <div>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p>Email</p>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:maxpetcare2015@gmail.com">
                  maxpetcare2015@gmail.com
                </a>
              </div>
            </div>

            <div className="addressBlock">
              <div>
                <i className="fas fa-map-marker-alt"></i>
              </div>
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
              <div>
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Phone</p>
                <p style={{ margin: '5px 0 0 0', color: '#555' }}>
                  Mon-Fri from 8am to 5pm.
                </p>
                <a href="tel:9952731063">
                  +91 9952731063
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="contact-right">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
