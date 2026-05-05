import React from 'react';
import './css/services.css';
import Header from './layouts/header';
import Footer from './layouts/footer';
import FAQ from "./FAQ";

function Services() {
  return (
    <>
      <Header />

      <section className="services-page">

        <div className="services-header">
          <h1>Our Services</h1>
          <p>Comfortable, Safe & Personalized Care for Every Pet</p>
        </div>

        <div className="services-container">

          <div className="service-card">
            <img src="/uploads/pet-boarding-home.jpg" alt="Pet Boarding" />
            <h3>Home-Style Pet Boarding</h3>
            <p>
              At Max Pet Care Madurai, we provide a calm, home-based boarding experience 
              designed around your pet’s comfort, routine, and behavior.
            </p>
          </div>

          <div className="service-card">
            <img src="/uploads/premium-room.jpg" alt="Premium Boarding" />
            <h3>🐾 Boarding Options</h3>
            <p>
              <strong>Premium Room</strong><br />
              Ideal for regular stays with safe supervision.<br /><br />

              <strong>Deluxe Room</strong><br />
              Extra space and comfort for relaxed stays.<br /><br />

              <strong>Priority Care</strong><br />
              Dedicated attention for puppies & senior pets.<br /><br />

              <strong>AC Rooms</strong><br />
              Air-conditioned comfort during hot weather.
            </p>
          </div>

          <div className="service-card">
            <img src="/uploads/pet-care-daily.jpg" alt="Daily Care" />
            <h3>Daily Care Routine</h3>
            <p>
              Every stay includes structured daily care to keep your pet active,
              happy, and stress-free.
              <br /><br />
              • Regular feeding as per your instructions<br />
              • Morning & night walks<br />
              • Supervised playtime<br />
              • Clean & hygienic environment<br />
              • 24/7 monitoring & supervision
            </p>
          </div>

          <div className="service-card">
            <img src="/uploads/custom-pet-care.jpg" alt="Customized Care" />
            <h3>Personalized Care</h3>
            <p>
              We adapt completely to your pet’s lifestyle:
              <br /><br />
              • Feeding schedule<br />
              • Walking habits<br />
              • Activity levels
              <br /><br />
              Everything is handled exactly as per your instructions.
            </p>
          </div>

          <div className="service-card">
            <img src="/uploads/puppy-senior-care.jpg" alt="Special Care" />
            <h3>Special Care Support</h3>
            <p>
              Extra attention is given to pets that need it most:
              <br /><br />
              • Puppies – safe & separate space<br />
              • Senior dogs – gentle handling & comfort care
            </p>
          </div>

          <div className="service-card">
            <img src="/uploads/pet-transport.jpg" alt="Pickup Drop" />
            <h3>Additional Services</h3>
            <p>
              • Pickup & Drop (on request)<br />
              • Grooming services (prior booking required)
            </p>
          </div>

          <div className="service-card">
            <img src="/uploads/pet-food.jpg" alt="Food Policy" />
            <h3>Food Policy</h3>
            <p>
              We recommend owner-provided food to maintain consistency.
              <br /><br />
              Feeding is done strictly based on your instructions to ensure
              your pet’s comfort and digestion.
            </p>
          </div>

          <div className="service-card">
            <img src="/uploads/pet-policy.jpg" alt="Admission Policy" />
            <h3>Admission Guidelines</h3>
            <p>
              • Only healthy & friendly pets are accepted<br />
              • Aggressive pets require trial boarding before confirmation
            </p>
          </div>

        </div>

      </section>

      <FAQ />

      {/* ✅ CTA Section Added (no other changes) */}
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
    </>
  );
}

export default Services;