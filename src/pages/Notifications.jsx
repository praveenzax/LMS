// src/pages/Notifications.jsx
import { useState } from 'react';
import { notifications as initialNotifications } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState('All');
  const { addToast } = useNotification();

  const filtered = filter === 'All' ? notifications : notifications.filter(n => n.read === (filter === 'Read'));

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    addToast('All notifications marked as read', 'success');
  };

  const markRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotif = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div>
      <div className="page-header d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 className="mb-1">Notifications</h1>
          <p className="mb-0">Stay updated with your latest alerts and messages</p>
        </div>
        <button className="btn-primary-custom" onClick={markAllRead}>
          <i className="bi bi-check2-all me-2" />Mark All as Read
        </button>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* Tabs */}
          <div className="d-flex gap-3 border-bottom border-custom mb-4 pb-2">
            {['All', 'Unread', 'Read'].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className="btn border-0 fw-bold"
                style={{ color: filter === f ? 'var(--primary)' : 'var(--text-muted)', borderBottom: filter === f ? '3px solid var(--primary)' : '3px solid transparent', borderRadius: 0, paddingBottom: 10 }}>
                {f} {f === 'Unread' && <span className="badge bg-danger ms-2 rounded-pill">{notifications.filter(n => !n.read).length}</span>}
              </button>
            ))}
          </div>

          {/* List */}
          {filtered.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-bell-slash" />
              <p>You have no {filter.toLowerCase()} notifications.</p>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {filtered.map(n => (
                <div key={n.id} className="edu-card p-4 d-flex align-items-start gap-3" style={{ opacity: n.read ? 0.7 : 1, transition: 'var(--transition)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${n.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`bi ${n.icon}`} style={{ fontSize: 20, color: n.color }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h6 style={{ fontWeight: n.read ? 600 : 700, margin: 0, color: 'var(--text)' }}>
                        {n.title} {!n.read && <span style={{ width: 8, height: 8, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', marginLeft: 8 }} />}
                      </h6>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{n.time}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{n.message}</p>
                  </div>
                  <div className="d-flex flex-column gap-2 ms-2">
                    {!n.read && <button className="icon-btn" style={{ width: 32, height: 32 }} onClick={() => markRead(n.id)} title="Mark as read"><i className="bi bi-check2 text-success" /></button>}
                    <button className="icon-btn" style={{ width: 32, height: 32 }} onClick={() => deleteNotif(n.id)} title="Delete"><i className="bi bi-trash text-danger" /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
