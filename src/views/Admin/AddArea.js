import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb" className="mb-4">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

const AddArea = () => {
  const [areaName, setAreaName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simulating API call with static data
    if (areaName.trim()) {
      // Simulated successful response
      toast.success('Area added successfully!', {
        position: "top-right",
        autoClose: 3000
      });
      
      // Redirect after successful addition
      setTimeout(() => {
        navigate('/dashboard/area-view');
      }, 1000);
    } else {
      toast.error('Area name is required!', {
        position: "top-right",
        autoClose: 3000
      });
    }
  };

  return (
    <div className="p-3">
      <div className="add-area mt-2">
        <Breadcrumb pageTitle="Add Area" />
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title mb-4">Add Area</h4>

                  <div className="form-group">
                    <label className="form-label fw-semibold">Area Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={areaName}
                      onChange={(e) => setAreaName(e.target.value)}
                      placeholder="Enter area name"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-info mt-4 px-4"
                  >
                    Add Area
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm bg-light">
                <div className="card-body">
                  <h6 className="card-title mb-3">
                    <i className="fa-solid fa-circle-info me-2"></i>
                    Note
                  </h6>

                  <div className="info-section">
                    <div className="mb-3">
                      <h6 className="fw-bold">Area Name</h6>
                      <p className="text-muted mb-0">This should be unique</p>
                    </div>

                    <div className="mb-3">
                      <h6 className="fw-bold">Area Location</h6>
                      <p className="text-muted mb-0">This should explain the area location</p>
                    </div>

                    <div className="mb-3">
                      <h6 className="fw-bold">Area Description</h6>
                      <p className="text-muted mb-0">This should explain the area Description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      <ToastContainer />

      <style jsx>{`
        .info-section div:last-child {
          margin-bottom: 0 !important;
        }
        
        .card {
          border: none;
          transition: transform 0.2s;
        }
        
        .card:hover {
          transform: translateY(-2px);
        }
        
        .btn-info {
          color: white;
          font-weight: 500;
        }
        
        .btn-info:hover {
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default AddArea;