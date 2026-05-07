// src/components/layout/Navbar.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';
import { student } from '../../data/dummyData';

const routeNames = {
  '/dashboard': 'Dashboard',
  '/profile': 'My Profile',
  '/notes': 'Lecture Notes',
  '/journals': 'My Journals',
  '/achievements': 'Achievements',
  '/fdp': 'FDP Programs',
  '/assignments': 'Assignments',
  '/attendance': 'Attendance',
  '/calendar': 'Academic Calendar',
  '/notifications': 'Notifications',
  '/projects': 'Projects',
  '/library': 'Digital Library',
  '/placement': 'Placement Prep',
  '/jobs': 'Job Notifications',
  '/ai-assistant': 'AI Study Assistant',
  '/settings': 'Settings',
};

export default function Navbar({ onToggleSidebar }) {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const { addToast } = useNotification();
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle = routeNames[location.pathname] || 'EduPortal';

  const handleLogout = () => {
    logout();
    addToast('Logged out successfully.', 'success', 'Goodbye!');
    navigate('/login');
  };

  return (
    <header className="topbar">
      {/* Hamburger */}
      <button className="icon-btn border-0 me-2" onClick={onToggleSidebar} id="sidebar-toggle-btn">
        <i className="bi bi-list" style={{ fontSize: 20 }} />
      </button>

      {/* Page Title */}
      <h6 className="mb-0 fw-700 d-none d-md-block" style={{ fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap' }}>
        {pageTitle}
      </h6>

      {/* Search */}
      <div className="topbar-search ms-3 position-relative d-none d-lg-block">
        <i className="bi bi-search search-icon" />
        <input
          type="text"
          className="form-control"
          placeholder="Search notes, subjects..."
          id="topbar-search-input"
        />
      </div>

      {/* Actions */}
      <div className="topbar-actions">
        {/* Theme Toggle */}
        <button className="icon-btn" onClick={toggleTheme} title="Toggle theme" id="theme-toggle-btn">
          <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}`} />
        </button>

        {/* Notifications */}
        <button className="icon-btn" onClick={() => navigate('/notifications')} title="Notifications" id="notif-btn">
          <i className="bi bi-bell" />
          <span className="notif-badge" />
        </button>

        {/* Avatar Dropdown */}
        <div className="dropdown">
          <button
            className="avatar-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="avatar-dropdown-btn"
          >
            <img src={student.avatar} alt="Avatar" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow border-0" style={{ background: 'var(--surface)', minWidth: 200, borderRadius: 12, marginTop: 8 }}>
            <li className="px-3 py-2" style={{ borderBottom: '1px solid var(--border)' }}>
              <div className="fw-600" style={{ fontSize: 14, color: 'var(--text)', fontWeight: 600 }}>{student.name}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{student.rollNumber}</div>
            </li>
            <li><button className="dropdown-item" style={{ color: 'var(--text)', fontSize: 14 }} onClick={() => navigate('/profile')}><i className="bi bi-person me-2" />Profile</button></li>
            <li><button className="dropdown-item" style={{ color: 'var(--text)', fontSize: 14 }} onClick={() => navigate('/settings')}><i className="bi bi-gear me-2" />Settings</button></li>
            <li><hr className="dropdown-divider" style={{ borderColor: 'var(--border)' }} /></li>
            <li><button className="dropdown-item" style={{ color: '#ef476f', fontSize: 14 }} onClick={handleLogout}><i className="bi bi-box-arrow-left me-2" />Logout</button></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
