import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
// Enhanced BreadCrumb Component

 

// Enhanced Button Component
const Button = ({ buttonClass, children, icon }) => (
  <button className={`${buttonClass} d-flex align-items-center`}>
    {icon && <i className={`${icon} me-2`}></i>}
    {children}
  </button>
);

// Enhanced AreaCard Component
const AreaCard = ({ CardTitle, CardLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div 
      className="card shadow-sm mb-4 area-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="card-title mb-1">
              <i className="fas fa-door-open me-2 text-primary"></i>
              {CardTitle}
            </h5>
            <span className="badge bg-success">Active</span>
          </div>
          <div className="area-stats text-end">
            <div className="small text-muted mb-1">Capacity</div>
            <h6 className="mb-0">24/30</h6>
          </div>
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between mb-1">
            <small className="text-muted">Utilization</small>
            <small className="text-muted">80%</small>
          </div>
          <div className="progress" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        <div className="area-stats row text-center mb-3">
          <div className="col">
            <div className="p-2 rounded-3 bg-light">
              <div className="small text-muted mb-1">Equipment</div>
              <h6 className="mb-0">15</h6>
            </div>
          </div>
          <div className="col">
            <div className="p-2 rounded-3 bg-light">
              <div className="small text-muted mb-1">Students</div>
              <h6 className="mb-0">28</h6>
            </div>
          </div>
          <div className="col">
            <div className="p-2 rounded-3 bg-light">
              <div className="small text-muted mb-1">Projects</div>
              <h6 className="mb-0">7</h6>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2">
          <Link 
            to={`/areas/${CardLink}`} 
            className="btn btn-primary btn-sm flex-grow-1"
          >
            <i className="fas fa-compass me-1"></i>
            Explore Area
          </Link>
          <button className="btn btn-outline-primary btn-sm">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const Areas = () => {
  const [loading, setLoading] = useState(false);
  const [areas, setAreas] = useState([]);
  const [barLevel, setBarLevel] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Static Data
  const staticAreas = [
    { _id: 1, area_name: "TF105" },
    { _id: 2, area_name: "TF103" },
    { _id: 3, area_name: "TF108" },
  ];

  useEffect(() => {
    setLoading(true);
    setBarLevel(5);

    setTimeout(() => {
      setBarLevel(100);
      setLoading(false);
      setAreas(staticAreas);
      toast.success("Areas Fetched Successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }, 1000);
  }, []);

  return (
    <div className="area mt-2">
      <BreadCrumb pageTitle="Areas" />

      {/* Stats Overview */}
      {/* <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="bg-white p-3 rounded-3 shadow-sm">
            <div className="d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                <i className="fas fa-building text-primary fs-4"></i>
              </div>
              <div>
                <h6 className="mb-1">Total Areas</h6>
                <h4 className="mb-0">12</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded-3 shadow-sm">
            <div className="d-flex align-items-center">
              <div className="bg-success bg-opacity-10 p-3 rounded-3 me-3">
                <i className="fas fa-users text-success fs-4"></i>
              </div>
              <div>
                <h6 className="mb-1">Total Capacity</h6>
                <h4 className="mb-0">360</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded-3 shadow-sm">
            <div className="d-flex align-items-center">
              <div className="bg-info bg-opacity-10 p-3 rounded-3 me-3">
                <i className="fas fa-robot text-info fs-4"></i>
              </div>
              <div>
                <h6 className="mb-1">Equipment</h6>
                <h4 className="mb-0">45</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3 rounded-3 shadow-sm">
            <div className="d-flex align-items-center">
              <div className="bg-warning bg-opacity-10 p-3 rounded-3 me-3">
                <i className="fas fa-project-diagram text-warning fs-4"></i>
              </div>
              <div>
                <h6 className="mb-1">Active Projects</h6>
                <h4 className="mb-0">21</h4>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Search and Filters */}
      <div className="bg-white p-3 rounded-3 shadow-sm mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md">
            <div className="input-group">
              <span className="input-group-text bg-transparent">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search areas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-auto">
            <select 
              className="form-select"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Areas</option>
              <option value="active">Active</option>
              <option value="maintenance">Maintenance</option>
              <option value="full">Full Capacity</option>
            </select>
          </div>
          <div className="col-md-auto">
            <Link to="/dashboard/add-area">
              <Button 
                buttonClass="btn btn-success" 
                icon="fas fa-plus"
              >
                Add Area
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5 bg-white rounded-3 shadow-sm">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="text-muted">Loading areas...</div>
          <div className="progress mt-3 mx-auto" style={{ maxWidth: "200px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: `${barLevel}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="row">
          {areas.map((area) => (
            <div className="col-md-6" key={area._id}>
              <AreaCard CardTitle={area.area_name} CardLink={area._id} />
            </div>
          ))}
        </div>
      )}

      <style>
        {`
          .area-card {
            transition: transform 0.2s ease-in-out;
          }
          .area-card:hover {
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

export default Areas;