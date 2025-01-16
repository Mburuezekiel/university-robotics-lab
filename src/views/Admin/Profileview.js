import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Static user data
const staticUserData = {
  name: 'Sheriff',
  email: 'sheriff@example.com',
  phone: '+2544 567 8900',
  photo: '/api/placeholder/80/80',
  bio: 'Senior Robotics Engineer with expertise in automation and AI. Currently working on advanced robotic systems and IoT integration projects.'
};

// Breadcrumb Component
const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

const Profileview = () => {
  const [profile, setProfile] = useState(staticUserData);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(staticUserData);

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 60000);

    toast.success('Profile Loaded Successfully!', {
      // position: toast.POSITION.BOTTOM_RIGHT,
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
      // position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className="container-fluid mt-4">
      <Breadcrumb pageTitle="Profile" />

      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Hey, {profile.name}</h4>
                <span className="text-muted">{time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="card-title mb-0">Update Profile</h4>
                <button 
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Profile Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="photo"
                    value={formData.photo}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    name="bio"
                    rows="4"
                    value={formData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>

                {isEditing && (
                  <button type="submit" className="btn btn-info">
                    Update Profile
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <div className="mb-4">
                <img
                  src={profile.photo}
                  className="rounded-circle"
                  alt={profile.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h5 className="card-title">{profile.name}</h5>
              <p className="text-muted mb-3">{profile.email}</p>
              
              <div className="mb-3">
                <h6 className="text-muted mb-2">Bio</h6>
                <p className="card-text">{profile.bio}</p>
              </div>

              <div>
                <h6 className="text-muted mb-2">Contact</h6>
                <p className="mb-0">{profile.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profileview;