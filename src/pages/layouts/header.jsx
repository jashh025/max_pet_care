import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo-container">
          <img
            src="https://i.ibb.co/8DYyJ8fp/Max-logo-1-1.png"
            alt="MaxPetCare logo"
            className="logo-img"
          />
          <span className="logo-text">Max Pet Care</span>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
          <a href="/aboutus" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <div className="mobile-buttons">
            <a href="tel:+919952731063" className="call-btn">
              <i className="fas fa-phone-alt"></i> Call
            </a>
            <a
              href="https://wa.me/9952731063"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </nav>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
