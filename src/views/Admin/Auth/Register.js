import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || formData.name.length < 2) {
      setAlert({
        show: true,
        type: 'danger',
        message: 'Name must be at least 2 characters long'
      });
      return false;
    }
    if (!formData.email || !formData.email.includes('@')) {
      setAlert({
        show: true,
        type: 'danger',
        message: 'Please enter a valid email address'
      });
      return false;
    }
    if (!formData.password || formData.password.length < 6) {
      setAlert({
        show: true,
        type: 'danger',
        message: 'Password must be at least 6 characters long'
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);

    // Simulating API call with static data
    setTimeout(() => {
      // Mock email check - prevent duplicate registration
      if (formData.email === 'existing@robolend.com') {
        setAlert({
          show: true,
          type: 'danger',
          message: 'Email already registered. Please use a different email.'
        });
      } else {
        // Success scenario
        setAlert({
          show: true,
          type: 'success',
          message: 'Registration successful! Redirecting to dashboard...'
        });
        localStorage.setItem('token', 'mock-registration-token');
        localStorage.setItem('user', JSON.stringify({
          name: formData.name,
          email: formData.email
        }));
        setTimeout(() => navigate('/dashboard'), 2000);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h4 className="card-title text-center mb-4 fw-bold">Robo Lend Staff Register</h4>
              <p className="card-text text-muted text-center mb-4">Join our team of robotics experts</p>

              {alert.show && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                  {alert.message}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setAlert({ show: false })}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="needs-validation">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength="2"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                  />
                  <div className="form-text">Password must be at least 6 characters long</div>
                </div>

                <button
                  type="submit"
                  className="btn btn-success btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  ) : null}
                  {loading ? 'Creating Account...' : 'Register'}
                </button>

                <div className="mt-3 text-center">
                  <p className="text-muted">
                    Already have an account?{' '}
                    <a href="/login" className="text-decoration-none">
                      Login here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src="https://otomatiks.com/wp-content/uploads/2023/08/Robotics-lab-img.jpg"
            className="img-fluid rounded shadow-lg"
            alt="Robotics Lab"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;