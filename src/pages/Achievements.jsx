// src/pages/Achievements.jsx
import { useState } from 'react';
import { achievements } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

const categories = ['All', 'certification', 'hackathon', 'award', 'competition', 'nptel', 'patent', 'other'];
const catColors = { certification: '#4361ee', hackathon: '#06d6a0', award: '#ffd166', competition: '#f72585', nptel: '#ff9900', patent: '#888888', other: '#006600' };

export default function Achievements() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const { addToast } = useNotification();

  const filtered = filter === 'All' ? achievements : achievements.filter(a => a.category === filter);

  return (
    <div>
      <div className="page-header">
        <h1>hello</h1>
        <h1 className="mb-1">Academic Achievements</h1>
        <p className="mb-0">Your certificates, awards, and competition recognitions</p>
      </div>

      {/* Summary Row */}
      <div className="row g-3 mb-4">
        {[
          { label: 'Total Achievements', value: achievements.length, icon: 'bi-trophy', color: '#ffd166' },
          { label: 'Certifications', value: achievements.filter(a => a.category === 'certification').length, icon: 'bi-award', color: '#4361ee' },
          { label: 'Hackathons Won', value: achievements.filter(a => a.category === 'hackathon').length, icon: 'bi-lightning', color: '#06d6a0' },
          { label: 'Competitions', value: achievements.filter(a => a.category === 'competition').length, icon: 'bi-flag', color: '#f72585' },
          { label: 'NPTEL Courses', value: achievements.filter(a => a.category === 'nptel').length, icon: 'bi-book-half', color: '#ff9900' },
          { label: 'Patents', value: achievements.filter(a => a.category === 'patent').length, icon: 'bi-lightbulb', color: '#888888' },
        ].map(s => (
          <div key={s.label} className="col-6 col-md-4 col-lg-3 col-xl-2">
            <div className="edu-card p-4 d-flex align-items-center gap-3">
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`bi ${s.icon}`} style={{ fontSize: 22, color: s.color }} />
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text)' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>{s.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {categories.map(c => (
          <button key={c} onClick={() => setFilter(c)}
            className="btn btn-sm"
            style={{ background: filter === c ? (catColors[c] || '#4361ee') : 'var(--surface)', color: filter === c ? '#fff' : 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 10, fontWeight: 600, textTransform: 'capitalize', fontSize: 13, padding: '7px 16px' }}>
            {c}
          </button>
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="row g-3">
        {filtered.map(ach => (
          <div key={ach.id} className="col-sm-6 col-lg-4 col-xl-3">
            <div className="edu-card overflow-hidden h-100" style={{ cursor: 'pointer' }} onClick={() => setSelected(ach)}>
              <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <img src={ach.imageUrl} alt={ach.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 12, right: 12 }}>
                  <span style={{ background: catColors[ach.category] || '#4361ee', color: '#fff', borderRadius: 8, padding: '4px 10px', fontSize: 11, fontWeight: 700, textTransform: 'capitalize' }}>
                    {ach.category}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h6 style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 6 }}>{ach.title}</h6>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
                  <i className="bi bi-building me-1" />{ach.issuer}
                </p>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>
                  <i className="bi bi-calendar3 me-1" />{new Date(ach.date).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                </p>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm flex-1" style={{ background: '#4361ee20', color: '#4361ee', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, flex: 1 }}
                    onClick={(e) => { e.stopPropagation(); setSelected(ach); }}>
                    <i className="bi bi-eye me-1" />Preview
                  </button>
                  <button className="btn btn-sm" style={{ background: '#06d6a020', color: '#06d6a0', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, flex: 1 }}
                    onClick={(e) => { e.stopPropagation(); addToast('Downloading certificate...', 'success', 'Download'); }}>
                    <i className="bi bi-download me-1" />Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      {selected && (
        <div className="modal show d-block" style={{ background: 'rgba(0,0,0,0.75)' }} onClick={() => setSelected(null)}>
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-content" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20 }}>
              <div className="modal-header" style={{ borderColor: 'var(--border)' }}>
                <h5 className="modal-title" style={{ color: 'var(--text)', fontWeight: 700 }}>{selected.title}</h5>
                <button className="btn-close" onClick={() => setSelected(null)} />
              </div>
              <div className="modal-body text-center p-0">
                <img src={selected.imageUrl} alt={selected.title} style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />
              </div>
              <div className="modal-footer" style={{ borderColor: 'var(--border)', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                  <i className="bi bi-building me-2" />{selected.issuer} · {new Date(selected.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-secondary btn-sm" onClick={() => setSelected(null)}>Close</button>
                  <button className="btn-primary-custom" style={{ padding: '6px 16px', fontSize: 13 }} onClick={() => addToast('Downloading certificate...', 'success', 'Download')}>
                    <i className="bi bi-download me-2" />Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
