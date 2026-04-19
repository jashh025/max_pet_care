import React from 'react';
import { HashRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Header from './pages/layouts/header';
// import Footer from './pages/layouts/footer';

import Home from './pages/home';
import Services from './pages/services';
import About from './pages/aboutus';
import Gallery from './pages/gallery';
import Contact from './pages/contact';

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
``;
