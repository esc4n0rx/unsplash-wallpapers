import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaThList, FaTools } from 'react-icons/fa'; // Ícone de ferramentas para "em construção"
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <FaHome size={24} /> {/* Ícone para "Home" */}
      </Link>
      <Link to="/categorias">
        <FaThList size={24} /> {/* Ícone para "Categorias" */}
      </Link>
      <Link to="/em-construcao">
        <FaTools size={24} /> {/* Ícone para "Em construção" */}
      </Link>
    </nav>
  );
};

export default Navbar;
