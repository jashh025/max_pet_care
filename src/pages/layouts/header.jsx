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

        {/* LOGO */}
        <Link to="/" className="logo-container">
          <img
            src="https://i.ibb.co/8DYyJ8fp/Max-logo-1-1.png"
            alt="MaxPetCare logo"
            className="logo-img"
          />
          <span className="logo-text">Max Pet Care</span>
        </Link>

        {/* NAV */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>

          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

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

        {/* HAMBURGER */}
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
