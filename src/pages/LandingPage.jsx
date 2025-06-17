import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
      <h2>Welcome to Paradise Nursery</h2>
      <p>Your favorite place to find beautiful houseplants for every home.</p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  );
}

export default LandingPage;
