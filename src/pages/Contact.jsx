import React from 'react';
import '../styles/Contact.css';

const contactDetails = [
  { icon: '📞', label: 'Phone', value: '+91 7249511729' },
  { icon: '📧', label: 'Email', value: 'admissions@globalscience.in' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat, 9 AM – 7 PM' },
];

const branches = [
  { name: 'Karmala (Main Hub)', address: 'MIDC Center, Sector 4, Karmala, Maharashtra' },
  { name: 'Wakad (Pune)', address: 'Sterling Heights, Wakad Highway, Pune' },
];

const Contact = () => {
  return (
    <div className="contact-page pt-32">
      <div className="container">
        <div className="contact-grid grid md:grid-cols-2 gap-20">

          {/* Left: Info */}
          <div className="contact-info animate">
            <div className="hero-badge">💬 We're Here to Help</div>
            <h1 className="gradient-text mb-6">Get in Touch</h1>
            <p className="text-muted mb-12" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Have questions about admissions or scholarship tests? Our expert counsellors
              are here to help you navigate your academic journey.
            </p>

            <div className="contact-cards space-y-4">
              {contactDetails.map((c, i) => (
                <div key={i} className="glass-card p-6 flex items-center gap-6">
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>{c.label}</h4>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="branches-list mt-12">
              <h3 className="mb-6" style={{ fontSize: '1.2rem' }}>Our Centers</h3>
              {branches.map((b, i) => (
                <div key={i} className="branch-item glass-card p-6 mb-4">
                  <h4>{b.name}</h4>
                  <p className="text-muted text-sm mt-1">{b.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper animate">
            <div className="glass-card p-10 form-container">
              <h2 className="text-center mb-8" style={{ fontSize: '1.75rem' }}>Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" placeholder="Your name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">School</label>
                    <input type="text" placeholder="School name" className="form-input" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Standard</label>
                    <select className="form-input">
                      <option value="">Select</option>
                      <option>10th</option>
                      <option>11th</option>
                      <option>12th</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Board</label>
                    <select className="form-input">
                      <option value="">Select</option>
                      <option>CBSE</option>
                      <option>State Board</option>
                      <option>ICSE</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Goals</label>
                  <textarea placeholder="Tell us about your goals and which exam you're targeting..." className="form-input"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full" style={{ padding: '1rem', fontSize: '1rem' }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
