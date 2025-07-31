import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisionPage from './pages/VisionPage';
import AcademicPage from './pages/AcademicPage';
import ContactPage from './pages/ContactPage';
import CampusPage from './pages/CampusPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/academics" element={<AcademicPage />} />
        <Route path="/campus" element={<CampusPage />} /> 
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;