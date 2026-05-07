// src/components/layout/PageWrapper.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ToastContainer from '../common/ToastContainer';

export default function PageWrapper({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    // On desktop: collapse/expand. On mobile: open/close overlay
    if (window.innerWidth < 992) {
      setMobileOpen(o => !o);
    } else {
      setCollapsed(c => !c);
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        collapsed={collapsed}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <div className={`main-content ${collapsed ? 'sidebar-collapsed' : ''}`}>
        <Navbar onToggleSidebar={toggleSidebar} />
        <main className="page-content">
          {children}
        </main>
      </div>
      <ToastContainer />
    </div>
  );
}
