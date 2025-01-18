import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Footer from '../components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-nav" style={{ borderBottom: '1px solid white' }}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <i className="fa-2x text-white fas fa-robot"></i>
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                
                <Link className="nav-link text-bold fw-bold me-hover" to="/">
                  University of Oulu Robotics Lab
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <Link className="nav-link text-bold fw-bold bth" to="#">Menu</Link>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-nav">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-brand mt-2 mt-lg-0"></div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          </div>
          <div className="d-flex align-items-center">
            <Link className="nav-link text-bold bth fw-bold" to="dashboard/student">For Students</Link>
            <Link className="nav-link text-bold ms-2 bth fw-bold" to="/dashboard/dashboard">For Staff</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

const IotCard = ({ CardArea, CardLoc, CardTitle, CardCategory, status, lastUsed, utilization }) => {
  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
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
        {utilization && (
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
        )}
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

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://robo-rend-api.onrender.com/api/inventory/equipment');
        const data = await response.json();
        setTimeout(() => {
          setItems(data);
          setLoading(false);
          toast.success('Items Fetched Successfully!');
        }, 1000);
      } catch (error) {
        console.error(error);
        toast.error('An Error Occurred!');
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="container mt-4">
        <div className="p-4 bg-white mb-4 rounded-3 shadow-sm">
          <h1>Robo Lend</h1>
          <nav className="d-flex">
            <h6 className="mb-0">
              <Link to="/" className="text-reset">Home</Link>
              <span>/</span>
              <Link to="/" className="text-reset">Robotics Lab</Link>
              <span>/</span>
              <Link to="/" className="text-reset">Robo Lend</Link>
            </h6>
          </nav>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-4">Revolutionize Your Robotic Assets with RoboLend</h2>
            <p className="mt-4">
              Welcome to the next era in robotic inventory management. RoboLend is your strategic partner, 
              providing a comprehensive solution for tracking, managing, and optimizing your robotic assets. 
              Embrace precision, embrace control
            </p>
          </div>
          <div className="col-md-6">
            <img 
              src="https://otomatiks.com/wp-content/uploads/2023/08/Robotics-lab-img.jpg" 
              className="img-fluid" 
              alt="Robotics lab" 
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>

        <div className="row mt-4">
          <h3>Lab Items Categories</h3>
          
          {loading ? (
            <div className="col-md-3">
              <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            items.map((item, index) => (
              <div className="col-md-4 mt-2" key={index}>
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
            ))
          )}
        </div>
      </div>

      <Footer />

      <style>{`
        .bg-nav {
          background: #23408f;
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
        .hover-card {
          transition: transform 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default Home;