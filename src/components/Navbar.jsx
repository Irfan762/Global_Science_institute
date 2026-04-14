import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

import logoImg from '../assets/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/results', label: 'Results' },
    { to: '/asat', label: 'ASAT' },
    { to: '/register', label: 'Register' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Global Science Institute" className="logo-img" />
            <span className="logo-text">
              <span className="logo-accent">Global</span> Science Institute
            </span>
          </Link>

          <div className="nav-links">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `nav-tag${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link to="/asat" className="btn-primary-nav">Free Counselling</Link>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <Link to="/" className="mobile-logo" onClick={() => setMenuOpen(false)}>
          <img src={logoImg} alt="Global Science Institute" className="logo-img-lg" />
        </Link>
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `mobile-nav-tag${isActive ? ' active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/asat" className="mobile-cta">Free Counselling</Link>
      </div>
    </>
  );
};

export default Navbar;
