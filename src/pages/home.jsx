import React from 'react';
import './css/home.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

import dog1 from '../uploads/C757D3CB-5016-48E9-8628-7B394CB4F2EB.PNG';
import dog3 from '../uploads/2DB1BBBD-05F4-414C-9997-1D18DDE32A21.PNG';
import dog2 from '../uploads/BC3B1332-4329-4525-9C82-2FE81904D34E.PNG';

const Home = () => {
  return (
    <div className="home home_header">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>
            Safe, Cage-Free Home Boarding for Your Pets.
            <i className="fas fa-paw icon"></i>
          </h1>
          <p>Give your pet a comfortable, stress-free stay in a home-based environment while you are away. </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Book Now
            </a>
            <a href="#services" className="btn secondary">
              Explore
            </a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>

        <div className="service-cards">
          <div className="card">
            <i className="fas fa-dog service-icon"></i>
            <h3>Dog Boarding</h3>
            <p>Comfortable stay with full care & supervision.</p>
          </div>

          <div className="card">
            <i className="fas fa-bone service-icon"></i>
            <h3>Home Cooked Food</h3>
            <p>Customized healthy meals on time based on yout pet's need.</p>
          </div>

          <div className="card">
            <i className="fas fa-baseball-ball service-icon"></i>
            <h3>Play Time</h3>
            <p>Daily exercise & fun activities for happy pets.</p>
          </div>
        </div>
      </section>

      <section className="why">
        <h2>Why Choose Us?</h2>

        <div className="why-container">
          <div className="why-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Safe & Secure</h3>
            <p>Your pets are always in a protected environment.</p>
          </div>

          <div className="why-card">
            <i className="fas fa-broom"></i>
            <h3>Clean Space</h3>
            <p>Maintained hygiene for a healthy stay.</p>
          </div>

          <div className="why-card">
            <i className="fas fa-paw"></i>
            <h3>Pet Friendly</h3>
            <p>Comfortable and stress-free environment.</p>
          </div>

          <div className="why-card">
            <i className="fas fa-hand-holding-heart"></i>
            <h3>Friendly Care</h3>
            <p>Handled with love and attention.</p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2>
          Happy Moments
          <i className="fas fa-paw icon"></i>
        </h2>

        <div className="gallery-grid">
            <img src={dog1} alt="Happy Dog 1" />
            <img src={dog2} alt="Happy Dog 2" />
            <img src={dog3} alt="Happy Dog 3" />
        </div>
      </section>

      <section className="cta">
        <h2>
          Book Your Pet's Stay Today
          <i className="fas fa-dog icon"></i>
        </h2>

        <div className="cta-buttons">
          <a href="tel:9952731063" className="btn secondary">
            <i className="fas fa-phone-alt"></i> Call Us
          </a>

          <a
            href="https://wa.me/9952731063"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            <i className="fab fa-whatsapp"></i> Message Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
