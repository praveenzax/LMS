// src/components/common/ToastContainer.jsx
import { useNotification } from '../../context/NotificationContext';

const typeConfig = {
  success: { icon: 'bi-check-circle-fill', color: '#06d6a0' },
  error:   { icon: 'bi-x-circle-fill',     color: '#ef476f' },
  warning: { icon: 'bi-exclamation-triangle-fill', color: '#ffd166' },
  info:    { icon: 'bi-info-circle-fill',   color: '#4cc9f0' },
};

export default function ToastContainer() {
  const { toasts, removeToast } = useNotification();

  return (
    <div className="toast-container-custom">
      {toasts.map(toast => {
        const cfg = typeConfig[toast.type] || typeConfig.info;
        return (
          <div key={toast.id} className="edu-toast">
            <i className={`bi ${cfg.icon}`} style={{ color: cfg.color, fontSize: 20 }} />
            <div style={{ flex: 1 }}>
              {toast.title && <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{toast.title}</div>}
              <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>{toast.message}</div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }}
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
