import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Breadcrumb Component
const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

// TextField Component
const TextField = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    areaName: '',
    areaDescription1: '',
    areaDescription2: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Settings updated successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  return (
    <div className="container-fluid mt-4">
      <Breadcrumb pageTitle="Settings" />

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4">Settings</h4>
                
                <TextField
                  label="Area Name"
                  name="areaName"
                  value={formData.areaName}
                  onChange={handleInputChange}
                  placeholder="Enter area name"
                />

                <TextField
                  label="Area Description"
                  name="areaDescription1"
                  value={formData.areaDescription1}
                  onChange={handleInputChange}
                  placeholder="Enter first area description"
                />

                <TextField
                  label="Additional Description"
                  name="areaDescription2"
                  value={formData.areaDescription2}
                  onChange={handleInputChange}
                  placeholder="Enter additional description"
                />

                <button type="submit" className="btn btn-success mt-4">
                  <i className="fas fa-save me-2"></i>
                  Save Settings
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="card-title mb-3">
                  <i className="fa-solid fa-circle-info text-primary me-2"></i>
                  Notes & Guidelines
                </h6>
                <div className="alert alert-light mb-0">
                  <ul className="mb-0 ps-3">
                    <li className="mb-2">Area names should be unique and descriptive</li>
                    <li className="mb-2">Descriptions should provide clear details about the area's purpose</li>
                    <li>All fields are required for proper configuration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <h6 className="card-title mb-3">
                  <i className="fa-solid fa-clock text-warning me-2"></i>
                  Recent Changes
                </h6>
                <div className="timeline small">
                  <div className="timeline-item mb-2 pb-2 border-bottom">
                    <div className="text-muted mb-1">Today, 2:30 PM</div>
                    <div>Updated area descriptions</div>
                  </div>
                  <div className="timeline-item">
                    <div className="text-muted mb-1">Yesterday, 4:15 PM</div>
                    <div>Modified area names</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SettingsForm;