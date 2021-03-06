import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navigation';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Error404 from './pages/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

function App() {
  return (
    <>
      <Router>
        <div className="page-container">
          <div className="app">
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
