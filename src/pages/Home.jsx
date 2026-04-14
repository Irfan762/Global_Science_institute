import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import heroImg from '../assets/hero.jpg';

const toppers = [
  { name: 'Shifa', score: '97.20%', city: 'Karmala', exam: 'JEE Mains', initial: 'S' },
  { name: 'Trupti', score: '95.60%', city: 'Pune', exam: 'NEET', initial: 'T' },
  { name: 'Om', score: '93.60%', city: 'Satara', exam: 'MHT-CET', initial: 'O' },
  { name: 'Aryan', score: '98.40%', city: 'Wakad', exam: 'JEE Mains', initial: 'A' },
  { name: 'Suhani', score: '96.80%', city: 'Rahatani', exam: 'NEET', initial: 'S' },
];

const courses = [
  {
    title: 'JEE Mains & Advanced',
    desc: 'Comprehensive coaching for IIT aspirants with structured modules, mock tests, and expert mentorship.',
    tags: ['Engineering', 'IIT-JEE'],
    icon: '⚙️',
    color: 'var(--primary)',
  },
  {
    title: 'NEET Preparation',
    desc: 'Expert medical entrance coaching focusing on PCB with individual attention and biology deep-dives.',
    tags: ['Medical', 'Doctor'],
    icon: '🧬',
    color: 'var(--secondary)',
  },
  {
    title: 'MHT-CET',
    desc: 'Score high in the Maharashtra state entrance test with regular guidance and state-specific strategy.',
    tags: ['State Level', 'Professional'],
    icon: '📐',
    color: '#f43f5e',
  },
];

const features = [
  { icon: '🎓', title: 'Expert Faculty', desc: 'Learn from IIT/AIIMS alumni with years of competitive exam coaching experience.' },
  { icon: '🧪', title: 'Digital Labs', desc: 'Modern classrooms with digital visualization tools for complex science concepts.' },
  { icon: '📊', title: 'Chapterwise Tests', desc: 'Regular performance analysis through rigorous chapter-level testing modules.' },
  { icon: '🧘', title: 'Individual Care', desc: 'Limited batch sizes ensure every student gets the personal attention they deserve.' },
];

const stats = [
  { value: '5k+', label: 'Students Mentored' },
  { value: '98.4%', label: 'Success Rate' },
  { value: '90+', label: 'Expert Faculty' },
  { value: '12', label: 'Excellence Hubs' },
];

const Home = () => {
  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.7) 0%, rgba(2,6,23,0.95) 100%), url(${heroImg})`,
        }}
      >
        <div className="hero-glow" />
        <div className="container hero-content animate">
          <div className="hero-badge">🏆 Excellence in Science &amp; Technology</div>
          <h1 className="gradient-text">
            Mastering Science.<br />
            <span>Innovating Life.</span>
          </h1>
          <p>
            Global Science Institute is the premier hub for JEE, NEET, and MHT-CET coaching —
            blending elite pedagogy with digital innovation to produce India's top rankers.
          </p>
          <div className="hero-btns">
            <Link to="/asat" className="btn-primary">Register for ASAT →</Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>

        {/* Floating stats bar */}
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats-inner">
              {stats.map((s, i) => (
                <div key={i} className="hero-stat">
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPPERS ── */}
      <section className="toppers-section reveal">
        <div className="container">
          <div className="flex-between mb-12">
            <h2 className="section-title">
              Our Elite <span className="logo-accent">Performers</span>
            </h2>
            <Link to="/results" className="btn-link">View All Results →</Link>
          </div>
          <div className="toppers-grid">
            {toppers.map((t, idx) => (
              <div key={idx} className="glass-card topper-card">
                <div className="topper-rank">#{idx + 1}</div>
                <div className="topper-avatar">
                  <span>{t.initial}</span>
                </div>
                <h3>{t.name}</h3>
                <p className="topper-city">{t.city}</p>
                <div className="topper-exam">{t.exam}</div>
                <div className="topper-score">{t.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="courses-section bg-dark-soft reveal">
        <div className="container">
          <div className="flex-between mb-12">
            <h2 className="section-title">
              Explore Our <span className="logo-accent">Courses</span>
            </h2>
            <Link to="/register" className="btn-link">Enroll Now →</Link>
          </div>
          <div className="courses-grid">
            {courses.map((c, idx) => (
              <div key={idx} className="glass-card course-card">
                <div className="course-icon" style={{ background: `${c.color}18`, border: `1px solid ${c.color}33` }}>
                  <span>{c.icon}</span>
                </div>
                <div className="course-tags">
                  {c.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <Link to="/register" className="btn-primary-sm">Enroll Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-section reveal">
        <div className="container">
          <div className="why-header text-center mb-16">
            <div className="hero-badge">Why Choose Us</div>
            <h2 className="section-title">
              The Global Science <span className="logo-accent">Advantage</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto mt-4">
              We combine world-class faculty, cutting-edge technology, and a student-first approach
              to deliver results that speak for themselves.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f, idx) => (
              <div key={idx} className="feature-item glass-card">
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section reveal">
        <div className="container">
          <div className="cta-card glass-card">
            <div className="cta-glow" />
            <div className="cta-content">
              <h2>Ready to Start Your Journey?</h2>
              <p className="text-muted mt-4 mb-8">
                Register for ASAT 2026 and unlock up to 100% scholarship for JEE &amp; NEET coaching.
              </p>
              <div className="hero-btns">
                <Link to="/asat" className="btn-primary">Register for ASAT</Link>
                <Link to="/contact" className="btn-outline">Talk to a Counsellor</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
