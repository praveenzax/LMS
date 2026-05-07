// src/pages/Calendar.jsx
import { useState } from 'react';
import { calendarEvents } from '../data/dummyData';
import { useNotification } from '../context/NotificationContext';

const eventTypeColors = { exam: '#ef476f', academic: '#4361ee', event: '#06d6a0', deadline: '#ffd166', placement: '#7209b7' };

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // Defaulting to June 2025 for dummy data
  const [selectedDate, setSelectedDate] = useState(null);
  const { addToast } = useNotification();

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push({ empty: true });
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    days.push({ date: i, fullDate: dateStr, events: calendarEvents[dateStr] || [] });
  }

  const selectedEvents = selectedDate ? calendarEvents[selectedDate] || [] : [];

  return (
    <div>
      <div className="page-header d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div>
          <h1 className="mb-1">Academic Calendar</h1>
          <p className="mb-0">Important dates, exams, and holidays</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }} onClick={() => setCurrentDate(new Date())}>Today</button>
          <div className="btn-group">
            <button className="btn btn-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }} onClick={prevMonth}><i className="bi bi-chevron-left" /></button>
            <button className="btn btn-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }} onClick={nextMonth}><i className="bi bi-chevron-right" /></button>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Calendar Grid */}
        <div className="col-lg-8">
          <div className="edu-card p-4">
            <div className="text-center mb-4">
              <h4 className="fw-bold m-0">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h4>
            </div>
            
            <div className="cal-grid mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} className="cal-header-day">{d}</div>)}
            </div>
            <div className="cal-grid">
              {days.map((day, idx) => {
                if (day.empty) return <div key={idx} className="cal-day other-month" />;
                const isSelected = selectedDate === day.fullDate;
                const hasEvents = day.events.length > 0;
                return (
                  <div key={idx} className={`cal-day ${hasEvents ? 'has-event' : ''} ${isSelected ? 'today' : ''}`}
                    onClick={() => setSelectedDate(day.fullDate)}
                    style={{ position: 'relative' }}>
                    {day.date}
                    {hasEvents && (
                      <div className="d-flex gap-1" style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)' }}>
                        {day.events.slice(0,3).map((e, i) => (
                          <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: isSelected ? '#fff' : eventTypeColors[e.type] }} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="col-lg-4">
          <div className="edu-card p-4 h-100">
            <div className="section-title">
              {selectedDate ? new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Select a date'}
            </div>
            
            {!selectedDate ? (
              <div className="empty-state py-4"><p>Click on any date to view events</p></div>
            ) : selectedEvents.length === 0 ? (
              <div className="empty-state py-4"><i className="bi bi-calendar-x" /><p>No events scheduled for this day.</p></div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {selectedEvents.map((ev, i) => (
                  <div key={i} className="d-flex align-items-center gap-3 p-3" style={{ background: 'var(--surface-2)', borderRadius: 10, borderLeft: `4px solid ${eventTypeColors[ev.type]}` }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', margin: '0 0 4px' }}>{ev.title}</p>
                      <span className="status-badge" style={{ background: `${eventTypeColors[ev.type]}20`, color: eventTypeColors[ev.type], padding: '2px 8px', fontSize: 10 }}>{ev.type}</span>
                    </div>
                    <button className="icon-btn" style={{ width: 32, height: 32, fontSize: 14 }} onClick={() => addToast(`Reminder set for ${ev.title}`, 'success')}><i className="bi bi-bell" /></button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5">
              <h6 className="fw-bold mb-3" style={{ fontSize: 13, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Legend</h6>
              <div className="d-flex flex-wrap gap-2">
                {Object.entries(eventTypeColors).map(([type, color]) => (
                  <div key={type} className="d-flex align-items-center gap-2" style={{ fontSize: 12, color: 'var(--text)' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
                    <span style={{ textTransform: 'capitalize' }}>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
