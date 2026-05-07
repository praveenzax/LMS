// src/pages/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 6) e.password = 'Min 6 characters';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    login(form);
    addToast('Welcome back, Arjun! 🎓', 'success', 'Login Successful');
    navigate('/dashboard');
  };

  const handleDemo = () => {
    setForm({ email: 'arjun@college.edu', password: 'password123', remember: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Logo */}
        <div className="text-center mb-4">
          <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg,#4361ee,#7209b7)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: 28 }}>
            <i className="bi bi-mortarboard-fill text-white" />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>EduPortal</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>Student LMS & Academic Portfolio</p>
        </div>

        <form onSubmit={handleSubmit} className="edu-form" noValidate>
          <div className="mb-3">
            <label className="form-label text-white-50">Email Address</label>
            <div className="position-relative">
              <i className="bi bi-envelope" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
              <input
                type="email"
                id="login-email"
                className={`form-control ps-5 ${errors.email ? 'is-invalid' : ''}`}
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                placeholder="you@college.edu"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label text-white-50">Password</label>
            <div className="position-relative">
              <i className="bi bi-lock" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
              <input
                type="password"
                id="login-password"
                className={`form-control ps-5 ${errors.password ? 'is-invalid' : ''}`}
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                placeholder="••••••••"
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember-me" checked={form.remember} onChange={e => setForm(f => ({ ...f, remember: e.target.checked }))} />
              <label className="form-check-label" htmlFor="remember-me" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>Remember me</label>
            </div>
            <Link to="/forgot-password" style={{ color: '#4cc9f0', fontSize: 13, textDecoration: 'none' }}>Forgot password?</Link>
          </div>

          <button id="login-submit-btn" type="submit" className="btn w-100 fw-600 mb-3" disabled={loading}
            style={{ background: 'linear-gradient(135deg,#4361ee,#3a0ca3)', color: '#fff', borderRadius: 10, padding: '12px', fontWeight: 600 }}>
            {loading ? <><span className="spinner-border spinner-border-sm me-2" />Signing in...</> : 'Sign In'}
          </button>

          <button type="button" className="btn w-100 mb-3" onClick={handleDemo}
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, fontSize: 13 }}>
            <i className="bi bi-lightning me-2" />Use Demo Credentials
          </button>

          <p className="text-center mb-0" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#4cc9f0', textDecoration: 'none', fontWeight: 600 }}>Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
