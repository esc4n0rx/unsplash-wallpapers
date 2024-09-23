// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Novidades</Link>
      <Link to="/mais-curtidos">Mais Curtidos</Link>
      <Link to="/categorias">Categorias</Link>
    </nav>
  );
};

export default Navbar;
