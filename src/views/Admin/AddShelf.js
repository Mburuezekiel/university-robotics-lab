import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Toast } from 'react-bootstrap';

const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

const AddShelf = () => {
  const [shelfName, setShelfName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');
  
  const navigate = useNavigate();
  const { id: areaId } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      if (!shelfName.trim()) {
        throw new Error('Shelf name is required');
      }

      // Success scenario
      setToastMessage('Shelf added successfully!');
      setToastVariant('success');
      setShowToast(true);
      
      // Simulate navigation after success
      setTimeout(() => {
        navigate(`/cabinet-view/${areaId}`);
      }, 2000);
    } catch (error) {
      setToastMessage(error.message || 'An error occurred');
      setToastVariant('danger');
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="add-area mt-2">
        <Breadcrumb pageTitle="Add Shelf" />
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
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="title mb-4">Add Shelf</h4>
                  <div className="form-group mb-4">
                    <label className="form-label">Shelf Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={shelfName}
                      onChange={(e) => setShelfName(e.target.value)}
                      placeholder="Enter shelf name"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-info px-4"
                  >
                    Add Shelf
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">
                    <i className="fa-solid fa-circle-info me-2"></i>
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
      </div>
    </>
  );
};

export default AddShelf;