// src/pages/Profile.jsx
import { student, academicTimeline } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

export default function Profile() {
  const { addToast } = useNotification();

  return (
    <div>
      {/* Hero Banner */}
      <div className="grad-card grad-blue mb-4" style={{ padding: 0, overflow: 'hidden', borderRadius: 16 }}>
        <div style={{ height: 120, background: 'linear-gradient(135deg,#4361ee,#7209b7,#f72585)' }} />
        <div style={{ padding: '0 32px 28px', marginTop: -50 }}>
          <div className="d-flex flex-wrap align-items-end gap-4">
            <img src={student.avatar} alt="Profile"
              style={{ width: 100, height: 100, borderRadius: '50%', border: '4px solid white', objectFit: 'cover', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
            <div style={{ paddingBottom: 4 }}>
              <h2 style={{ fontWeight: 800, marginBottom: 4, fontSize: '1.5rem' }}>{student.name}</h2>
              <p style={{ opacity: 0.8, marginBottom: 6, fontSize: 14 }}>{student.branch}</p>
              <div className="d-flex flex-wrap gap-2">
                <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '3px 12px', fontSize: 12, fontWeight: 600 }}>
                  <i className="bi bi-hash me-1" />{student.rollNumber}
                </span>
                <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '3px 12px', fontSize: 12, fontWeight: 600 }}>
                  <i className="bi bi-mortarboard me-1" />Semester {student.semester}
                </span>
                <span style={{ background: 'rgba(6,214,160,0.3)', borderRadius: 8, padding: '3px 12px', fontSize: 12, fontWeight: 600 }}>
                  <i className="bi bi-star me-1" />CGPA: {student.cgpa}
                </span>
              </div>
            </div>
            <div className="ms-auto d-flex gap-2">
              <button className="btn btn-sm" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: 8, border: '1px solid rgba(255,255,255,0.3)', fontSize: 13 }}
                onClick={() => addToast('Downloading resume…', 'info', 'Resume')}>
                <i className="bi bi-download me-2" />Download Resume
              </button>
              <button className="btn btn-sm" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: 8, border: '1px solid rgba(255,255,255,0.3)', fontSize: 13 }}>
                <i className="bi bi-pencil me-2" />Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Column */}
        <div className="col-lg-4">
          {/* Contact */}
          <div className="edu-card p-4 mb-4">
            <div className="section-title">Contact Details</div>
            {[
              { icon: 'bi-envelope', label: student.email },
              { icon: 'bi-telephone', label: student.phone },
              { icon: 'bi-geo-alt', label: student.address },
              { icon: 'bi-linkedin', label: student.linkedin },
              { icon: 'bi-github', label: student.github },
            ].map((item, i) => (
              <div key={i} className="d-flex align-items-center gap-3 mb-3">
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#4361ee20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`bi ${item.icon}`} style={{ color: '#4361ee', fontSize: 15 }} />
                </div>
                <span style={{ fontSize: 13, color: 'var(--text)', wordBreak: 'break-all' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="edu-card p-4">
            <div className="section-title">Skills</div>
            <div className="d-flex flex-wrap gap-2">
              {student.skills.map(skill => (
                <span key={skill} className="subject-pill" style={{ padding: '6px 14px', fontSize: 13, fontWeight: 600, borderRadius: 8 }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-8">
          {/* About */}
          <div className="edu-card p-4 mb-4">
            <div className="section-title">About Me</div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-muted)' }}>{student.bio}</p>
            <div className="row mt-3 g-3">
              {[
                { label: 'Date of Birth', value: new Date(student.dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) },
                { label: 'Student ID', value: student.id },
                { label: 'Joined', value: `Batch of ${student.joinedYear}` },
                { label: 'Email', value: student.email },
              ].map(info => (
                <div key={info.label} className="col-sm-6">
                  <div style={{ background: 'var(--surface-2)', borderRadius: 10, padding: '12px 16px' }}>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>{info.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginTop: 4 }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Timeline */}
          <div className="edu-card p-4">
            <div className="section-title">Academic Journey</div>
            <div className="timeline">
              {academicTimeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="d-flex align-items-start gap-3">
                    <div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)' }}>{item.year}</span>
                      <p style={{ fontSize: 14, color: 'var(--text)', margin: '4px 0 0' }}>{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
