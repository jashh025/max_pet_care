import React from 'react';
import './css/home.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

const Home = () => {
  return (
    <div className="home home_header">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>
            Safe & Loving Care for Your Pets
            <i className="fas fa-paw icon"></i>
          </h1>

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
            <h3>Feeding</h3>
            <p>Healthy meals on time based on your pet's needs.</p>
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
          <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16" />
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b" />
          <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a" />
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
