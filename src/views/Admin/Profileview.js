import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
// Static user data with additional fields
const staticUserData = {
  name: 'Sheriff',
  email: 'sheriff@example.com',
  phone: '+2544 567 8900',
  photo: '/api/placeholder/80/80',
  bio: 'Senior Robotics Engineer with expertise in automation and AI. Currently working on advanced robotic systems and IoT integration projects.',
  role: 'Senior Robotics Engineer',
  department: 'Robotics & Automation',
  joinDate: 'January 2022',
  projectsCount: 15,
  teamsCount: 4,
  certifications: ['Robotics Specialist', 'AI Engineering']
};

// Enhanced Breadcrumb Component

const Profileview = () => {
  const [profile, setProfile] = useState(staticUserData);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(staticUserData);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 60000);

    toast.success('Profile Loaded Successfully!', {
      autoClose: 3000,
    });

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
    toast.success('Profile Updated Successfully!', {
      autoClose: 3000,
    });
  };

  return (
    <div className="container-fluid mt-4">
      <BreadCrumb pageTitle="Profile" />

      {/* Welcome Card */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="position-relative me-3">
                    <img
                      src={profile.photo}
                      className="rounded-circle border border-3 border-white shadow-sm"
                      alt={profile.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute bottom-0 end-0 p-1 bg-success border border-2 border-white rounded-circle"></span>
                  </div>
                  <div>
                    <h4 className="mb-1">Welcome back, {profile.name}!</h4>
                    <p className="text-muted mb-0">
                      <i className="fas fa-clock me-2"></i>
                      {time}
                    </p>
                  </div>
                </div>
                <div className="text-end">
                  <span className="badge bg-primary mb-2">
                    <i className="fas fa-star me-1"></i>
                    {profile.role}
                  </span>
                  <div className="text-muted small">
                    <i className="fas fa-building me-1"></i>
                    {profile.department}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body p-3">
              <div className="d-flex align-items-center">
                <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                  <i className="fas fa-project-diagram text-primary fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-1">Projects</h6>
                  <h4 className="mb-0">{profile.projectsCount}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body p-3">
              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-10 p-3 rounded-3 me-3">
                  <i className="fas fa-users text-success fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-1">Teams</h6>
                  <h4 className="mb-0">{profile.teamsCount}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body p-3">
              <div className="d-flex align-items-center">
                <div className="bg-info bg-opacity-10 p-3 rounded-3 me-3">
                  <i className="fas fa-certificate text-info fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-1">Certifications</h6>
                  <h4 className="mb-0">{profile.certifications.length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body p-3">
              <div className="d-flex align-items-center">
                <div className="bg-warning bg-opacity-10 p-3 rounded-3 me-3">
                  <i className="fas fa-clock text-warning fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-1">Experience</h6>
                  <h4 className="mb-0">2+ years</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="row">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white p-3 border-bottom">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <i className="fas fa-user me-2"></i>
                    Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'edit' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab('edit');
                      setIsEditing(true);
                    }}
                  >
                    <i className="fas fa-edit me-2"></i>
                    Edit Profile
                  </button>
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              {activeTab === 'overview' ? (
                <div>
                  <div className="mb-4">
                    <h5 className="mb-3">About Me</h5>
                    <p className="text-muted">{profile.bio}</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-3">Certifications</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {profile.certifications.map((cert, index) => (
                        <span key={index} className="badge bg-light text-dark border">
                          <i className="fas fa-certificate text-warning me-2"></i>
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-3">Contact Information</h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-light">
                          <div className="text-muted mb-1">Email</div>
                          <div className="d-flex align-items-center">
                            <i className="fas fa-envelope me-2 text-primary"></i>
                            {profile.email}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-3 rounded-3 bg-light">
                          <div className="text-muted mb-1">Phone</div>
                          <div className="d-flex align-items-center">
                            <i className="fas fa-phone me-2 text-primary"></i>
                            {profile.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="fas fa-user me-2"></i>
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="fas fa-phone me-2"></i>
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="fas fa-image me-2"></i>
                      Profile Image URL
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="photo"
                      value={formData.photo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="fas fa-info-circle me-2"></i>
                      Bio
                    </label>
                    <textarea
                      className="form-control"
                      name="bio"
                      rows="4"
                      value={formData.bio}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-save me-2"></i>
                    Save Changes
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <div className="position-relative d-inline-block mb-3">
                  <img
                    src={profile.photo}
                    className="rounded-circle border border-4 border-white shadow"
                    alt={profile.name}
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <span className="position-absolute bottom-0 end-0 p-1 bg-success border border-2 border-white rounded-circle"></span>
                </div>
                <h5 className="mb-1">{profile.name}</h5>
                <span className="badge bg-primary mb-2">{profile.role}</span>
                <p className="text-muted mb-3">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  {profile.department}
                </p>
              </div>

              <div className="border-top pt-3">
                <h6 className="text-muted mb-3">Quick Stats</h6>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Profile Completion</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  {/* <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="fas fa-file-alt me-2"></i>
                    View Resume
                  </a> */}
                  <a href="#" className="btn btn-outline-info btn-sm">
                    <i className="fas fa-envelope me-2"></i>
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

      <style>
        {`
          .nav-tabs .nav-link {
            border: none;
            color: #6c757d;
            padding: 0.5rem 1rem;
          }
          .nav-tabs .nav-link.active {
            color: #0d6efd;
            border-bottom: 2px solid #0d6efd;
            background: none;
          }
          .progress {
            background-color: #e9ecef;
          }
          .hover-card {
            transition: transform 0.2s ease-in-out;
          }
          .hover-card:hover {
          transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          .card {
            transition: box-shadow 0.3s ease;
          }
          .card:hover {
            box-shadow: 0 0.5rem 1rem rgba(13, 110, 253, 0.15) !important;
          }
          .badge {
            font-weight: 500;
          }
          .text-muted {
            color: #6c757d !important;
          }
          .bg-light {
            background-color: #f8f9fa !important;
          }
        `}
      </style>
    </div>
  );
};

// // PropTypes for the Breadcrumb component
// Breadcrumb.propTypes = {
//   pageTitle: PropTypes.string.isRequired
// };

export default Profileview;