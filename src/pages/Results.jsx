import React from 'react';
import '../styles/Results.css';

const Results = () => {
  const years = [2026, 2025, 2024, 2023, 2022];
  const results = [
    { name: 'Student Name', score: '99.75%', city: 'Pune' },
    { name: 'Student Name', score: '99.60%', city: 'Karmala' },
    { name: 'Student Name', score: '99.50%', city: 'Satara' },
    { name: 'Student Name', score: '99.34%', city: 'Wakad' },
    { name: 'Student Name', score: '99.10%', city: 'Rahatani' },
    { name: 'Student Name', score: '98.90%', city: 'Pune' },
    { name: 'Student Name', score: '98.75%', city: 'Karmala' },
    { name: 'Student Name', score: '98.50%', city: 'Satara' },
  ];

  return (
    <div className="results-page pt-32">
      <div className="container">
        <header className="text-center mb-24 reveal">
          <div className="hero-badge">Success Matrix</div>
          <h1 className="gradient-text mb-6">Hall of Excellence</h1>
          <p className="max-w-3xl mx-auto text-muted">A testament to the grit, methodology, and determination of our students who leading the charts in national level entrance exams.</p>
          
          <div className="year-selector mt-12">
            {years.map(year => (
              <button key={year} className={`year-btn ${year === 2026 ? 'active' : ''}`}>
                {year}
              </button>
            ))}
          </div>
        </header>

        <section className="results-section reveal">
          <div className="section-header flex-between mb-12">
            <div>
              <h2 className="logo-accent">JEE MAINS Excellence</h2>
              <p className="text-xs text-muted mt-2">National Test Results (Session-1)</p>
            </div>
            <div className="stat-pill">8 Toppers in Top 1%</div>
          </div>
          <div className="results-grid">
            {results.map((res, idx) => (
              <div key={idx} className="glass-card result-card">
                <div className="result-avatar">
                   <div className="silh-head"></div>
                   <div className="silh-body"></div>
                </div>
                <h4>{res.name}</h4>
                <p className="text-muted text-xs">{res.city}</p>
                <div className="percentile-wrapper">
                  <span className="p-label">Percentile</span>
                  <div className="percentile">{res.score}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="results-section mt-32 pb-20 reveal">
          <div className="section-header flex-between mb-12">
            <div>
              <h2 className="logo-accent text-secondary">NEET / Medical Toppers</h2>
              <p className="text-xs text-muted mt-2">All India Medical Entrance Highlights</p>
            </div>
            <div className="stat-pill alt">Record Biology Scores</div>
          </div>
          <div className="results-grid">
            {results.slice(0, 4).map((res, idx) => (
              <div key={idx} className="glass-card result-card">
                <div className="result-avatar alt-secondary">
                   <div className="silh-head alt"></div>
                   <div className="silh-body alt"></div>
                </div>
                <h4>{res.name}</h4>
                <p className="text-muted text-xs">{res.city}</p>
                <div className="percentile-wrapper">
                  <span className="p-label">Score</span>
                  <div className="percentile text-secondary">{res.score}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results;
