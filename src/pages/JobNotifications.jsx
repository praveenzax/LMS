// src/pages/JobNotifications.jsx
import { useState } from 'react';
import { jobNotifications } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

export default function JobNotifications() {
  const [sectorFilter, setSectorFilter] = useState('All');
  const [branchFilter, setBranchFilter] = useState('All');
  const { addToast } = useNotification();

  const filteredJobs = jobNotifications.filter(job => {
    const matchSector = sectorFilter === 'All' || job.type === sectorFilter;
    const matchBranch = branchFilter === 'All' || job.branch === 'all' || job.branch === branchFilter;
    return matchSector && matchBranch;
  });

  const branchLabels = {
    'All': 'All Branches',
    'cse': 'CSE Core',
    'allied': 'Allied CSE (IT, AI/ML)',
    'non-cse': 'Non-CSE Branches'
  };

  return (
    <div>
      <div className="page-header d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 className="mb-1">Job & Exam Notifications</h1>
          <p className="mb-0">Stay updated with Government and Private sector opportunities</p>
        </div>
      </div>

      <div className="edu-card p-4 mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <h6 className="fw-bold mb-3 text-muted" style={{ fontSize: 13, textTransform: 'uppercase' }}>Sector</h6>
            <div className="d-flex flex-wrap gap-2">
              {['All', 'government', 'private'].map(f => (
                <button key={f} onClick={() => setSectorFilter(f)}
                  className="btn btn-sm transition-all"
                  style={{ background: sectorFilter === f ? 'var(--primary)' : 'var(--surface-2)', color: sectorFilter === f ? '#fff' : 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 10, fontWeight: 600, textTransform: 'capitalize', fontSize: 13, padding: '7px 16px' }}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h6 className="fw-bold mb-3 text-muted" style={{ fontSize: 13, textTransform: 'uppercase' }}>Eligible Branch</h6>
            <div className="d-flex flex-wrap gap-2">
              {['All', 'cse', 'allied', 'non-cse'].map(b => (
                <button key={b} onClick={() => setBranchFilter(b)}
                  className="btn btn-sm transition-all"
                  style={{ background: branchFilter === b ? 'var(--secondary)' : 'var(--surface-2)', color: branchFilter === b ? '#fff' : 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 10, fontWeight: 600, fontSize: 13, padding: '7px 16px' }}>
                  {branchLabels[b]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredJobs.map(job => (
          <div key={job.id} className="col-md-6 col-lg-4">
            <div className="edu-card p-4 h-100 d-flex flex-column transition-all" style={{ cursor: 'pointer' }} onClick={() => addToast(`Opening details for ${job.title}`, 'info')}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${job.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`bi ${job.icon}`} style={{ fontSize: 24, color: job.color }} />
                </div>
                <div className="d-flex flex-column align-items-end gap-1">
                  <span style={{ fontSize: 10, fontWeight: 700, color: job.type === 'government' ? '#e63946' : '#2a9d8f', background: job.type === 'government' ? '#e6394615' : '#2a9d8f15', padding: '3px 8px', borderRadius: 6, textTransform: 'uppercase' }}>
                    {job.type}
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', background: 'var(--surface-2)', padding: '3px 8px', borderRadius: 6, textTransform: 'uppercase', border: '1px solid var(--border)' }}>
                    {branchLabels[job.branch]}
                  </span>
                </div>
              </div>
              <div className="flex-grow-1">
                <h6 style={{ fontWeight: 800, fontSize: 16, color: 'var(--text)', marginBottom: 6, lineHeight: 1.4 }}>{job.title}</h6>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}><i className="bi bi-building me-2" />{job.org}</p>
              </div>
              <div className="pt-3 mt-auto border-top border-custom d-flex justify-content-between align-items-center">
                <span style={{ fontSize: 12, color: 'var(--text)', fontWeight: 600 }}><i className="bi bi-calendar-event me-2 text-danger" />Due: {new Date(job.lastDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                <button className="btn btn-sm" style={{ background: 'var(--primary)', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 600 }}>Apply <i className="bi bi-arrow-right ms-1" /></button>
              </div>
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <div className="col-12">
            <div className="empty-state py-5">
              <i className="bi bi-briefcase-x" style={{ fontSize: '3rem' }} />
              <p className="mt-3" style={{ fontSize: 15, fontWeight: 500 }}>No opportunities found for the selected criteria.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
