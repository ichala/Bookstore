import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="header bg-white p-3 d-flex align-items-center mb-4">
        <h1 className="header-text d-inline-block">BookStore CMS</h1>
        <Link to="/" className=" link">BOOKS</Link>
        <Link to="/categories" className="link">CATEGORIES</Link>
      </header>
    </>
  );
}

export default Navbar;
