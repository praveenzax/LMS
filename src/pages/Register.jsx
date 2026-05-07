// src/pages/Register.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useNotification } from '../context/NotificationContext';

export default function Register() {
  const [form, setForm] = useState({ name: '', rollNo: '', branch: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToast } = useNotification();
  const navigate = useNavigate();

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Full name is required';
    if (!form.rollNo.trim()) err.rollNo = 'Roll number is required';
    if (!form.branch) err.branch = 'Select your branch';
    if (!form.email) err.email = 'Email required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = 'Invalid email';
    if (!form.password || form.password.length < 6) err.password = 'Min 6 characters';
    if (form.password !== form.confirm) err.confirm = 'Passwords do not match';
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    addToast('Account created! Please log in.', 'success', 'Registered!');
    navigate('/login');
  };

  const inp = (id, label, type, key, placeholder) => (
    <div className="mb-3">
      <label className="form-label" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>{label}</label>
      <input id={id} type={type} className={`form-control ${errors[key] ? 'is-invalid' : ''}`}
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
        placeholder={placeholder} value={form[key]} onChange={set(key)} />
      {errors[key] && <div className="invalid-feedback">{errors[key]}</div>}
    </div>
  );

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: 500 }}>
        <div className="text-center mb-4">
          <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg,#4361ee,#7209b7)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: 24 }}>
            <i className="bi bi-person-plus-fill text-white" />
          </div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>Create Account</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>Join EduPortal to manage your academics</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="row">
            <div className="col-6">{inp('reg-name', 'Full Name', 'text', 'name', 'Your full name')}</div>
            <div className="col-6">{inp('reg-roll', 'Roll Number', 'text', 'rollNo', 'CS2021XXX')}</div>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>Branch</label>
            <select id="reg-branch" className={`form-select ${errors.branch ? 'is-invalid' : ''}`}
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: form.branch ? '#fff' : 'rgba(255,255,255,0.4)' }}
              value={form.branch} onChange={set('branch')}>
              <option value="">Select Branch</option>
              <option value="CSE">Computer Science & Engineering</option>
              <option value="ECE">Electronics & Communication</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="EEE">Electrical & Electronics</option>
            </select>
            {errors.branch && <div className="invalid-feedback">{errors.branch}</div>}
          </div>
          {inp('reg-email', 'College Email', 'email', 'email', 'you@college.edu')}
          {inp('reg-password', 'Password', 'password', 'password', '••••••••')}
          {inp('reg-confirm', 'Confirm Password', 'password', 'confirm', '••••••••')}

          <button type="submit" id="register-submit-btn" className="btn w-100 fw-600 mb-3" disabled={loading}
            style={{ background: 'linear-gradient(135deg,#7209b7,#4361ee)', color: '#fff', borderRadius: 10, padding: '12px', fontWeight: 600 }}>
            {loading ? <><span className="spinner-border spinner-border-sm me-2" />Creating Account...</> : 'Create Account'}
          </button>
          <p className="text-center mb-0" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#4cc9f0', textDecoration: 'none', fontWeight: 600 }}>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
