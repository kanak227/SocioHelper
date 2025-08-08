import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { useLocalStorage } from './hooks/useLocalStorage';

type ViewMode = 'home' | 'login' | 'admin';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const { data, saveData } = useLocalStorage();

  const handleAdminLogin = () => {
    setViewMode('login');
  };

  const handleLoginAttempt = (success: boolean) => {
    if (success) {
      setIsAdminLoggedIn(true);
      setViewMode('admin');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setViewMode('home');
  };

  const handleBackToHome = () => {
    setViewMode('home');
  };

  if (viewMode === 'login') {
    return (
      <AdminLogin 
        onLogin={handleLoginAttempt} 
        onBack={handleBackToHome}
      />
    );
  }

  if (viewMode === 'admin' && isAdminLoggedIn) {
    return (
      <AdminDashboard 
        data={data} 
        onSave={saveData} 
        onLogout={handleLogout}
      />
    );
  }

  return (
    <HomePage 
      data={data} 
      onAdminLogin={handleAdminLogin}
    />
  );
}

export default App;