import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 footer">
      <div className="footertext">
        {' '}
        <p>
          © {new Date().getFullYear()} Max Pet Care. All rights reserved.
        </p>{' '}
      </div>
    </footer>
  );
}
