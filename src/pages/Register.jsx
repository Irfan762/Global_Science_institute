import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

const benefits = [
  'Personalized mentorship for every student',
  'Access to exclusive study materials & testing hub',
  'Weekly doubt-clearing sessions with expert faculty',
  'AI-driven performance tracking & analytics',
];

const Register = () => {
  return (
    <div className="register-page pt-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left: Info */}
          <div className="register-info animate">
            <div className="hero-badge">🚀 Admissions Open 2025–26</div>
            <h1 className="gradient-text mb-6">Start Your Journey</h1>
            <p className="text-muted mb-8" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Join Global Science Institute and experience education that goes beyond textbooks —
              where every student is guided to their peak potential.
            </p>

            <ul className="benefits-list space-y-4 mb-10">
              {benefits.map((b, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <span className="logo-accent" style={{ fontSize: '1.1rem', flexShrink: 0 }}>✔</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{b}</span>
                </li>
              ))}
            </ul>

            <div className="events-box glass-card p-10">
              <h3 className="mb-6" style={{ fontSize: '1.2rem' }}>Upcoming Events</h3>
              <div className="event-item mb-4 border-l-2 border-primary pl-4">
                <h5>Practical Workshop 2025</h5>
                <p className="text-xs text-muted mt-1">Oct 20, 2025 · Karmala Campus</p>
              </div>
              <div className="event-item border-l-2 border-primary pl-4">
                <h5>ASAT Exam Round 1</h5>
                <p className="text-xs text-muted mt-1">Nov 05, 2025 · All Centers</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="register-form animate">
            <div className="glass-card p-10">
              <h2 className="mb-8 text-center" style={{ fontSize: '1.75rem' }}>Admission Form</h2>
              <form className="space-y-6">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" placeholder="Enter your full name" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label">School Name *</label>
                  <input type="text" placeholder="Your school name" className="form-input" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Standard</label>
                    <select className="form-input">
                      <option value="">Select</option>
                      <option>11th</option>
                      <option>12th</option>
                      <option>Repeater</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Stream</label>
                    <select className="form-input">
                      <option value="">Select</option>
                      <option>PCB (Medical)</option>
                      <option>PCM (Engineering)</option>
                      <option>PCMB (Both)</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp Number *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="form-input" required />
                </div>
                <button type="submit" className="btn-primary w-full" style={{ padding: '1rem', fontSize: '1rem' }}>
                  Request Admission →
                </button>
                <p className="text-center text-xs text-muted">
                  Or{' '}
                  <Link to="/asat" style={{ color: 'var(--primary)' }}>
                    register for ASAT
                  </Link>{' '}
                  to earn a scholarship
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
