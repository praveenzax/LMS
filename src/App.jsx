// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import PageWrapper from './components/layout/PageWrapper';

// Auth Pages
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

// Main Pages
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Notes from './pages/Notes';
import Journals from './pages/Journals';
import Achievements from './pages/Achievements';
import FDP from './pages/FDP';
import Assignments from './pages/Assignments';
import Attendance from './pages/Attendance';
import Calendar from './pages/Calendar';
import Notifications from './pages/Notifications';
import Projects from './pages/Projects';
import Library from './pages/Library';
import Placement from './pages/Placement';
import JobNotifications from './pages/JobNotifications';
import AIAssistant from './pages/AIAssistant';
import Settings from './pages/Settings';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected */}
      <Route path="/" element={<ProtectedRoute><PageWrapper><Dashboard /></PageWrapper></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><PageWrapper><Dashboard /></PageWrapper></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><PageWrapper><Profile /></PageWrapper></ProtectedRoute>} />
      <Route path="/notes" element={<ProtectedRoute><PageWrapper><Notes /></PageWrapper></ProtectedRoute>} />
      <Route path="/journals" element={<ProtectedRoute><PageWrapper><Journals /></PageWrapper></ProtectedRoute>} />
      <Route path="/achievements" element={<ProtectedRoute><PageWrapper><Achievements /></PageWrapper></ProtectedRoute>} />
      <Route path="/fdp" element={<ProtectedRoute><PageWrapper><FDP /></PageWrapper></ProtectedRoute>} />
      <Route path="/assignments" element={<ProtectedRoute><PageWrapper><Assignments /></PageWrapper></ProtectedRoute>} />
      <Route path="/attendance" element={<ProtectedRoute><PageWrapper><Attendance /></PageWrapper></ProtectedRoute>} />
      <Route path="/calendar" element={<ProtectedRoute><PageWrapper><Calendar /></PageWrapper></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><PageWrapper><Notifications /></PageWrapper></ProtectedRoute>} />
      <Route path="/projects" element={<ProtectedRoute><PageWrapper><Projects /></PageWrapper></ProtectedRoute>} />
      <Route path="/library" element={<ProtectedRoute><PageWrapper><Library /></PageWrapper></ProtectedRoute>} />
      <Route path="/placement" element={<ProtectedRoute><PageWrapper><Placement /></PageWrapper></ProtectedRoute>} />
      <Route path="/jobs" element={<ProtectedRoute><PageWrapper><JobNotifications /></PageWrapper></ProtectedRoute>} />
      <Route path="/ai-assistant" element={<ProtectedRoute><PageWrapper><AIAssistant /></PageWrapper></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><PageWrapper><Settings /></PageWrapper></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <NotificationProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </NotificationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
