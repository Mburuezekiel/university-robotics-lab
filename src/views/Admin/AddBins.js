import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';

// Breadcrumb component
const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

const AddBins = () => {
  const [binName, setBinName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  
  const navigate = useNavigate();
  const { id: areaId } = useParams();

  // Static data simulation
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simulate API call with static data
    if (binName.trim()) {
      setToastMessage('Bin added Successfully!');
      setToastType('success');
      setShowToast(true);
      
      // Simulate navigation after success
      setTimeout(() => {
        navigate(`/cabinet/${areaId}`);
      }, 2000);
    } else {
      setToastMessage('Please enter a bin name');
      setToastType('danger');
      setShowToast(true);
    }
  };

  return (
    <div className="p-3">
      <div className="add-area mt-2">
        <Breadcrumb pageTitle="Add Bins" />
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title mb-4">Add Bin</h4>
                  
                  <div className="form-group mb-4">
                    <label className="form-label">Bin Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={binName}
                      onChange={(e) => setBinName(e.target.value)}
                      placeholder="Enter bin name"
                    />
                  </div>

                  <button type="submit" className="btn btn-info text-white">
                    Add Bin
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">
                    <i className="fas fa-circle-info me-2"></i>
                    Note
                  </h6>

                  <div className="mt-3">
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

        <ToastContainer position="top-end" className="p-3">
          <Toast 
            show={showToast} 
            onClose={() => setShowToast(false)} 
            delay={3000} 
            autohide
            bg={toastType}
          >
            <Toast.Body className={toastType === 'success' ? 'text-white' : ''}>
              {toastMessage}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
};

export default AddBins;