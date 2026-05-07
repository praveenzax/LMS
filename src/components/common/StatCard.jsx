// src/components/common/StatCard.jsx
import { useEffect, useRef, useState } from 'react';

function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function StatCard({ title, value, icon, gradient, suffix = '', change }) {
  const count = useCounter(typeof value === 'number' ? value : 0);

  return (
    <div className={`grad-card ${gradient}`} style={{ height: '100%' }}>
      <div className="d-flex justify-content-between align-items-start" style={{ position: 'relative', zIndex: 1 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, opacity: 0.85, marginBottom: 8 }}>{title}</p>
          <div className="stat-number">{typeof value === 'number' ? count : value}{suffix}</div>
          {change && (
            <div style={{ fontSize: 12, marginTop: 6, opacity: 0.8 }}>
              <i className={`bi ${change > 0 ? 'bi-arrow-up' : 'bi-arrow-down'} me-1`} />
              {Math.abs(change)}% vs last semester
            </div>
          )}
        </div>
        <div style={{ fontSize: 36, opacity: 0.8 }}>
          <i className={`bi ${icon}`} />
        </div>
      </div>
    </div>
  );
}
