// src/pages/Assignments.jsx
import { useState } from 'react';
import { assignments } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

export default function Assignments() {
  const [filter, setFilter] = useState('All');
  const { addToast } = useNotification();

  const filtered = filter === 'All' ? assignments : assignments.filter(a => a.status === filter);

  const stats = {
    total: assignments.length,
    submitted: assignments.filter(a => a.status === 'submitted').length,
    pending: assignments.filter(a => a.status === 'pending').length,
    overdue: assignments.filter(a => a.status === 'overdue').length,
  };

  const getStatusColor = (status) => {
    if (status === 'submitted') return '#06d6a0';
    if (status === 'pending') return '#ffd166';
    if (status === 'overdue') return '#ef476f';
    return '#4361ee';
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="mb-1">Assignments</h1>
        <p className="mb-0">Manage your coursework and track due dates</p>
      </div>

      {/* Progress Overview */}
      <div className="edu-card p-4 mb-4">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 style={{ fontWeight: 700 }}>Overall Progress</h6>
            <div className="d-flex align-items-end gap-2 mt-2">
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{Math.round((stats.submitted / stats.total) * 100)}%</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)', paddingBottom: 4 }}>Completed</span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex gap-2 mb-2" style={{ height: 12, borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ width: `${(stats.submitted / stats.total) * 100}%`, background: '#06d6a0' }} />
              <div style={{ width: `${(stats.pending / stats.total) * 100}%`, background: '#ffd166' }} />
              <div style={{ width: `${(stats.overdue / stats.total) * 100}%`, background: '#ef476f' }} />
            </div>
            <div className="d-flex gap-4" style={{ fontSize: 12, fontWeight: 600 }}>
              <span style={{ color: '#06d6a0' }}><i className="bi bi-circle-fill me-1" style={{ fontSize: 8 }} />{stats.submitted} Submitted</span>
              <span style={{ color: '#e6a817' }}><i className="bi bi-circle-fill me-1" style={{ fontSize: 8 }} />{stats.pending} Pending</span>
              <span style={{ color: '#ef476f' }}><i className="bi bi-circle-fill me-1" style={{ fontSize: 8 }} />{stats.overdue} Overdue</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {['All', 'pending', 'submitted', 'overdue'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className="btn btn-sm"
            style={{ background: filter === f ? 'var(--primary)' : 'var(--surface)', color: filter === f ? '#fff' : 'var(--text)', border: '1px solid var(--border)', borderRadius: 10, fontWeight: 600, textTransform: 'capitalize', fontSize: 13, padding: '7px 16px' }}>
            {f}
          </button>
        ))}
      </div>

      {/* Assignment List */}
      <div className="row g-3">
        {filtered.map(a => (
          <div key={a.id} className="col-md-6 col-xl-4">
            <div className="edu-card p-4 h-100 position-relative">
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: getStatusColor(a.status) }} />
              
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="subject-pill">{a.subject}</span>
                <span className={`status-badge ${a.status === 'submitted' ? 'approved' : a.status === 'overdue' ? 'rejected' : 'pending'}`} style={{ fontSize: 11 }}>
                  {a.status.toUpperCase()}
                </span>
              </div>
              
              <h6 style={{ fontWeight: 700, fontSize: 15, marginTop: 12, marginBottom: 12, lineHeight: 1.4 }}>{a.title}</h6>
              
              <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-calendar-event" style={{ color: getStatusColor(a.status) }} />
                  <span>Due: <strong style={{ color: a.status === 'overdue' ? '#ef476f' : 'var(--text)' }}>{new Date(a.dueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</strong></span>
                </div>
                {a.submittedDate && (
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check2-circle text-success" />
                    <span>Submitted: {new Date(a.submittedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                  </div>
                )}
                {a.marks && (
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-award text-primary" />
                    <span>Marks: <strong>{a.marks}</strong></span>
                  </div>
                )}
              </div>

              {a.status !== 'submitted' && (
                <button className="btn w-100" style={{ background: 'var(--primary)', color: '#fff', fontWeight: 600, fontSize: 13, borderRadius: 8 }}
                  onClick={() => addToast('Opening submission portal...', 'info', 'Submit Assignment')}>
                  <i className="bi bi-cloud-upload me-2" />Submit Work
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
