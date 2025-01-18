import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';

// Static profile data
const staticProfile = {
  name: 'John Doe',
  photo: '/api/placeholder/35/35',
  phone: '+1 234 567 8900',
  bio: 'Research Student'
};

const NavBar = () => {
  const [profile] = useState(staticProfile);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('mod_token');
    navigate('/');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg rounded-md shadow-md" style={{
        background: '#23408f',
        color: 'whitesmoke'
      }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <i className="fas fa-robot fa-2x text-white"></i>
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="/" style={{
                  '&:hover': {
                    color: '#00aeef'
                  }
                }}>
                  University of Oulu Robotics Lab
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard/student">
                  <i className="fas fa-chart-pie me-1"></i> Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard/student/search">
                  <i className="fas fa-search me-1"></i> Search Item
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard/student/borrow">
                  <i className="fas fa-stream me-1"></i> Explore Lab
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard/student/my-borrowed-items">
                  <i className="fab fa-hive me-1"></i> My Borrowed Items
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <span className="text-white me-3">
              Hey, {profile.name}
            </span>

            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle d-flex align-items-center text-decoration-none"
                type="button"
                id="navbarDropdownMenuAvatar"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profile.photo}
                  className="rounded-circle"
                  height="35"
                  alt={profile.name}
                  loading="lazy"
                  style={{ border: '1px solid whitesmoke' }}
                />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="/dashboard/student/profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-link:hover {
          color: #00aeef !important;
        }
        .navbar-nav .nav-link {
          transition: color 0.3s ease;
        }
      `}</style>

      <ToastContainer position="bottom-end">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>Profile loaded successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default NavBar;