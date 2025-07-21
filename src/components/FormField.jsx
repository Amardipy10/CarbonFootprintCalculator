import React from 'react';

const FormField = ({ field, value, onInputChange }) => {
  const { key, label, type, options, unit, min, max } = field;

  switch (type) {
    case 'select':
      return (
        <div className="mb-3">
          <label className="form-label fw-semibold">{label}</label>
          <select value={value} onChange={(e) => onInputChange(key, e.target.value)} className="form-select form-select-lg">
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
      );
    case 'number':
      return (
        <div className="mb-3">
          <label className="form-label fw-semibold">{label}</label>
          <div className="input-group input-group-lg">
            <input type="number" value={value} onChange={(e) => onInputChange(key, e.target.value)} className="form-control" />
            {unit && <span className="input-group-text">{unit}</span>}
          </div>
        </div>
      );
    case 'range':
      return (
        <div className="mb-3">
          <label className="form-label fw-semibold">{label}</label>
          <div className="d-flex align-items-center">
            <input type="range" min={min} max={max} value={value} onChange={(e) => onInputChange(key, e.target.value)} className="form-range" />
            <span className="fw-bold text-primary ms-3" style={{width: '60px'}}>{value}{unit}</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default FormField;