import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [password, setPassword] = useState<string | null>(null);

  const handleLogin = (pass: string) => {
    setPassword(pass);
  };

  const handleLogout = () => {
    setPassword(null);
  };

  return (
    <div className="admin-app">
      {!password ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard password={password} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
