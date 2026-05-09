import React from 'react';
import './css/about.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

import dog from '../uploads/BC3B1332-4329-4525-9C82-2FE81904D34E.PNG';

const aboutData = [
  {
    icon: 'fa-house',
    text: 'Max Pet Care Madurai was founded with a simple goal — to create a boarding space where pets are cared for the way we would want our own pets to be treated.',
  },
  {
    icon: 'fa-calendar-days',
    text: 'The idea begins in 2015 when we faced a personal challenge with our Labrador, Max. During an emergency, we struggled to find a safe and comfortable place for him. After visiting multiple facilities and seeing pets confined without proper care, we decided to create a better alternative.',
  },
  {
    icon: 'fa-paw',
    text: 'Thats how Max Pet Care Madurai was born — as one of the first home-based pet boarding centers in Madurai, built on the belief that pets deserve freedom, comfort, and genuine care even when their owners are away.',
  },
  {
    icon: 'fa-award',
    text: 'With over 11 years of experience, we have handled 500+ dogs across 30+ breeds. Our approach focuses on understanding each pet individually and providing care that suits their needs.',
  },
  {
    icon: 'fa-solid fa-dove',
    text: 'We follow a cage-free, leash-free, home-based environment where pets can move freely and feel comfortable. We maintain a limited number of pets to ensure each one receives proper attention and care.',
  },
  {
    icon: 'fa-shield-dog',
    text: 'Pets are supervised at all times with continuous human presence and CCTV monitoring. Regular photo and video updates are shared with pet parents to keep them connected.',
  },
  {
    icon: 'fa-heart',
    text: 'Special attention is given to puppies and senior dogs to ensure they feel safe, comfortable, and well cared for throughout their stay.',
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <Header />

      <section className="hero-section">
        {/* <img
          src="https://i.ibb.co/sJmbPFTS/50-C6-E16-A-449-C-4895-9837-79-E8-A0-ED2-FC9.png"
          alt=""
          className="hero-bg-image"
        /> */}

        <img src={dog} alt="" className="hero-bg-image" />

        <div className="hero-overlay"></div>

        <div className="container">
          <div className="hero-content">
            <p className="about-tag">ABOUT US ♡</p>

            <h1>
              Max Pet Care
              <br />
              Madurai
            </h1>

            <p className="hero-text">Where pets are cared for like our own.</p>
          </div>
        </div>
      </section>

      <section className="whos-section">
        <div className="containers">
          <h2 className="whos-title">🐾 Who We Are 🐾</h2>
          <div className="timeline">
            <div className="timeline-line"></div>
            {aboutData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <div className="timeline-content">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <div className="container">
          <div className="bottom-card">
            <div className="bottom-content">
              <h3>
                A safe home away from home, filled with love, care and
                happiness.
              </h3>
            </div>

            <img
              src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="bottom-image"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
