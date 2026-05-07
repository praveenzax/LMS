// src/pages/Settings.jsx
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNotification } from '../context/NotificationContext';
import { student } from '../data/dummyData';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { addToast } = useNotification();
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    addToast('Settings saved successfully!', 'success');
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="mb-1">Settings</h1>
        <p className="mb-0">Manage your account preferences and profile details</p>
      </div>

      <div className="row g-4">
        {/* Sidebar Tabs */}
        <div className="col-lg-3">
          <div className="edu-card p-3">
            {[
              { id: 'profile', icon: 'bi-person', label: 'Edit Profile' },
              { id: 'preferences', icon: 'bi-sliders', label: 'Preferences' },
              { id: 'security', icon: 'bi-shield-lock', label: 'Security' },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="btn w-100 text-start mb-1 fw-600"
                style={{ background: activeTab === tab.id ? 'var(--primary)' : 'transparent', color: activeTab === tab.id ? '#fff' : 'var(--text-muted)', borderRadius: 8, padding: '10px 16px', fontSize: 14 }}>
                <i className={`${tab.icon} me-2`} />{tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="col-lg-9">
          <div className="edu-card p-4 edu-form">
            <form onSubmit={handleSave}>
              
              {activeTab === 'profile' && (
                <>
                  <div className="section-title mb-4">Profile Information</div>
                  <div className="d-flex align-items-center gap-4 mb-4">
                    <img src={student.avatar} alt="Avatar" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <button type="button" className="btn btn-sm btn-outline-primary mb-2" style={{ fontWeight: 600 }}>Change Avatar</button>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>JPG, GIF or PNG. Max size of 2MB</div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input className="form-control" defaultValue={student.name} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address</label>
                      <input className="form-control" type="email" defaultValue={student.email} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <input className="form-control" defaultValue={student.phone} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Address</label>
                      <input className="form-control" defaultValue={student.address} />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Bio</label>
                      <textarea className="form-control" rows="4" defaultValue={student.bio} />
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'preferences' && (
                <>
                  <div className="section-title mb-4">App Preferences</div>
                  
                  <div className="d-flex align-items-center justify-content-between p-3 mb-3 border-custom" style={{ border: '1px solid var(--border)', borderRadius: 12 }}>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text)' }}>Dark Mode</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Toggle dark/light theme</div>
                    </div>
                    <div className="form-check form-switch" style={{ transform: 'scale(1.2)' }}>
                      <input className="form-check-input" type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} style={{ cursor: 'pointer' }} />
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between p-3 mb-3 border-custom" style={{ border: '1px solid var(--border)', borderRadius: 12 }}>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text)' }}>Email Notifications</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Receive assignment deadlines via email</div>
                    </div>
                    <div className="form-check form-switch" style={{ transform: 'scale(1.2)' }}>
                      <input className="form-check-input" type="checkbox" defaultChecked />
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'security' && (
                <>
                  <div className="section-title mb-4">Update Password</div>
                  <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input className="form-control" type="password" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input className="form-control" type="password" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Confirm New Password</label>
                    <input className="form-control" type="password" />
                  </div>
                </>
              )}

              <hr className="my-4" style={{ borderColor: 'var(--border)' }} />
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn-primary-custom px-4" disabled={loading}>
                  {loading ? <span className="spinner-border spinner-border-sm" /> : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
