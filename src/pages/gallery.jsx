import React from 'react';
import './css/gallery.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

import dog1 from '../uploads/1ba36d16-1c12-4ec1-b526-e0efd4f52dc0.JPG';
import dog2 from '../uploads/2DB1BBBD-05F4-414C-9997-1D18DDE32A21.PNG';
import dog3 from '../uploads/9d222b5a-ebf4-45b9-b199-846ee949dde6.JPG';
import dog4 from '../uploads/50C6E16A-449C-4895-9837-79E8A0ED2FC9.PNG';

export default function Gallery() {
  const images = [dog1, dog2, dog3, dog4];

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
              <img src={img} alt={`dog-${index}`} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
