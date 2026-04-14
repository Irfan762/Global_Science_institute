import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
import '../styles/ASAT.css';

const benefits = [
  { icon: '🎓', title: 'Up to 100% Scholarship', desc: 'Top scorers receive full fee waivers for JEE & NEET coaching.' },
  { icon: '📋', title: 'Instant Admission', desc: 'ASAT rank directly qualifies you for admission to Global Science Institute.' },
  { icon: '🏆', title: 'Merit Recognition', desc: 'Top 10 rankers receive certificates and special mentorship programs.' },
];

const ASAT = () => {
  return (
    <div className="asat-page pt-32">
      <div className="container">

        {/* Header */}
        <header className="text-center mb-16 animate">
          <div className="hero-badge">🎯 Scholarship Cum Admission Test</div>
          <h1 className="gradient-text mb-4">ASAT 2026</h1>
          <p className="text-muted mt-4 max-w-2xl mx-auto" style={{ fontSize: '1.05rem' }}>
            Take the first step towards a brilliant scientific career.
            Secure up to <strong style={{ color: 'var(--primary)' }}>100% scholarship</strong> for JEE and NEET coaching at Global Science Institute.
          </p>
        </header>

        {/* Benefits */}
        <div className="asat-benefits reveal">
          {benefits.map((b, i) => (
            <div key={i} className="glass-card asat-benefit-card">
              <div className="asat-benefit-icon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p className="text-muted text-sm mt-2">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <section className="asat-form-section reveal">
          <div className="glass-card p-12">
            <h2 className="text-center mb-10">Register for ASAT 2026</h2>
            <form className="asat-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input type="text" placeholder="Enter your full name" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">WhatsApp Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">School Name *</label>
                <input type="text" placeholder="Your school name" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Standard *</label>
                <select className="form-input" required>
                  <option value="">Select Standard</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                  <option>11th</option>
                  <option>12th</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Board *</label>
                <select className="form-input" required>
                  <option value="">Select Board</option>
                  <option>CBSE</option>
                  <option>State Board</option>
                  <option>ICSE</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Village / City *</label>
                <input type="text" placeholder="Your city or village" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Taluka / District *</label>
                <input type="text" placeholder="Taluka / District" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Category *</label>
                <select className="form-input" required>
                  <option value="">Select Category</option>
                  <option>General</option>
                  <option>OBC</option>
                  <option>SC/ST</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Exam Slot *</label>
                <select className="form-input" required>
                  <option value="">Select Slot</option>
                  <option>Morning (10:00 AM)</option>
                  <option>Afternoon (02:00 PM)</option>
                </select>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn-primary">
                  Confirm Registration →
                </button>
                <p className="text-muted text-xs mt-4">
                  By registering, you agree to be contacted by our counselling team.
                </p>
              </div>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ASAT;
