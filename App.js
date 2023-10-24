import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About'; // Import file About.js
import Contact from './pages/Contact'; // Import file Contact.js

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} /> {/* Gunakan 'About' sebagai komponen */}
        <Route path="/contact" element={<Contact />} /> {/* Gunakan 'Contact' sebagai komponen */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
