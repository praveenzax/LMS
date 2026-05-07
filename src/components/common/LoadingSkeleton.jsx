// src/components/common/LoadingSkeleton.jsx
export default function LoadingSkeleton({ rows = 4, height = 60 }) {
  return (
    <div className="d-flex flex-column gap-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="skeleton" style={{ height, borderRadius: 12 }} />
      ))}
    </div>
  );
}

export function CardSkeleton({ count = 3 }) {
  return (
    <div className="row g-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="col-md-4">
          <div className="edu-card p-4">
            <div className="skeleton mb-3" style={{ height: 20, width: '60%' }} />
            <div className="skeleton mb-2" style={{ height: 14, width: '90%' }} />
            <div className="skeleton" style={{ height: 14, width: '70%' }} />
          </div>
        </div>
      ))}
    </div>
  );
}
