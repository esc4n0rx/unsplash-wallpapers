import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire, FaStar, FaThList } from 'react-icons/fa'; // Ícones do react-icons
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/novidades">
        <FaFire size={24} /> {/* Ícone para "Novidades" */}
      </Link>
      <Link to="/categorias">
        <FaThList size={24} /> {/* Ícone para "Categorias" */}
      </Link>
      <Link to="/em-alta">
        <FaStar size={24} /> {/* Ícone para "Em Alta" */}
      </Link>
    </nav>
  );
};

export default Navbar;
