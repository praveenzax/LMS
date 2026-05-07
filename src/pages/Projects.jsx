// src/pages/Projects.jsx
import { useState } from 'react';
import { projects } from '../data/dummyData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const filtered = filter === 'All' ? projects : projects.filter(p => p.status === filter);

  return (
    <div>
      <div className="page-header d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 className="mb-1">Project Showcase</h1>
          <p className="mb-0">Your academic and personal project portfolio</p>
        </div>
        <button className="btn-primary-custom"><i className="bi bi-plus-lg me-2" />Add Project</button>
      </div>

      <div className="d-flex gap-2 mb-4">
        {['All', 'completed', 'in-progress'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className="btn btn-sm"
            style={{ background: filter === f ? 'var(--primary)' : 'var(--surface)', color: filter === f ? '#fff' : 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 10, fontWeight: 600, textTransform: 'capitalize', fontSize: 13, padding: '7px 16px' }}>
            {f.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.map(proj => (
          <div key={proj.id} className="col-md-6 col-xl-4">
            <div className="edu-card overflow-hidden h-100 d-flex flex-column">
              <div style={{ height: 180, position: 'relative' }}>
                <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 12, right: 12 }}>
                  <span className={`status-badge ${proj.status === 'completed' ? 'approved' : 'pending'}`} style={{ backdropFilter: 'blur(4px)' }}>
                    {proj.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              <div className="p-4 d-flex flex-column flex-grow-1">
                <h6 style={{ fontWeight: 800, fontSize: 16, color: 'var(--text)', marginBottom: 8 }}>{proj.title}</h6>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1 }}>{proj.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-4 mt-2">
                  {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="d-flex gap-2 mt-auto pt-3 border-top border-custom">
                  <a href={proj.github} className="btn btn-sm w-100" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)', fontWeight: 600, fontSize: 13 }}>
                    <i className="bi bi-github me-2" />Source Code
                  </a>
                  {proj.demo && (
                    <a href={proj.demo} className="btn btn-sm w-100" style={{ background: '#4361ee15', color: '#4361ee', fontWeight: 600, fontSize: 13 }}>
                      <i className="bi bi-box-arrow-up-right me-2" />Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
