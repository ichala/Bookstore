import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Link to="/"> Books </Link>
      <Link to="/Categories"> Categories </Link>
    </>
  );
}

export default Navbar;
