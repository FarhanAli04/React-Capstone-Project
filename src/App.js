import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import { HeroSection } from './components/HeroSection/HeroSection';
import Banner from './components/HeroSection/Banner';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <HeaderSection />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Banner />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

