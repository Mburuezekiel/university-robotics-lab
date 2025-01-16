import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Static data for the table
const reportData = [
  { id: 1, itemName: "Arduino Kit", category: "Electronics", status: "In Stock", quantity: 15 },
  { id: 2, itemName: "Raspberry Pi", category: "Computing", status: "Low Stock", quantity: 5 },
  { id: 3, itemName: "Sensor Pack", category: "Components", status: "In Stock", quantity: 25 },
  { id: 4, itemName: "Robot Arm", category: "Robotics", status: "Out of Stock", quantity: 0 },
  { id: 5, itemName: "LED Display", category: "Electronics", status: "In Stock", quantity: 12 },
  { id: 6, itemName: "Motor Kit", category: "Components", status: "Low Stock", quantity: 8 },
  { id: 7, itemName: "Battery Pack", category: "Power", status: "In Stock", quantity: 30 },
  { id: 8, itemName: "WiFi Module", category: "Networking", status: "In Stock", quantity: 18 },
  { id: 9, itemName: "Camera Module", category: "Sensors", status: "Low Stock", quantity: 7 },
  { id: 10, itemName: "Circuit Board", category: "Electronics", status: "In Stock", quantity: 22 }
];

// Breadcrumb Component
const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

// Button Component
const Button = ({ className, children, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

// Status Badge Component
const StatusBadge = ({ status }) => {
  const getBadgeClass = () => {
    switch (status) {
      case 'In Stock':
        return 'bg-success';
      case 'Low Stock':
        return 'bg-warning text-dark';
      case 'Out of Stock':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <span className={`badge ${getBadgeClass()}`}>
      {status}
    </span>
  );
};

const InventoryReports = () => {
  return (
    <div className="container-fluid mt-4">
      <Breadcrumb pageTitle="Reports" />

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Inventory Reports</h4>
        <div className="d-flex gap-2">
          <Button className="btn btn-success btn-sm">
            <i className="fas fa-download me-2"></i>
            Export Report
          </Button>
          <Button className="btn btn-success btn-sm">
            <i className="fas fa-filter me-2"></i>
            Filter Data
          </Button>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="card-title mb-0">Robo Inventory Status</h5>
            <div className="d-flex align-items-center">
              <select className="form-select form-select-sm me-2">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Components</option>
                <option>Robotics</option>
              </select>
              <input 
                type="search" 
                className="form-control form-control-sm" 
                placeholder="Search items..."
                style={{ width: '200px' }}
              />
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Status</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.itemName}</td>
                    <td>{item.category}</td>
                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-outline-info">
                          <i className="fas fa-eye"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <small className="text-muted">Showing 1-10 of 10 items</small>
            </div>
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryReports;