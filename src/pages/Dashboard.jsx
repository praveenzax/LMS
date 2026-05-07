// src/pages/Dashboard.jsx
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';
import StatCard from '../components/common/StatCard';
import { stats, recentActivities, upcomingEvents, semesterPerformance, subjectAttendance, student } from '../data/dummyData';

const quickLinks = [
  { label: 'Upload Notes', icon: 'bi-cloud-upload', to: '/notes', color: '#4361ee' },
  { label: 'New Journal', icon: 'bi-journal-plus', to: '/journals', color: '#7209b7' },
  { label: 'Assignments', icon: 'bi-clipboard-check', to: '/assignments', color: '#ef476f' },
  { label: 'Attendance', icon: 'bi-calendar3', to: '/attendance', color: '#06d6a0' },
  { label: 'Library', icon: 'bi-book', to: '/library', color: '#fb8500' },
  { label: 'AI Assistant', icon: 'bi-robot', to: '/ai-assistant', color: '#4cc9f0' },
];

const eventTypeColors = { exam: '#ef476f', academic: '#4361ee', event: '#06d6a0', deadline: '#ffd166', placement: '#7209b7' };

export default function Dashboard() {
  const navigate = useNavigate();
  const attendanceData = [{ name: 'Present', value: stats.attendancePercent, fill: '#06d6a0' }, { name: 'Absent', value: 100 - stats.attendancePercent, fill: '#1a1a2e' }];

  return (
    <div>
      {/* Welcome Banner */}
      <div className="grad-card grad-blue mb-4" style={{ padding: '28px 32px' }}>
        <div className="row align-items-center">
          <div className="col-md-8">
            <p style={{ opacity: 0.75, marginBottom: 6, fontSize: 14 }}>Good morning 👋</p>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>Welcome back, {student.name.split(' ')[0]}!</h1>
            <p style={{ opacity: 0.7, fontSize: 14, marginBottom: 16 }}>Semester {student.semester} · {student.branch}</p>
            <div className="d-flex flex-wrap gap-3">
              <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 8, padding: '6px 14px', fontSize: 13 }}>
                <i className="bi bi-award me-2" />CGPA: <strong>{student.cgpa}</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 8, padding: '6px 14px', fontSize: 13 }}>
                <i className="bi bi-calendar3 me-2" />Roll: <strong>{student.rollNumber}</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 8, padding: '6px 14px', fontSize: 13 }}>
                <i className="bi bi-graph-up me-2" />Attendance: <strong>{stats.attendancePercent}%</strong>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-flex justify-content-end">
            <img src={student.avatar} alt="Avatar" style={{ width: 90, height: 90, borderRadius: '50%', border: '3px solid rgba(255,255,255,0.4)', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-lg-2"><StatCard title="Lecture Notes" value={stats.totalNotes} icon="bi-file-earmark-text" gradient="grad-blue" change={12} /></div>
        <div className="col-6 col-lg-2"><StatCard title="Journals" value={stats.journalsUploaded} icon="bi-journal-bookmark" gradient="grad-purple" /></div>
        <div className="col-6 col-lg-2"><StatCard title="Certificates" value={stats.certificatesEarned} icon="bi-award" gradient="grad-pink" change={5} /></div>
        <div className="col-6 col-lg-2"><StatCard title="FDP Programs" value={stats.fdpAttended} icon="bi-people" gradient="grad-teal" /></div>
        <div className="col-6 col-lg-2"><StatCard title="Assignments Done" value={stats.assignmentsSubmitted} icon="bi-clipboard-check" gradient="grad-orange" /></div>
        <div className="col-6 col-lg-2"><StatCard title="Attendance" value={stats.attendancePercent} suffix="%" icon="bi-graph-up" gradient="grad-indigo" /></div>
      </div>

      {/* Quick Links */}
      <div className="mb-4">
        <div className="section-title">Quick Access</div>
        <div className="row g-3">
          {quickLinks.map(ql => (
            <div key={ql.label} className="col-6 col-md-4 col-lg-2">
              <button onClick={() => navigate(ql.to)}
                className="edu-card w-100 d-flex flex-column align-items-center justify-content-center py-4 border-0"
                style={{ cursor: 'pointer', gap: 10, background: 'var(--surface)' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${ql.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`bi ${ql.icon}`} style={{ fontSize: 22, color: ql.color }} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{ql.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Row */}
      <div className="row g-3 mb-4">
        {/* Semester Performance Chart */}
        <div className="col-lg-8">
          <div className="edu-card p-4" style={{ height: '100%' }}>
            <div className="section-title">Semester Performance (SGPA)</div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={semesterPerformance} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="sem" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                <YAxis domain={[6, 10]} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }} />
                <Bar dataKey="sgpa" fill="url(#blueGrad)" radius={[6, 6, 0, 0]} />
                <defs>
                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4361ee" />
                    <stop offset="100%" stopColor="#3a0ca3" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Widget */}
        <div className="col-lg-4">
          <div className="edu-card p-4" style={{ height: '100%' }}>
            <div className="section-title">Overall Attendance</div>
            <div className="text-center">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="65" fill="none" stroke="var(--border)" strokeWidth="14" />
                  <circle cx="80" cy="80" r="65" fill="none" stroke="#06d6a0" strokeWidth="14"
                    strokeDasharray={`${(stats.attendancePercent / 100) * 408} 408`}
                    strokeLinecap="round" transform="rotate(-90 80 80)" style={{ transition: 'stroke-dasharray 1.5s ease' }} />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#06d6a0' }}>{stats.attendancePercent}%</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>PRESENT</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>
                {stats.attendancePercent >= 75 ? '✅ Attendance criteria met' : '⚠️ Low attendance – take action!'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity & Events Row */}
      <div className="row g-3">
        {/* Recent Activity */}
        <div className="col-lg-7">
          <div className="edu-card p-4">
            <div className="section-title">Recent Activity</div>
            <div className="d-flex flex-column gap-3">
              {recentActivities.map(act => (
                <div key={act.id} className="d-flex align-items-center gap-3" style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: `${act.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`bi ${act.icon}`} style={{ color: act.color, fontSize: 16 }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{act.text}</p>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="col-lg-5">
          <div className="edu-card p-4">
            <div className="section-title">Upcoming Events</div>
            <div className="d-flex flex-column gap-2">
              {upcomingEvents.map(ev => (
                <div key={ev.id} className="d-flex align-items-center gap-3 p-3" style={{ background: 'var(--surface-2)', borderRadius: 10 }}>
                  <div style={{ width: 4, height: 44, background: eventTypeColors[ev.type] || '#4361ee', borderRadius: 99, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', margin: 0 }}>{ev.title}</p>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{new Date(ev.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <span className="status-badge" style={{ background: `${eventTypeColors[ev.type]}20`, color: eventTypeColors[ev.type] }}>{ev.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
