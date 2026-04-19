import React from 'react';
import './css/services.css';
import Header from './layouts/header';
import Footer from './layouts/footer';
import FAQ from "./FAQ";

function Services() {
  return (
    <>
      <section className="services-page">

        <div className="services-header">
          <h1>Our Services</h1>
          <p>Professional and loving care services for your dogs</p>
        </div>

        <div className="services-container">

          <div className="service-card">
            <img src="/uploads/dog boarding.jpg" alt="Dog Boarding" />
            <h3>Dog Boarding</h3>
            <p>Safe and comfortable overnight stay with 24/7 supervision and care.</p>
          </div>

          <div className="service-card">
            <img src="/uploads/dog day care.jpg" alt="Dog Day Care" />
            <h3>Dog Day Care</h3>
            <p>A fun and secure place where your dog can play and stay active.</p>
          </div>

          <div className="service-card">
            <img src="/uploads/dog walking.jpg" alt="Dog Walking" />
            <h3>Dog Walking</h3>
            <p>Daily walking service to keep your dog healthy and energetic.</p>
          </div>

          <div className="service-card">
            <img src="/uploads/dog grooming.jpg" alt="Pet Grooming" />
            <h3>Pet Grooming</h3>
            <p>Professional grooming including bathing, nail trimming and coat care.</p>
          </div>

          <div className="service-card">
            <img src="/uploads/dog training.jpg" alt="Dog Training" />
            <h3>Dog Training</h3>
            <p>Basic obedience and behavior training by experienced trainers.</p>
          </div>

          <div className="service-card">
            <img src="/uploads/dog pickup.jpg" alt="Pickup and Drop Service" />
            <h3>Pickup & Drop</h3>
            <p>Safe and convenient pickup and drop service anytime.</p>
          </div>

        </div>

      </section>

      {/* FAQ below services page */}
      <FAQ />
 <Footer />
    </>
  );
}

export default Services;
