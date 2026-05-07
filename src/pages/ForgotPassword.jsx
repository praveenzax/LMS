// src/pages/ForgotPassword.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNotification } from '../context/NotificationContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
    addToast('Reset link sent to your email!', 'success', 'Email Sent');
  };

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: 400 }}>
        <div className="text-center mb-4">
          <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg,#ffd166,#fb8500)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: 24 }}>
            <i className="bi bi-key-fill text-white" />
          </div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>Forgot Password?</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>Enter your email and we'll send you a reset link</p>
        </div>

        {sent ? (
          <div className="text-center p-4" style={{ background: 'rgba(6,214,160,0.1)', borderRadius: 12, border: '1px solid rgba(6,214,160,0.3)' }}>
            <i className="bi bi-envelope-check-fill" style={{ fontSize: 40, color: '#06d6a0' }} />
            <p className="mt-3 mb-1 fw-600" style={{ color: '#06d6a0', fontWeight: 600 }}>Check your inbox!</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Reset link sent to <strong style={{ color: '#fff' }}>{email}</strong></p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>College Email Address</label>
              <input id="forgot-email" type="email" className="form-control" required
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                placeholder="you@college.edu" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button type="submit" id="forgot-submit-btn" className="btn w-100 mb-3" disabled={loading}
              style={{ background: 'linear-gradient(135deg,#ffd166,#fb8500)', color: '#111', borderRadius: 10, padding: '12px', fontWeight: 600 }}>
              {loading ? <><span className="spinner-border spinner-border-sm me-2" />Sending...</> : 'Send Reset Link'}
            </button>
          </form>
        )}

        <p className="text-center mt-3 mb-0" style={{ fontSize: 13 }}>
          <Link to="/login" style={{ color: '#4cc9f0', textDecoration: 'none' }}>
            <i className="bi bi-arrow-left me-1" />Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
