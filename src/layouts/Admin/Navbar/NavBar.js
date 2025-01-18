import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: ' Sheriff',
    photo: 'https://via.placeholder.com/150', // Placeholder image URL
    phone: '+123456789',
    bio: 'Enthusiastic Robotics Engineer'
  });

  const handleLogout = () => {
    toast.info('Logged Out Successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
    navigate('/');
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg rounded-md shadow-md"
        style={{ background: '#23408f', color: 'whitesmoke' }}
      >
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
              <i className="fa-2x text-white fas fa-robot"></i>
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-white" to="/">
                  University of Oulu Robotics Lab
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <span className="text-reset text-white me-3 text-decoration-none">
              Hey, {profile.name}
            </span>

            <div className="dropdown">
              <button
                className="btn dropdown-toggle d-flex align-items-center bg-transparent border-0 p-0"
                type="button"
                id="navbarDropdownMenuAvatar"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profile.photo}
                  className="rounded-circle"
                  height="35"
                  alt="Profile"
                  loading="lazy"
                  style={{ border: '1px solid whitesmoke' }}
                />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end shadow-lg border-0"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item py-2" to="/dashboard/profile">
                    <i className="fas fa-user me-2"></i>
                    My Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item py-2 text-danger"
                    onClick={handleLogout}
                  >
                    <i className="fas fa-sign-out-alt me-2"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
