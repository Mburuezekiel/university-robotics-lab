import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Navbar from '../layouts/Admin/Navbar/NavBar';
import Sidebar from '../layouts/Sidenav';
import Footer from '../components/Footer/Footer';

// Static data for items
const staticItems = [
  {
    id: 1,
    equipment_room: "Lab Room A",
    equipment_location: "Section 1",
    equipment_type: "Industrial Robots",
    equipment_category: "Robotics",
  },
  {
    id: 2,
    equipment_room: "Lab Room B",
    equipment_location: "Section 2",
    equipment_type: "Collaborative Robots",
    equipment_category: "Automation",
  },
  {
    id: 3,
    equipment_room: "Lab Room C",
    equipment_location: "Section 3",
    equipment_type: "Mobile Robots",
    equipment_category: "Navigation",
  },
];

// IotCard Component
const IotCard = ({ CardArea, CardLoc, CardTitle, CardCategory }) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">{CardTitle}</h5>
        <p className="card-text mb-1">Area: {CardArea}</p>
        <p className="card-text mb-1">Location: {CardLoc}</p>
        <p className="card-text">Category: {CardCategory}</p>
      </div>
    </div>
  );
};

// Main Component
const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with static data
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
      {/* Navbar at the top */}
      <Navbar />

      {/* Sidebar and Main Content Container */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="sidebar-container" style={{ width: '250px', minHeight: '100vh' }}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content flex-grow-1">
          <div className="container mt-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h1>Robo Lend</h1>
              <nav className="breadcrumb">
                <Link className="breadcrumb-item" to="/">
                  Home
                </Link>
                <Link className="breadcrumb-item" to="/robotics-lab">
                  Robotics Lab
                </Link>
                <span className="breadcrumb-item active">Robo Lend</span>
              </nav>
            </div>

            {/* Items Section */}
            <div className="row mt-4">
              <h3>Lab Items Categories</h3>
              {loading ? (
                <div className="text-center">
                  <div
                    className="spinner-border text-primary"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                items.map((item) => (
                  <div className="col-md-4 mt-3" key={item.id}>
                    <IotCard
                      CardArea={item.equipment_room}
                      CardLoc={item.equipment_location}
                      CardTitle={item.equipment_type}
                      CardCategory={item.equipment_category}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
            height: calc(100vh - 56px); /* Adjust based on your navbar height */
            overflow-y: auto;
          }
          .main-content {
            min-height: calc(100vh - 56px); /* Adjust based on your navbar height */
            background-color: #f8f9fa;
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;