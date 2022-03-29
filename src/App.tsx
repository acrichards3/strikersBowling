import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navigation';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
