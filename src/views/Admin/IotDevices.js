import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IotCard from '../../components/Card/IotCard';
import BreadCrumb from "../../components/BreadCrumb/Breadcrumb";
// import { CardArea,CardLoc, CardTitle, CardCategory, CardContent, CardContent2 } from '../../components/Card';
// Static data to replace API calls
const staticItems = [
  {
    id: 1,
    equipment_room: "TF105",
    equipment_location: "First Floor",
    equipment_type: "Microscope",
    equipment_category: "Optical",
    total_quantity: 10,
    current_quantity: 8
  },
  {
    id: 2,
    equipment_room: "TF103",
    equipment_location: "Second Floor",
    equipment_type: "Centrifuge",
    equipment_category: "Processing",
    total_quantity: 5,
    current_quantity: 4
  },
  {
    id: 3,
    equipment_room: "Storage",
    equipment_location: "Basement",
    equipment_type: "Pipettes",
    equipment_category: "Tools",
    total_quantity: 20,
    current_quantity: 15
  },
  {
    id: 4,
    equipment_room: "TF108",
    equipment_location: "Third Floor",
    equipment_type: "Incubator",
    equipment_category: "Environmental",
    total_quantity: 3,
    current_quantity: 3
  }
];

// Breadcrumb Component

// Card Component
const IotDevices = ({ CardArea, CardLoc, CardTitle, CardCategory, CardContent, CardContent2 }) => (
  <div className="card h-100 shadow-sm">
    <div className="card-body">
      <div className="d-flex justify-content-between mb-2">
        <span className="badge bg-primary">{CardArea}</span>
        <span className="badge bg-secondary">{CardLoc}</span>
      </div>
      <h5 className="card-title">{CardTitle}</h5>
      <p className="card-text text-muted mb-2">Category: {CardCategory}</p>
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <small className="text-muted">Total Quantity</small>
            <h4 className="mb-0">{CardContent}</h4>
          </div>
          <div className="text-end">
            <small className="text-muted">Available</small>
            <h4 className="mb-0">{CardContent2}</h4>
          </div>
        </div>
        <div className="progress mt-2" style={{ height: '4px' }}>
          <div 
            className="progress-bar" 
            role="progressbar" 
            style={{ width: `${(CardContent2/CardContent) * 100}%` }}
            aria-valuenow={(CardContent2/CardContent) * 100}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
const GeneralItems = () => {
  React.useEffect(() => {
    toast.success('Items Loaded Successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12">
          <BreadCrumb pageTitle="General Items" />
          
          <div className="d-flex justify-content-end mb-4">
            <Link to="/dashboard/add-item" className="btn btn-success btn-sm">
              <i className="fas fa-plus me-1"></i> Add Item
            </Link>
          </div>

          <div className="row g-4">
            {staticItems.map((item) => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={item.id}>
                <IotCard
                  CardArea={item.equipment_room}
                  CardLoc={item.equipment_location}
                  CardTitle={item.equipment_type}
                  CardCategory={item.equipment_category}
                  CardContent={item.total_quantity}
                  CardContent2={item.current_quantity}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default IotDevices;