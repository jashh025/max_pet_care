import React from 'react';
import './css/gallery.css';
import Header from './layouts/header';
import Footer from './layouts/footer';

import dog1 from '../uploads/1ba36d16-1c12-4ec1-b526-e0efd4f52dc0.JPG';
import dog2 from '../uploads/2DB1BBBD-05F4-414C-9997-1D18DDE32A21.PNG';
import dog3 from '../uploads/9d222b5a-ebf4-45b9-b199-846ee949dde6.JPG';
import dog4 from '../uploads/50C6E16A-449C-4895-9837-79E8A0ED2FC9.PNG';
import dog5 from '../uploads/196DB322-C8F2-4A63-A26D-D0F2840138FA.PNG';
import dog6 from '../uploads/2016-05-12_11.47.02.jpg';
import dog7 from '../uploads/BC3B1332-4329-4525-9C82-2FE81904D34E.PNG';
import dog8 from '../uploads/C757D3CB-5016-48E9-8628-7B394CB4F2EB.PNG';
import dog9 from '../uploads/D820B446-EECC-4528-B9C8-F67EE6B7C604.PNG';
import dog10 from '../uploads/DCB1F509-384D-4F28-BA3F-205AAF9343B4.PNG';
import dog11 from '../uploads/DSC05468.JPG';
import dog12 from '../uploads/IMG_20160811_092944.jpg';
import dog13 from '../uploads/IMG_20180422_105812.JPG';
import dog14 from '../uploads/IMG_20190307_100421.jpg';

export default function Gallery() {
  const images = [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9, dog10, dog11, dog12, dog13, dog14];

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
