import React, { useState, useEffect } from 'react';
import { questionnaire, type Section } from '../data/questionnaire';
import FieldRenderer from './FieldRenderer';

// Recursive helper to set nested object properties from a dot-notation key
const setNestedValue = (obj: any, path: string, value: any) => {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  const lastObj = keys.reduce((o, key) => (o[key] = o[key] || {}), obj);
  lastObj[lastKey] = value;
};

const Wizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const totalSteps = questionnaire.length;
  const currentSection: Section = questionnaire[currentStep];

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('larafest_form_draft');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse draft');
      }
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('larafest_form_draft', JSON.stringify(formData));
    }
  }, [formData]);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleChange = (fieldId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const validateCurrentStep = () => {
    const fields = currentSection.fields;
    for (const field of fields) {
      if (field.required && !formData[field.id]) {
        setErrorMsg(`Le champ "${field.label}" est requis.`);
        return false;
      }
    }
    setErrorMsg('');
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setErrorMsg('');
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    setIsSubmitting(true);
    
    // Transform flat state (with dot keys) to nested object expected by backend
    const payload = {};
    Object.keys(formData).forEach(key => {
      setNestedValue(payload, key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:3001/api/responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) throw new Error('Erreur lors de l\'envoi');
      
      setIsSuccess(true);
      localStorage.removeItem('larafest_form_draft'); // clear draft
    } catch (err) {
      setErrorMsg('Une erreur est survenue lors de la soumission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep) / totalSteps) * 100;

  if (isSuccess) {
    return (
      <div className="wizard-card success-state">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2>Merci pour votre contribution !</h2>
        <p>Vos réponses aideront l'équipe d'organisation à construire un Larafest 2026 proche des besoins de la communauté.</p>
      </div>
    );
  }

  return (
    <div className="wizard-card">
      <div className="progress-container">
        <div className="progress-header">
          <span>Étape {currentStep + 1} sur {totalSteps}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="form-section">
        <h2 className="section-title">{currentSection.title}</h2>
        {currentSection.description && <p className="section-desc">{currentSection.description}</p>}
        
        {currentSection.fields.map(field => (
          <FieldRenderer
            key={field.id}
            field={field}
            value={formData[field.id]}
            onChange={handleChange}
          />
        ))}

        {errorMsg && <div className="error-msg">{errorMsg}</div>}
      </div>

      <div className="wizard-footer">
        <button 
          className="btn btn-secondary" 
          onClick={handlePrev} 
          disabled={currentStep === 0 || isSubmitting}
        >
          Précédent
        </button>
        
        {currentStep === totalSteps - 1 ? (
          <button 
            className="btn btn-primary" 
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi...' : 'Terminer'}
          </button>
        ) : (
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
          >
            Suivant
          </button>
        )}
      </div>
    </div>
  );
};

export default Wizard;
