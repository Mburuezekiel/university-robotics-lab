import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';

const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

const AddCabinet = () => {
  const [cabinetName, setCabinetName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simulating API call with static data
    if (cabinetName.trim()) {
      // Success scenario
      setToastMessage('Cabinet added successfully!');
      setToastVariant('success');
      setShowToast(true);
      
      // Simulate navigation after success
      setTimeout(() => {
        navigate('/cabinets/1');
      }, 2000);
    } else {
      // Error scenario
      setToastMessage('Please enter a cabinet name');
      setToastVariant('danger');
      setShowToast(true);
    }
  };

  return (
    <div className="container-fluid">
      <div className="add-area mt-2">
        <Breadcrumb pageTitle="Add Cabinet" />
      </div>

      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={3000} 
          autohide 
          bg={toastVariant}
          className="text-white"
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Add Cabinet</h4>
                  <div className="form-group mt-4">
                    <label className="form-label">Cabinet Name</label>
                    <input
                      type="text"
                      id="formControlDefault"
                      className="form-control"
                      value={cabinetName}
                      onChange={(e) => setCabinetName(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="mt-2 btn btn-info">
                    Add Cabinet
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">
                    <i className="fas fa-circle-info me-2"></i>
                    Note
                  </h6>
                  <div className="mt-2">
                    <p className="mb-3">
                      <strong>Area Name</strong><br />
                      This should be unique
                    </p>
                    <p className="mb-3">
                      <strong>Area Location</strong><br />
                      This should explain the area location
                    </p>
                    <p className="mb-3">
                      <strong>Area Description</strong><br />
                      This should explain the area Description
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCabinet;