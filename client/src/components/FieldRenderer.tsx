import React from 'react';
import type { Field } from '../data/questionnaire';

interface FieldRendererProps {
  field: Field;
  value: any;
  onChange: (fieldId: string, value: any) => void;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field, value, onChange }) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(field.id, e.target.value);
  };

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? [...value] : [];
    if (checked) {
      currentValues.push(optionValue);
    } else {
      const index = currentValues.indexOf(optionValue);
      if (index > -1) currentValues.splice(index, 1);
    }
    onChange(field.id, currentValues);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(field.id, e.target.value);
  };

  return (
    <div className="field-group">
      <label className="field-label">
        {field.label} {field.required && <span style={{ color: 'var(--color-primary)' }}>*</span>}
      </label>

      {field.type === 'radio' && field.options && (
        <div className="options-grid">
          {field.options.map((option) => (
            <label 
              key={option.value} 
              className={`option-card ${value === option.value ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name={field.name}
                value={option.value}
                checked={value === option.value}
                onChange={handleRadioChange}
                className="option-input"
              />
              <span className="option-text">{option.label}</span>
            </label>
          ))}
        </div>
      )}

      {field.type === 'checkbox' && field.options && (
        <div className="options-grid">
          {field.options.map((option) => {
            const isChecked = Array.isArray(value) && value.includes(option.value);
            return (
              <label 
                key={option.value} 
                className={`option-card ${isChecked ? 'selected' : ''}`}
              >
                <input
                  type="checkbox"
                  name={field.name}
                  value={option.value}
                  checked={isChecked}
                  onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                  className="option-input"
                />
                <span className="option-text">{option.label}</span>
              </label>
            );
          })}
        </div>
      )}

      {field.type === 'text' && (
        <input
          type="text"
          className="text-input"
          placeholder={field.placeholder}
          value={value || ''}
          onChange={handleTextChange}
        />
      )}

      {field.type === 'textarea' && (
        <textarea
          className="text-input"
          placeholder={field.placeholder}
          value={value || ''}
          onChange={handleTextChange}
        />
      )}
    </div>
  );
};

export default FieldRenderer;
