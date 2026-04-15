import React from 'react';
import './css/gallery.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    'https://images.unsplash.com/photo-1558788353-f76d92427f16',
    'https://images.unsplash.com/photo-1507149833265-60c372daea22',
    'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8',
    'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6',
    'https://images.unsplash.com/photo-1525253086316-d0c936c814f8',
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
    'https://images.unsplash.com/photo-1574158622682-e40e69881006',
  ];

  return (
    <div>
      <Header />

      <div className="gallery-container">
        <h1 className="title">
          <i className="fas fa-paw icon"></i>
          Our Happy Dogs Gallery
        </h1>
        <p className="subtitle">
          Moments of love, play & care at our dog hostel
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt="dog" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
