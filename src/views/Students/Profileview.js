import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Static profile data to replace API
const staticProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 8900',
  photo: '/api/placeholder/80/80',
  bio: 'Passionate about technology and innovation. Full-stack developer with experience in React and Node.js.'
};

const Profileview = () => {
  const [profile, setProfile] = useState(staticProfile);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [currentTime, setCurrentTime] = useState(new Date().toString());

  useEffect(() => {
    // Simulate profile fetch
    const timer = setTimeout(() => {
      setToastMessage('Profile Fetched Successfully!');
      setShowToast(true);
    }, 1000);

    // Update time every second to show real-time updates
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toString());
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate profile update
    setToastMessage('Profile Updated Successfully!');
    setShowToast(true);
  };

  return (
    <div className="container mt-4">
      <div className="add-area mt-2">
        <BreadCrumb pageTitle="Profile" />
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Hey, {profile.name}</h4>
                <div className="text-muted">{currentTime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Update Profile</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Profile Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="photo"
                    value={profile.photo}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    rows="4"
                  />
                </div>
                <button type="submit" className="btn btn-info text-white">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <div className="circular-image mb-4 mx-auto">
                <img
                  src={profile.photo}
                  className="img-fluid rounded-circle"
                  alt={profile.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h5 className="card-title mb-3">{profile.name}</h5>
              <p className="text-muted mb-3">{profile.email}</p>
              
              <div className="mb-4">
                <h6 className="fw-bold">Bio</h6>
                <p className="card-text">{profile.bio}</p>
              </div>
              
              <div>
                <h6 className="fw-bold">Tel</h6>
                <p className="mb-0">{profile.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-end">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg={toastType}
          className="text-white"
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Profileview;