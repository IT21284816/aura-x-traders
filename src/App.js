// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router components
import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories'; // Import your Categories component
import About from './components/About'; // Import your About component
import Contact from './components/Contact'; // Import your Contact component
import Footer from './components/Footer';
import VehicleData from './components/vehicleData';


function App() {
  return (
    <Router> {/* Wrap your entire app in Router */}
      <div className="App">
        <Header />
        <Routes> {/* Define your Routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />          
          <Route path="/vehicles/:brand" element={<VehicleData />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
