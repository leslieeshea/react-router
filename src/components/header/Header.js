import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Simple Color Routes</h1>
      <nav>
        <p><Link to="/red">Red</Link></p>
        <p><Link to="/blue">Blue</Link></p>
        <p><Link to="/yellow">Yellow</Link></p>
        <p><Link to="/%239583AB">Opulence Purple Pearl</Link></p>
      </nav>
    </header>
  );
}
