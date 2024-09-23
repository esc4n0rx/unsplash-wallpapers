import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Conteúdo principal */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categories />} />
        </Routes>

        {/* Navbar estilo dock */}
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
