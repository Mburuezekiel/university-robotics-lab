import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomInput = ({ 
  inputLabel = "Enter text", 
  initialValue = "", 
  placeholder = "Type here...",
  type = "text"
}) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="form-group position-relative">
            <label 
              htmlFor="formControlDefault" 
              className="form-label fw-semibold mb-2"
            >
              {inputLabel}
            </label>
            
            <input
              type={type}
              id="formControlDefault"
              className={`form-control ${isFocused ? 'shadow-sm' : ''}`}
              value={value}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              style={{
                border: '1px solid gray',
                backgroundColor: 'rgb(240, 233, 233)',
                color: '#0c0c0c',
                padding: '8px 12px',
                width: '100%',
                borderRadius: '5px',
                transition: 'box-shadow 0.2s ease'
              }}
            />
            
            {/* Input status indicator */}
            <div className="mt-1 d-flex justify-content-between">
              <small className="text-muted">
                {value.length > 0 ? `${value.length} characters` : 'Empty'}
              </small>
              {isFocused && (
                <small className="text-primary">
                  Editing...
                </small>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomInput;