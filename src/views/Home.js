import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Navbar from '../layouts/Admin/Navbar/NavBar';
import Sidebar from '../layouts/Sidenav';
import Footer from '../components/Footer/Footer';
import BreadCrumb from '../components/BreadCrumb/Breadcrumb';
// Static data for items
const staticItems = [
  {
    id: 1,
    equipment_room: "Lab Room A",
    equipment_location: "Section 1",
    equipment_type: "Industrial Robots",
    equipment_category: "Robotics",
    status: "Available",
    lastUsed: "2024-01-15",
    utilization: 85,
  },
  {
    id: 2,
    equipment_room: "Lab Room B",
    equipment_location: "Section 2",
    equipment_type: "Collaborative Robots",
    equipment_category: "Automation",
    status: "In Use",
    lastUsed: "2024-01-16",
    utilization: 92,
  },
  {
    id: 3,
    equipment_room: "Lab Room C",
    equipment_location: "Section 3",
    equipment_type: "Mobile Robots",
    equipment_category: "Navigation",
    status: "Maintenance",
    lastUsed: "2024-01-14",
    utilization: 78,
  },
];

// Enhanced IotCard Component
const IotCard = ({ CardArea, CardLoc, CardTitle, CardCategory, status, lastUsed, utilization }) => {
  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'available': return 'bg-success';
      case 'in use': return 'bg-primary';
      case 'maintenance': return 'bg-warning';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="card shadow-sm mb-4 hover-card">
      <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
        <span className={`badge ${getStatusBadgeClass(status)}`}>{status}</span>
        <small className="text-muted">Last used: {lastUsed}</small>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <i className="fas fa-robot fs-4 me-2 text-primary"></i>
          <h5 className="card-title mb-0">{CardTitle}</h5>
        </div>
        <div className="mb-3">
          <p className="card-text mb-1">
            <i className="fas fa-map-marker-alt me-2 text-muted"></i>
            {CardArea}
          </p>
          <p className="card-text mb-1">
            <i className="fas fa-location-arrow me-2 text-muted"></i>
            {CardLoc}
          </p>
          <p className="card-text">
            <i className="fas fa-tags me-2 text-muted"></i>
            {CardCategory}
          </p>
        </div>
        <div className="mt-3">
          <label className="form-label d-flex justify-content-between mb-1">
            <small>Utilization</small>
            <small>{utilization}%</small>
          </label>
          <div className="progress" style={{ height: "6px" }}>
            <div 
              className="progress-bar bg-primary" 
              role="progressbar" 
              style={{ width: `${utilization}%` }}
              aria-valuenow={utilization} 
              aria-valuemin="0" 
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-transparent border-0">
        <div className="d-flex justify-content-end">
          <button className="btn btn-sm btn-outline-primary me-2">
            <i className="fas fa-info-circle me-1"></i>
            Details
          </button>
          <button className="btn btn-sm btn-primary">
            <i className="fas fa-hand-holding me-1"></i>
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const loadData = () => {
      setLoading(true);
      setTimeout(() => {
        setItems(staticItems);
        setLoading(false);
        toast.success("Items loaded successfully!");
      }, 1000);
    };
    loadData();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="d-flex flex-grow-1">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <div className="main-content flex-grow-1">
          <div className="container-fluid p-4">
            {/* Header Section */}
            <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
            <BreadCrumb pageTitle="Robo Lend" />
            </div>

            {/* Stats Section */}
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <div className="bg-white p-3 rounded-3 shadow-sm">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                      <i className="fas fa-robot text-primary fs-4"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Total Items</h6>
                      <h4 className="mb-0">24</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bg-white p-3 rounded-3 shadow-sm">
                  <div className="d-flex align-items-center">
                    <div className="bg-success bg-opacity-10 p-3 rounded-3 me-3">
                      <i className="fas fa-check-circle text-success fs-4"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Available</h6>
                      <h4 className="mb-0">18</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bg-white p-3 rounded-3 shadow-sm">
                  <div className="d-flex align-items-center">
                    <div className="bg-warning bg-opacity-10 p-3 rounded-3 me-3">
                      <i className="fas fa-clock text-warning fs-4"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">In Use</h6>
                      <h4 className="mb-0">4</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bg-white p-3 rounded-3 shadow-sm">
                  <div className="d-flex align-items-center">
                    <div className="bg-danger bg-opacity-10 p-3 rounded-3 me-3">
                      <i className="fas fa-tools text-danger fs-4"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Maintenance</h6>
                      <h4 className="mb-0">2</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Items Section */}
            <div className="bg-white rounded-3 shadow-sm p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h4 mb-0">Lab Items Categories</h3>
                <div className="d-flex gap-2">
                  <select className="form-select form-select-sm" style={{ width: '150px' }}>
                    <option>All Categories</option>
                    <option>Robotics</option>
                    <option>Automation</option>
                    <option>Navigation</option>
                  </select>
                  <select className="form-select form-select-sm" style={{ width: '150px' }}>
                    <option>All Status</option>
                    <option>Available</option>
                    <option>In Use</option>
                    <option>Maintenance</option>
                  </select>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-2 text-muted">Loading items...</p>
                </div>
              ) : (
                <div className="row g-4">
                  {items.map((item) => (
                    <div className="col-md-4" key={item.id}>
                      <IotCard
                        CardArea={item.equipment_room}
                        CardLoc={item.equipment_location}
                        CardTitle={item.equipment_type}
                        CardCategory={item.equipment_category}
                        status={item.status}
                        lastUsed={item.lastUsed}
                        utilization={item.utilization}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>
        {`
          .bg-nav {
            background-color: #23408f;
          }
          .nav-link:hover {
            color: #00aeef !important;
          }
          .me-hover {
            color: white;
          }
          .me-hover:hover {
            color: #00aeef;
          }
          .bth {
            padding: 10px 8px 8px 8px;
            border-radius: 2px;
            color: white;
          }
          .bth:hover {
            background: #00aeef;
            color: black;
          }
          .sidebar-container {
            background-color: #f8f9fa;
            border-right: 1px solid #dee2e6;
            position: sticky;
            top: 0;
            width: 250px;
            height: calc(100vh - 56px);
            overflow-y: auto;
          }
          .main-content {
            min-height: calc(100vh - 56px);
            background-color: #f8f9fa;
          }
          .hover-card {
            transition: transform 0.2s ease-in-out;
          }
          .hover-card:hover {
            transform: translateY(-5px);
          }
          .progress {
            background-color: #e9ecef;
          }
          .breadcrumb-item + .breadcrumb-item::before {
            content: ">";
          }
        `}
      </style>
    </div>
  );
};

export default Home;