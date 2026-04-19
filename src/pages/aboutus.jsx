import React from 'react';
import './css/about.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

function AboutUs() {
  return (
    <section className="about-page">

      {/* Title Section */}
      <div className="about-header">
        <h1>About Max Pet Care Madurai</h1>
        <p>Where pets are cared for like our own</p>
      </div>

      {/* About Section */}
      <div className="about-container">

        <div className="about-image">
          <video width="100%" controls>
            <source src="/uploads/about-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>

          <p>
            Max Pet Care Madurai was founded with a simple goal — to create a boarding space where pets are cared for the way we would want our own pets to be treated.
          </p>

          <p>
            The idea began in 2015 when we faced a personal challenge with our Labrador, Max. During an emergency, we struggled to find a safe and comfortable place for him. After visiting multiple facilities and seeing pets confined without proper care, we decided to create a better alternative.
          </p>

          <p>
            That’s how Max Pet Care Madurai was born — as one of the first home-based pet boarding centers in Madurai, built on the belief that pets deserve freedom, comfort, and genuine care even when their owners are away.
          </p>

          <p>
            With over 11 years of experience, we have handled 500+ dogs across 30+ breeds. Our approach focuses on understanding each pet individually and providing care that suits their needs.
          </p>

          <p>
            We follow a cage-free, leash-free, home-based environment where pets can move freely and feel comfortable. We maintain a limited number of pets to ensure each one receives proper attention and care.
          </p>

          <p>
            Pets are supervised at all times with continuous human presence and CCTV monitoring. Regular photo and video updates are shared with pet parents to keep them connected.
          </p>

          <p>
            Special attention is given to puppies and senior dogs to ensure they feel safe, comfortable, and well cared for throughout their stay.
          </p>

          <p>
            At Max Pet Care Madurai, your pet is not just boarded — they are cared for like our own.
          </p>
        </div>

      </div>

      
    </section>
  );
}

export default AboutUs;