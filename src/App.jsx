import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import AI from './components/AI';
import Capabilities from './components/Capabilities';
import About from './components/About';
import Timeline from './components/Timeline';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  return (
    <main className="relative">
      <div className="noise-overlay" />
      <Hero />
      <Work />
      <AI />
      <Capabilities />
      <About />
      <Timeline />
      <CVSection />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future routes can be added here, e.g., /work, /ai, mapping to specific views or scrolling */}
      </Routes>
    </Router>
  );
}

export default App;
