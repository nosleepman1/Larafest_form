import React, { useState } from 'react';

interface LoginProps {
  onLogin: (password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Larafest Admin</h1>
        <p className="login-subtitle">Veuillez entrer le mot de passe d'administration</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="text-input"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
