// src/pages/Journals.jsx
import { useState } from 'react';
import { journals } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

const semesterGroups = [...new Set(journals.map(j => j.semester))].sort((a, b) => b - a);

const statusConfig = {
  approved: { label: 'Approved', class: 'approved', icon: 'bi-check-circle' },
  submitted: { label: 'Submitted', class: 'submitted', icon: 'bi-clock' },
  pending: { label: 'Pending', class: 'pending', icon: 'bi-hourglass' },
  rejected: { label: 'Rejected', class: 'rejected', icon: 'bi-x-circle' },
};

export default function Journals() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: '', subject: '', semester: '', file: null });
  const { addToast } = useNotification();

  const filtered = journals.filter(j => {
    const matchStatus = filter === 'All' || j.status === filter.toLowerCase();
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    addToast('Journal submitted for review!', 'success', 'Journal Uploaded');
    setForm({ title: '', subject: '', semester: '', file: null });
  };

  return (
    <div>
      <div className="page-header d-flex flex-wrap justify-content-between align-items-start gap-3">
        <div>
          <h1 className="mb-1">My Journals</h1>
          <p className="mb-0">Track your journal submissions and review status</p>
        </div>
        <button className="btn-primary-custom d-flex align-items-center gap-2" onClick={() => setShowModal(true)} id="upload-journal-btn">
          <i className="bi bi-journal-plus" />New Journal
        </button>
      </div>

      {/* Stats Row */}
      <div className="row g-3 mb-4">
        {['All','approved','submitted','pending','rejected'].map(s => {
          const count = s === 'All' ? journals.length : journals.filter(j => j.status === s).length;
          return (
            <div key={s} className="col">
              <button onClick={() => setFilter(s === 'All' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1))}
                className="edu-card p-3 w-100 border-0 text-center"
                style={{ cursor: 'pointer', background: filter.toLowerCase() === s ? 'var(--primary)' : 'var(--surface)' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: filter.toLowerCase() === s ? '#fff' : 'var(--text)' }}>{count}</div>
                <div style={{ fontSize: 12, color: filter.toLowerCase() === s ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', textTransform: 'capitalize', fontWeight: 600 }}>{s}</div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Search */}
      <div className="edu-card p-3 mb-4">
        <div className="position-relative">
          <i className="bi bi-search" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input className="form-control ps-4" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: 14 }}
            placeholder="Search journals..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {/* Semester-grouped */}
      {semesterGroups.map(sem => {
        const semJournals = filtered.filter(j => j.semester === sem);
        if (!semJournals.length) return null;
        return (
          <div key={sem} className="mb-4">
            <div className="section-title">Semester {sem}</div>
            <div className="row g-3">
              {semJournals.map(j => {
                const cfg = statusConfig[j.status];
                return (
                  <div key={j.id} className="col-md-6 col-lg-4">
                    <div className="edu-card p-4 h-100">
                      <div className="d-flex justify-content-between mb-3">
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: '#7209b720', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bi bi-journal-text" style={{ color: '#7209b7', fontSize: 18 }} />
                        </div>
                        <span className={`status-badge ${cfg.class}`}>
                          <i className={`bi ${cfg.icon}`} />{cfg.label}
                        </span>
                      </div>
                      <h6 style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 6, lineHeight: 1.4 }}>{j.title}</h6>
                      <span className="subject-pill mb-2 d-inline-block">{j.subject}</span>
                      <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: j.feedback ? 8 : 0 }}>
                        <i className="bi bi-calendar3 me-1" />Submitted: {j.date}
                      </p>
                      {j.feedback && (
                        <div style={{ background: '#06d6a015', border: '1px solid #06d6a030', borderRadius: 8, padding: '8px 12px', fontSize: 12, color: '#06d6a0' }}>
                          <i className="bi bi-chat-quote me-2" />{j.feedback}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {filtered.length === 0 && <div className="empty-state"><i className="bi bi-journal-x" /><p>No journals found.</p></div>}

      {/* Upload Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content edu-form" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16 }}>
              <div className="modal-header" style={{ borderColor: 'var(--border)' }}>
                <h5 className="modal-title" style={{ color: 'var(--text)', fontWeight: 700 }}>Submit New Journal</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Journal Title</label>
                    <input className="form-control" placeholder="Enter journal title..." required value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
                  </div>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label className="form-label">Subject</label>
                      <input className="form-control" placeholder="Subject name" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                    </div>
                    <div className="col-6 mb-3">
                      <label className="form-label">Semester</label>
                      <select className="form-select" required value={form.semester} onChange={e => setForm(f => ({ ...f, semester: e.target.value }))}>
                        <option value="">Select</option>
                        {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="upload-zone" onClick={() => document.getElementById('journal-file').click()}>
                    <input id="journal-file" type="file" hidden accept=".pdf,.docx" onChange={e => setForm(f => ({ ...f, file: e.target.files[0] }))} />
                    <i className="bi bi-journal-arrow-up" />
                    <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Upload Journal File</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: 12 }}>PDF or DOCX – Max 20MB</p>
                    {form.file && <p style={{ color: '#06d6a0', fontSize: 13, marginTop: 8 }}>📎 {form.file.name}</p>}
                  </div>
                </div>
                <div className="modal-footer" style={{ borderColor: 'var(--border)' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn-primary-custom">Submit Journal</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
