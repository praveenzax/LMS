// src/pages/Placement.jsx
import { useState } from 'react';
import { placementResources, jobNotifications } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

export default function Placement() {
  const { addToast } = useNotification();
  const [jobFilter, setJobFilter] = useState('All');

  const filteredJobs = jobFilter === 'All' ? jobNotifications : jobNotifications.filter(j => j.type === jobFilter);

  const handleStart = (title) => {
    addToast(`Starting mock module: ${title}`, 'info');
  };

  return (
    <div>
      <div className="grad-card grad-purple mb-4" style={{ padding: '32px' }}>
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8, color: '#fff' }}>Placement Preparation Center</h1>
            <p style={{ opacity: 0.8, fontSize: 15, marginBottom: 20, lineHeight: 1.6 }}>Get ready for your dream job with curated interview questions, aptitude tests, mock interviews, and resume building resources.</p>
            <div className="d-flex gap-3">
              <button className="btn" style={{ background: '#fff', color: '#7209b7', fontWeight: 700, borderRadius: 8, padding: '10px 20px' }}>Take Mock Test</button>
              <button className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 600, borderRadius: 8, padding: '10px 20px' }}>Upload Resume for Review</button>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block text-center text-white opacity-75">
            <i className="bi bi-rocket-takeoff" style={{ fontSize: '6rem' }} />
          </div>
        </div>
      </div>

      <div className="section-title mb-3">Curated Resources</div>
      <div className="row g-4">
        {placementResources.map(res => (
          <div key={res.id} className="col-md-6 col-lg-4 col-xl-3">
            <div className="edu-card h-100 p-4 text-center transition-all" style={{ cursor: 'pointer' }} onClick={() => handleStart(res.title)}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: `${res.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i className={`bi ${res.icon}`} style={{ fontSize: 28, color: res.color }} />
              </div>
              <h6 style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 8 }}>{res.title}</h6>
              <span style={{ fontSize: 11, fontWeight: 700, color: res.color, background: `${res.color}15`, padding: '4px 10px', borderRadius: 6, textTransform: 'uppercase' }}>{res.category}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <div className="section-title mb-0">Recent Job & Exam Notifications</div>
        <div className="d-flex gap-2">
          {['All', 'government', 'private'].map(f => (
            <button key={f} onClick={() => setJobFilter(f)}
              className="btn btn-sm"
              style={{ background: jobFilter === f ? 'var(--primary)' : 'var(--surface)', color: jobFilter === f ? '#fff' : 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 10, fontWeight: 600, textTransform: 'capitalize', fontSize: 13, padding: '5px 12px' }}>
              {f}
            </button>
          ))}
        </div>
      </div>
      
      <div className="row g-3">
        {filteredJobs.map(job => (
          <div key={job.id} className="col-md-6 col-lg-4">
            <div className="edu-card p-4 h-100 d-flex flex-column transition-all" style={{ cursor: 'pointer' }} onClick={() => addToast(`Opening details for ${job.title}`, 'info')}>
              <div className="d-flex align-items-start gap-3 mb-3">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${job.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`bi ${job.icon}`} style={{ fontSize: 24, color: job.color }} />
                </div>
                <div>
                  <h6 style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 4, lineHeight: 1.3 }}>{job.title}</h6>
                  <span style={{ fontSize: 11, fontWeight: 700, color: job.color, background: `${job.color}15`, padding: '3px 8px', borderRadius: 6, textTransform: 'uppercase' }}>{job.type}</span>
                </div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', flexGrow: 1 }}>
                <p className="mb-2"><i className="bi bi-building me-2" />{job.org}</p>
                <p className="mb-0"><i className="bi bi-calendar-event me-2" />Last Date: <strong style={{ color: 'var(--text)' }}>{new Date(job.lastDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</strong></p>
              </div>
              <button className="btn btn-sm w-100 mt-3" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)', fontWeight: 600, fontSize: 13 }}>
                View Details <i className="bi bi-arrow-right ms-1" />
              </button>
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && <div className="col-12"><div className="empty-state"><i className="bi bi-briefcase-x" /><p>No {jobFilter} notifications found.</p></div></div>}
      </div>
    </div>
  );
}
