// src/pages/Library.jsx
import { useState } from 'react';
import { library } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

const types = [...new Set(library.map(l => l.type))];

export default function Library() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const { addToast } = useNotification();

  const filtered = library.filter(l => {
    const matchType = filter === 'All' || l.type === filter;
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase()) || l.subject.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div>
      <div className="page-header">
        <h1 className="mb-1">Digital Library</h1>
        <p className="mb-0">Access e-books, previous question papers, and research material</p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <div className="position-relative">
            <i className="bi bi-search" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input className="form-control ps-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px', fontSize: 15 }}
              placeholder="Search by book title, subject, or author..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="col-md-4">
          <select className="form-select w-100" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px', fontSize: 15 }}
            value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="All">All Resource Types</option>
            {types.map(t => <option key={t} value={t}>{t.replace('-', ' ').toUpperCase()}</option>)}
          </select>
        </div>
      </div>

      <div className="row g-4">
        {filtered.map(item => (
          <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3">
            <div className="edu-card p-4 h-100 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: item.type === 'ebook' ? '#4361ee15' : item.type === 'research' ? '#7209b715' : '#06d6a015', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`bi ${item.type === 'ebook' ? 'bi-book' : item.type === 'research' ? 'bi-journal-richtext' : 'bi-file-text'}`} 
                    style={{ fontSize: 24, color: item.type === 'ebook' ? '#4361ee' : item.type === 'research' ? '#7209b7' : '#06d6a0' }} />
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, background: 'var(--surface-2)', color: 'var(--text-muted)', padding: '4px 8px', borderRadius: 6, textTransform: 'uppercase' }}>{item.year}</span>
              </div>
              <h6 style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 8, lineHeight: 1.4 }}>{item.title}</h6>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, flexGrow: 1 }}>
                <p className="mb-1"><i className="bi bi-person me-2" />{item.author}</p>
                <p className="mb-0"><i className="bi bi-tag me-2" />{item.subject}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-custom">
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>{item.size}</span>
                <button className="icon-btn" style={{ width: 36, height: 36, background: 'var(--primary)', color: '#fff', border: 'none' }}
                  onClick={() => addToast(`Downloading ${item.title}...`, 'info')}>
                  <i className="bi bi-download" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && <div className="empty-state py-5"><i className="bi bi-search" /><p>No resources found matching your search.</p></div>}
    </div>
  );
}
