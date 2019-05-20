import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <p><Link to="/red">Red</Link></p>
        <p><Link to="/blue">Blue</Link></p>
        <p><Link to="/yellow">Yellow</Link></p>
      </nav>
    </header>
  );
}
