// src/pages/FDP.jsx
import { fdpPrograms } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

export default function FDP() {
  const { addToast } = useNotification();

  return (
    <div>
      <div className="page-header">
        <h1 className="mb-1">Faculty Development Programs</h1>
        <p className="mb-0">Your participation in workshops and development programs</p>
      </div>

      <div className="row g-4">
        {/* Timeline View */}
        <div className="col-lg-8">
          <div className="edu-card p-4">
            <div className="section-title">Program Timeline</div>
            <div className="timeline mt-4">
              {fdpPrograms.map((fdp, i) => (
                <div key={fdp.id} className="timeline-item">
                  <div className="d-flex flex-column flex-md-row gap-3">
                    <div style={{ flex: 1 }}>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)' }}>
                          {new Date(fdp.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                        </span>
                        <span className={`status-badge ${fdp.status === 'completed' ? 'approved' : 'pending'}`} style={{ fontSize: 10, padding: '2px 8px' }}>
                          {fdp.status}
                        </span>
                      </div>
                      <h6 style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>{fdp.title}</h6>
                      <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>
                        <i className="bi bi-building me-1" />{fdp.organizer}
                      </p>
                      <div className="d-flex gap-3 text-muted" style={{ fontSize: 12 }}>
                        <span><i className="bi bi-clock me-1" />{fdp.duration}</span>
                        <span><i className={`bi ${fdp.mode === 'Online' ? 'bi-laptop' : 'bi-geo-alt'} me-1`} />{fdp.mode}</span>
                      </div>
                    </div>
                    {fdp.certificate && (
                      <div className="d-flex align-items-center">
                        <button className="btn btn-sm" style={{ background: '#06d6a020', color: '#06d6a0', border: '1px solid #06d6a040', borderRadius: 8, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}
                          onClick={() => addToast(`Downloading certificate for ${fdp.title}`, 'success', 'Download')}>
                          <i className="bi bi-download me-2" />Certificate
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="col-lg-4">
          <div className="edu-card p-4 mb-4" style={{ background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)' }}>
            <div className="text-center">
              <div style={{ width: 64, height: 64, borderRadius: 16, background: '#4361ee20', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i className="bi bi-people" style={{ fontSize: 32, color: 'var(--primary)' }} />
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>{fdpPrograms.length}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, fontWeight: 500, margin: 0 }}>Total Programs Attended</p>
            </div>
            <hr style={{ borderColor: 'var(--border)', margin: '20px 0' }} />
            <div className="d-flex justify-content-between text-muted" style={{ fontSize: 13 }}>
              <span>Completed</span>
              <span className="fw-bold" style={{ color: 'var(--text)' }}>{fdpPrograms.filter(f => f.status === 'completed').length}</span>
            </div>
            <div className="d-flex justify-content-between text-muted mt-2" style={{ fontSize: 13 }}>
              <span>Certificates Earned</span>
              <span className="fw-bold" style={{ color: 'var(--text)' }}>{fdpPrograms.filter(f => f.certificate).length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
