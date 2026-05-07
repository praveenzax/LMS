// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('edu-user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (credentials) => {
    // Dummy login – accept any email/password for demo
    const userData = { email: credentials.email, name: 'Arjun Sharma', role: 'student' };
    setUser(userData);
    localStorage.setItem('edu-user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edu-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
