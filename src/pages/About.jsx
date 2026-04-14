import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page pt-32">
      <div className="container">
        <header className="about-header text-center mb-24 reveal">
          <div className="hero-badge">Our Legacy</div>
          <h1 className="gradient-text">Excellence in Science</h1>
          <p className="max-w-3xl mx-auto text-muted mt-6">
            Global Science Institute was founded with a clear vision: to democratize elite coaching for science students and create the next generation of global innovators through data-driven pedagogy.
          </p>
        </header>

        <section className="stats-strip glass-card p-12 mb-32 reveal">
          <div className="stat-card">
            <h3>5k+</h3>
            <p>Students Mentored</p>
            <div className="stat-line"></div>
          </div>
          <div className="stat-card">
            <h3>90+</h3>
            <p>Expert Faculty</p>
            <div className="stat-line"></div>
          </div>
          <div className="stat-card">
            <h3>12</h3>
            <p>Excellence Hubs</p>
            <div className="stat-line"></div>
          </div>
          <div className="stat-card">
            <h3>98.4%</h3>
            <p>Success Rate</p>
            <div className="stat-line"></div>
          </div>
        </section>

        <section className="vision-section grid md:grid-cols-2 gap-16 items-center mb-32 reveal">
          <div className="glass-card vision-card p-12">
            <h2 className="logo-accent mb-8">Systematic Innovation</h2>
            <p className="text-muted leading-relaxed mb-6">Our mission is to empower students with conceptual clarity and rigorous practice, enabling them to crack India's toughest entrance exams with confidence.</p>
            <p className="text-muted leading-relaxed">We leverage advanced learning management systems (LMS) and AI-driven performance tracking to ensure every student reaches their peak potential.</p>
          </div>
          <div className="pattern-box glass-card h-96">
             <div className="geometric-pattern"></div>
          </div>
        </section>

        <section className="achievements-section mb-32 reveal">
          <h2 className="section-title text-center mb-16">Milestones of <span className="logo-accent">Success</span></h2>
          <div className="achievements-list grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="achievement-item glass-card p-10">
              <div className="year-pill mb-6">2024</div>
              <h4>State Record</h4>
              <p className="text-sm text-muted mt-4">Produced State Rank 1 in MHT-CET and 120+ students in Top 2000 of JEE Mains.</p>
            </div>
            <div className="achievement-item glass-card p-10">
              <div className="year-pill mb-6">2023</div>
              <h4>Medical Excellence</h4>
              <p className="text-sm text-muted mt-4">100% selection rate in NEET for our elite batch with record scores in high-level Biology.</p>
            </div>
            <div className="achievement-item glass-card p-10">
              <div className="year-pill mb-6">2022</div>
              <h4>Digital Leap</h4>
              <p className="text-sm text-muted mt-4">Launched the Global Testing Cloud, bringing real-time competitive simulations to all hubs.</p>
            </div>
          </div>
        </section>

        <section className="team-section pb-20 reveal">
          <h2 className="section-title text-center mb-16">The Minds Behind <span className="logo-accent">Global</span></h2>
          <div className="team-grid">
            <div className="team-member glass-card p-10">
              <div className="member-avatar">
                <div className="silhouette"></div>
              </div>
              <h4>Dr. A. Verma</h4>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mt-2">Founder & Director</p>
              <p className="text-muted text-xs mt-4">IIT Roorkee Alumnus with 15+ years of physics enrichment experience.</p>
            </div>
            <div className="team-member glass-card p-10">
              <div className="member-avatar">
                 <div className="silhouette"></div>
              </div>
              <h4>Prof. K. Saran</h4>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mt-2">Head of Physics</p>
              <p className="text-muted text-xs mt-4">Leading expert in Mechanics and Optics, former HOD at elite coaching hubs.</p>
            </div>
            <div className="team-member glass-card p-10">
              <div className="member-avatar">
                 <div className="silhouette"></div>
              </div>
              <h4>Dr. S. Mehta</h4>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mt-2">Head of Biology</p>
              <p className="text-muted text-xs mt-4">Botanist and Senior NEET Consultant with a track record of top-ten rankers.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
