// src/pages/Notes.jsx
import { useState } from 'react';
import { lectureNotes } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

const subjects = ['All', ...new Set(lectureNotes.map(n => n.subject))];
const typeIcon = { PDF: 'bi-file-earmark-pdf', DOCX: 'bi-file-earmark-word', PPT: 'bi-file-earmark-slides' };
const typeColor = { PDF: '#ef476f', DOCX: '#4361ee', PPT: '#fb8500' };

export default function Notes() {
  const [view, setView] = useState('grid');
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [uploadForm, setUploadForm] = useState({ title: '', subject: '', notes: null });
  const { addToast } = useNotification();

  const filtered = lectureNotes.filter(n => {
    const matchSub = subject === 'All' || n.subject === subject;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.subject.toLowerCase().includes(search.toLowerCase());
    return matchSub && matchSearch;
  });

  const handleUpload = (e) => {
    e.preventDefault();
    setShowModal(false);
    addToast('Notes uploaded successfully!', 'success', 'Upload Complete');
    setUploadForm({ title: '', subject: '', notes: null });
  };

  return (
    <div>
      <div className="page-header d-flex flex-wrap justify-content-between align-items-start gap-3">
        <div>
          <h1 className="mb-1">Lecture Notes</h1>
          <p className="mb-0">Browse, download and manage your academic notes</p>
        </div>
        <button className="btn-primary-custom d-flex align-items-center gap-2" onClick={() => setShowModal(true)} id="upload-notes-btn">
          <i className="bi bi-cloud-upload" />Upload Notes
        </button>
      </div>

      {/* Filters */}
      <div className="edu-card p-3 mb-4">
        <div className="row g-2 align-items-center">
          <div className="col-md-5">
            <div className="position-relative">
              <i className="bi bi-search" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input className="form-control ps-4" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: 14 }}
                placeholder="Search notes..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-wrap gap-2">
              {subjects.map(s => (
                <button key={s} onClick={() => setSubject(s)}
                  className="btn btn-sm"
                  style={{ background: subject === s ? 'var(--primary)' : 'var(--surface-2)', color: subject === s ? '#fff' : 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {s.length > 14 ? s.split(' ')[0] : s}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-end gap-2">
            <button className="icon-btn" onClick={() => setView('grid')} style={{ background: view === 'grid' ? 'var(--primary)' : 'var(--surface-2)', color: view === 'grid' ? '#fff' : 'var(--text-muted)' }} id="grid-view-btn"><i className="bi bi-grid" /></button>
            <button className="icon-btn" onClick={() => setView('list')} style={{ background: view === 'list' ? 'var(--primary)' : 'var(--surface-2)', color: view === 'list' ? '#fff' : 'var(--text-muted)' }} id="list-view-btn"><i className="bi bi-list-ul" /></button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>Showing {filtered.length} of {lectureNotes.length} notes</p>

      {/* Grid View */}
      {view === 'grid' && (
        <div className="row g-3">
          {filtered.map(note => (
            <div key={note.id} className="col-sm-6 col-lg-4 col-xl-3">
              <div className="edu-card p-4 h-100">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${typeColor[note.type]}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`bi ${typeIcon[note.type] || 'bi-file-earmark'}`} style={{ fontSize: 22, color: typeColor[note.type] }} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: typeColor[note.type], background: `${typeColor[note.type]}15`, padding: '3px 8px', borderRadius: 6 }}>{note.type}</span>
                </div>
                <h6 style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 6, lineHeight: 1.4 }}>{note.title}</h6>
                <span className="subject-pill mb-3 d-inline-block">{note.subject}</span>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>
                  <div><i className="bi bi-person me-1" />{note.uploadedBy}</div>
                  <div className="d-flex justify-content-between mt-1">
                    <span><i className="bi bi-calendar3 me-1" />{note.date}</span>
                    <span><i className="bi bi-download me-1" />{note.downloads}</span>
                  </div>
                </div>
                <button className="btn-primary-custom w-100 text-center" style={{ padding: '8px', fontSize: 13 }}
                  onClick={() => addToast(`Downloading "${note.title}"`, 'info', 'Download')}>
                  <i className="bi bi-download me-2" />Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="edu-card overflow-hidden">
          <table className="edu-table w-100">
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Type</th>
                <th>Size</th>
                <th>Uploaded By</th>
                <th>Date</th>
                <th>Downloads</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(note => (
                <tr key={note.id}>
                  <td><span style={{ fontWeight: 600, fontSize: 13 }}>{note.title}</span></td>
                  <td><span className="subject-pill">{note.subject}</span></td>
                  <td><span style={{ color: typeColor[note.type], fontWeight: 700, fontSize: 12 }}>{note.type}</span></td>
                  <td style={{ fontSize: 13 }}>{note.size}</td>
                  <td style={{ fontSize: 13 }}>{note.uploadedBy}</td>
                  <td style={{ fontSize: 13 }}>{note.date}</td>
                  <td style={{ fontSize: 13 }}>{note.downloads}</td>
                  <td>
                    <button className="btn btn-sm" style={{ background: '#4361ee20', color: '#4361ee', borderRadius: 8, border: 'none', fontSize: 12, fontWeight: 600 }}
                      onClick={() => addToast(`Downloading "${note.title}"`, 'info', 'Download')}>
                      <i className="bi bi-download me-1" />Get
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="empty-state">
          <i className="bi bi-file-earmark-x" />
          <p>No notes found matching your filters.</p>
        </div>
      )}

      {/* Upload Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content edu-form" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16 }}>
              <div className="modal-header" style={{ borderColor: 'var(--border)' }}>
                <h5 className="modal-title" style={{ color: 'var(--text)', fontWeight: 700 }}>Upload Lecture Notes</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} />
              </div>
              <form onSubmit={handleUpload}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" placeholder="Note title..." required value={uploadForm.title} onChange={e => setUploadForm(f => ({ ...f, title: e.target.value }))} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <select className="form-select" required value={uploadForm.subject} onChange={e => setUploadForm(f => ({ ...f, subject: e.target.value }))}>
                      <option value="">Select subject</option>
                      {subjects.filter(s => s !== 'All').map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="upload-zone" onClick={() => document.getElementById('file-input').click()}>
                    <input id="file-input" type="file" hidden accept=".pdf,.docx,.ppt,.pptx" onChange={e => setUploadForm(f => ({ ...f, notes: e.target.files[0] }))} />
                    <i className="bi bi-cloud-upload" />
                    <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Click to upload or drag & drop</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: 12 }}>PDF, DOCX, PPT – Max 50MB</p>
                    {uploadForm.notes && <p style={{ color: 'var(--success)', fontSize: 13, marginTop: 8 }}>📎 {uploadForm.notes.name}</p>}
                  </div>
                </div>
                <div className="modal-footer" style={{ borderColor: 'var(--border)' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn-primary-custom">Upload Notes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
