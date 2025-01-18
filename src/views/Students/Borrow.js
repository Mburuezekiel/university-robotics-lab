import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
// Static data to replace API calls
const staticAreas = [
  { _id: "1", area_name: "TF 105" },
  { _id: "2", area_name: "TF 103" },
  { _id: "3", area_name: "TF 108" },
  { _id: "4", area_name: " Demo" }
];


// AreaCard Component
const AreaCard = ({ title, id }) => (
  <div className="card h-100 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Access and manage resources in the {title}</p>
      <a href={`/area/${id}`} className="btn btn-primary">
        View Area
      </a>
    </div>
  </div>
);

// Loading Bar Component
const LoadingBar = ({ progress }) => (
  <div className="progress mb-3">
    <div 
      className="progress-bar progress-bar-striped progress-bar-animated" 
      role="progressbar" 
      style={{ width: `${progress}%` }} 
      aria-valuenow={progress} 
      aria-valuemin="0" 
      aria-valuemax="100"
    />
  </div>
);

// Main Component
const Borrow = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [barLevel, setBarLevel] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const setLoadingState = () => {
    setLoading(true);
    setBarLevel(5);
    
    setTimeout(() => {
      setBarLevel(100);
      setAreas(staticAreas);
      setLoading(false);
      setToastMessage('Areas Fetched Successfully!');
      setToastType('success');
      setShowToast(true);
    }, 2000);
  };

  useEffect(() => {
    setLoadingState();
  }, []);

  return (
    <div className="container mt-4">
      <BreadCrumb pageTitle="Navigate Lab Areas" />
      
      {loading && <LoadingBar progress={barLevel} />}
      
      <div className="row g-4">
        {areas.map((area) => (
          <div className="col-md-6 mb-4" key={area._id}>
            <AreaCard 
              title={area.area_name}
              id={area._id}
            />
          </div>
        ))}
      </div>

      <ToastContainer position="bottom-end">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg={toastType}
          className="text-white"
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Borrow;