import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomTextarea = ({ inputLabel = "Enter your text", placeholder = "Type something..." }) => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="form-group">
            <label 
              htmlFor="formControlDefault" 
              className="form-label fw-semibold mb-2"
            >
              {inputLabel}
            </label>
            
            <textarea
              id="formControlDefault"
              className="form-control"
              value={text}
              onChange={handleTextChange}
              placeholder={placeholder}
              rows="4"
              style={{
                border: '1px solid gray',
                backgroundColor: 'rgb(240, 233, 233)',
                color: '#0c0c0c',
                padding: '8px',
                borderRadius: '5px',
                resize: 'vertical',
                minHeight: '100px'
              }}
            />
            
            <div className="d-flex justify-content-between mt-2">
              <small className="text-muted">
                {charCount} characters
              </small>
              <small className="text-muted">
                {text.trim() ? 'Typing...' : 'Ready to type'}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTextarea;