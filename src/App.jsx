import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Results from './pages/Results';
import ASAT from './pages/ASAT';

// Scroll to top + re-trigger reveal on every route change
const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Re-observe reveal elements after route change
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      elements.forEach((el) => {
        el.classList.remove('visible');
        observer.observe(el);
      });
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollReveal />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/results" element={<Results />} />
            <Route path="/asat" element={<ASAT />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
