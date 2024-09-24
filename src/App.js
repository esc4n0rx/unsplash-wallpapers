import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import EmConstrucao from './pages/EmConstrucao'; // Importar a nova página
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/em-construcao" element={<EmConstrucao />} /> 
        </Routes>

        <Navbar />
      </div>
    </Router>
  );
};

export default App;
