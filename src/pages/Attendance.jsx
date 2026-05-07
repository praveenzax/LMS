// src/pages/Attendance.jsx
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { stats, subjectAttendance } from '../data/dummyData';

export default function Attendance() {
  const pieData = [
    { name: 'Attended', value: subjectAttendance.reduce((a, b) => a + b.attended, 0), color: '#06d6a0' },
    { name: 'Missed', value: subjectAttendance.reduce((a, b) => a + (b.total - b.attended), 0), color: '#ef476f' },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="mb-1">Attendance Tracker</h1>
        <p className="mb-0">Monitor your subject-wise attendance and warnings</p>
      </div>

      <div className="row g-4 mb-4">
        {/* Overall Stats */}
        <div className="col-lg-4">
          <div className="edu-card p-4 h-100 d-flex flex-column align-items-center justify-content-center">
            <div className="section-title w-100 text-start">Overall Attendance</div>
            <div style={{ position: 'relative', width: 200, height: 200, margin: '20px 0' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={90} paddingAngle={5} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{stats.attendancePercent}%</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginTop: 4 }}>TOTAL</div>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-around mt-3">
              <div className="text-center">
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#06d6a0' }}>{pieData[0].value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Classes Attended</div>
              </div>
              <div className="text-center">
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ef476f' }}>{pieData[1].value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Classes Missed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info & Alerts */}
        <div className="col-lg-8">
          <div className="edu-card p-4 mb-4" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', color: '#fff' }}>
            <h5 style={{ fontWeight: 700, marginBottom: 12 }}><i className="bi bi-info-circle-fill me-2" />Attendance Criteria</h5>
            <p style={{ fontSize: 14, opacity: 0.9, marginBottom: 0, lineHeight: 1.6 }}>
              A minimum of <strong>75% attendance</strong> is required overall and in each individual subject to be eligible for the end-semester examinations. Medical leaves must be submitted to the HOD within 3 days of absence.
            </p>
          </div>

          <div className="edu-card p-4">
            <div className="section-title">Critical Alerts</div>
            {subjectAttendance.filter(s => s.percent < 80).length === 0 ? (
              <div className="d-flex align-items-center gap-3 p-3" style={{ background: '#06d6a015', borderRadius: 10, color: '#06d6a0' }}>
                <i className="bi bi-check-circle-fill fs-4" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>Looking Good!</div>
                  <div style={{ fontSize: 13 }}>You don't have any subjects with critically low attendance.</div>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column gap-2">
                {subjectAttendance.filter(s => s.percent < 80).map(s => (
                  <div key={s.code} className="d-flex align-items-center gap-3 p-3" style={{ background: s.percent < 75 ? '#ef476f15' : '#ffd16615', borderRadius: 10 }}>
                    <i className={`bi ${s.percent < 75 ? 'bi-exclamation-octagon-fill text-danger' : 'bi-exclamation-triangle-fill text-warning'} fs-4`} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{s.subject} ({s.code})</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Current: {s.percent}% — Need {s.percent < 75 ? Math.ceil((0.75 * s.total - s.attended) / 0.25) : 0} more classes to secure 75%</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subject-wise Table */}
      <div className="edu-card overflow-hidden">
        <div className="p-4 border-bottom border-custom">
          <h6 className="mb-0 fw-bold">Subject-wise Breakdown</h6>
        </div>
        <div className="table-responsive">
          <table className="edu-table w-100">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th className="text-center">Attended</th>
                <th className="text-center">Total Classes</th>
                <th>Progress</th>
                <th className="text-end">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {subjectAttendance.map(s => (
                <tr key={s.code}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{s.code}</td>
                  <td style={{ fontWeight: 600, fontSize: 14 }}>{s.subject}</td>
                  <td className="text-center text-success fw-bold">{s.attended}</td>
                  <td className="text-center fw-bold">{s.total}</td>
                  <td style={{ width: '30%' }}>
                    <div className="edu-progress">
                      <div className="edu-progress-bar" style={{ width: `${s.percent}%`, background: s.percent < 75 ? 'var(--danger)' : s.percent < 85 ? 'var(--warning)' : 'var(--success)' }} />
                    </div>
                  </td>
                  <td className="text-end fw-bold" style={{ color: s.percent < 75 ? 'var(--danger)' : s.percent < 85 ? 'var(--warning)' : 'var(--success)' }}>
                    {s.percent}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
