import React, { useEffect, useState } from 'react';
import { questionnaire, type Field } from '../data/questionnaire';

interface DashboardProps {
  password: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ password, onLogout }) => {
  const [responses, setResponses] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/responses', {
          headers: {
            'x-admin-password': password
          }
        });

        if (!res.ok) {
          throw new Error('Mot de passe incorrect ou erreur serveur');
        }

        const data = await res.json();
        setResponses(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, [password]);

  if (loading) return <div className="loading">Chargement des statistiques...</div>;
  if (error) return <div className="error-state">{error} <button onClick={onLogout} className="btn btn-secondary">Retour</button></div>;

  const totalResponses = responses.length;

  const renderFieldStats = (field: Field) => {
    if (field.type === 'radio' || field.type === 'checkbox') {
      const counts: Record<string, number> = {};
      field.options?.forEach(opt => counts[opt.value] = 0);
      
      responses.forEach(res => {
        const keys = field.id.split('.');
        let val = res;
        for (const k of keys) {
           if (val) val = val[k];
        }
        
        if (val) {
          if (Array.isArray(val)) {
            val.forEach(v => {
              if (counts[v] !== undefined) counts[v]++;
              else counts[v] = 1;
            });
          } else {
            if (counts[val] !== undefined) counts[val]++;
            else counts[val] = 1;
          }
        }
      });

      return (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {field.options?.map((opt, i) => {
            const count = counts[opt.value] || 0;
            const pct = totalResponses ? Math.round((count / totalResponses) * 100) : 0;
            return (
              <li key={i} style={{ marginBottom: '8px', fontSize: '0.95rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
                <span style={{ paddingRight: '1rem' }}>{opt.label}</span>
                <strong style={{ whiteSpace: 'nowrap' }}>{count} ({pct}%)</strong>
              </li>
            );
          })}
        </ul>
      );
    } else {
      const texts: string[] = [];
      responses.forEach(res => {
        const keys = field.id.split('.');
        let val = res;
        for (const k of keys) {
           if (val) val = val[k];
        }
        if (val && typeof val === 'string' && val.trim() !== '') {
          texts.push(val);
        }
      });

      const recent = texts.slice(-5).reverse();

      return (
        <div style={{ maxHeight: '150px', overflowY: 'auto', background: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
          {recent.length > 0 ? recent.map((t, i) => (
             <div key={i} style={{ marginBottom: '8px', borderBottom: '1px solid #ddd', paddingBottom: '4px', fontSize: '0.9rem', fontStyle: 'italic' }}>
               "{t}"
             </div>
          )) : <div style={{ fontSize: '0.9rem', color: '#666' }}>Aucune réponse textuelle.</div>}
          {texts.length > 5 && <div style={{ fontSize: '0.8rem', color: '#888', textAlign: 'center', marginTop: '5px' }}>+ {texts.length - 5} autres réponses</div>}
        </div>
      );
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Dashboard Larafest 2026</h1>
        <button onClick={onLogout} className="btn btn-secondary">Déconnexion</button>
      </header>

      <main className="dashboard-main">
        <div className="stat-card total-card" style={{ marginBottom: '2rem' }}>
          <h3>Total des participants ayant répondu</h3>
          <p className="stat-number">{totalResponses}</p>
        </div>

        {questionnaire.map((section) => (
          <div key={section.id} className="dashboard-section" style={{ marginBottom: '3rem' }}>
            <h2 style={{ borderBottom: '2px solid #FF2D20', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>{section.title}</h2>
            <div className="charts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {section.fields.map((field) => (
                <div key={field.id} className="stat-card" style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.4' }}>{field.label}</h4>
                  {renderFieldStats(field)}
                </div>
              ))}
            </div>
          </div>
        ))}

      </main>
    </div>
  );
};

export default Dashboard;
