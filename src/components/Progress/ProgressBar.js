import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgressBar = ({ color = 'bg-success', initialValue = 25 }) => {
  const [progress, setProgress] = useState(initialValue);

  // Function to handle progress change
  const handleProgressChange = (event) => {
    const value = parseInt(event.target.value);
    setProgress(value);
  };

  // Function to determine text color based on progress
  const getTextColor = () => {
    return progress > 50 ? 'text-white' : 'text-dark';
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Progress Tracker</h5>
              
              {/* Progress Bar */}
              <div className="progress" style={{ height: '25px' }}>
                <div
                  className={`progress-bar progress-bar-striped progress-bar-animated ${color}`}
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className={`${getTextColor()} fw-bold`}>
                    {progress}%
                  </span>
                </div>
              </div>

              {/* Progress Control */}
              <div className="mt-3">
                <label htmlFor="progressControl" className="form-label">
                  Adjust Progress
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="progressControl"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                />
              </div>

              {/* Progress Status */}
              <div className={`mt-2 text-${progress === 100 ? 'success' : 'secondary'}`}>
                <small>
                  {progress === 100 ? 'Task Completed!' : 'In Progress...'}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;