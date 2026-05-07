// src/components/layout/Sidebar.jsx
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';

const navSections = [
  {
    label: 'Main',
    items: [
      { to: '/dashboard', icon: 'bi-grid-1x2', label: 'Dashboard' },
      { to: '/profile', icon: 'bi-person-circle', label: 'My Profile' },
      { to: '/notifications', icon: 'bi-bell', label: 'Notifications', dot: true },
    ],
  },
  {
    label: 'Academics',
    items: [
      { to: '/notes', icon: 'bi-file-earmark-text', label: 'Lecture Notes' },
      { to: '/journals', icon: 'bi-journal-bookmark', label: 'My Journals' },
      { to: '/assignments', icon: 'bi-clipboard-check', label: 'Assignments' },
      { to: '/attendance', icon: 'bi-calendar3', label: 'Attendance' },
      { to: '/calendar', icon: 'bi-calendar-event', label: 'Academic Calendar' },
    ],
  },
  {
    label: 'Portfolio',
    items: [
      { to: '/achievements', icon: 'bi-award', label: 'Achievements' },
      { to: '/fdp', icon: 'bi-people', label: 'FDP Programs' },
      { to: '/projects', icon: 'bi-code-square', label: 'Projects' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { to: '/library', icon: 'bi-book', label: 'Digital Library' },
      { to: '/placement', icon: 'bi-briefcase', label: 'Placement Prep' },
      { to: '/jobs', icon: 'bi-megaphone', label: 'Job Notifications' },
      { to: '/ai-assistant', icon: 'bi-robot', label: 'AI Assistant' },
    ],
  },
  {
    label: 'Account',
    items: [
      { to: '/settings', icon: 'bi-gear', label: 'Settings' },
    ],
  },
];

export default function Sidebar({ collapsed, open, onClose }) {
  const { logout } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    addToast('Logged out successfully.', 'info', 'Goodbye!');
    navigate('/login');
  };

  return (
    <>
      <div className={`sidebar-overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${open ? 'open' : ''}`}>
        {/* Brand */}
        <NavLink to="/dashboard" className="sidebar-brand" onClick={onClose}>
          <div className="brand-icon"><i className="bi bi-mortarboard-fill" /></div>
          <span className="brand-text">EduPortal</span>
        </NavLink>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navSections.map(section => (
            <div key={section.label}>
              <div className="nav-section-label">{section.label}</div>
              {section.items.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                  onClick={onClose}
                  title={collapsed ? item.label : ''}
                >
                  <i className={`bi ${item.icon}`} />
                  <span className="nav-label">{item.label}</span>
                  {item.dot && <span className="badge-dot" />}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <button
            className="nav-item-link w-100 border-0 text-start"
            style={{ background: 'none' }}
            onClick={handleLogout}
            title={collapsed ? 'Logout' : ''}
          >
            <i className="bi bi-box-arrow-left" style={{ color: '#ef476f' }} />
            <span className="nav-label" style={{ color: '#ef476f' }}>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
