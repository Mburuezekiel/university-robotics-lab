import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call with static data
    setTimeout(() => {
      if (formData.email === 'admin@robolend.com' && formData.password === 'password123') {
        // Success scenario
        setAlert({
          show: true,
          type: 'success',
          message: 'Login successful! Redirecting...'
        });
        localStorage.setItem('token', 'mock-jwt-token');
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        // Error scenario
        setAlert({
          show: true,
          type: 'danger',
          message: 'Invalid credentials. Please try again.'
        });
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
              <h4 className="card-title text-center mb-4 fw-bold">Robo Lend Staff Login</h4>
              
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

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
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

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <p className="text-muted">
                    Don't have an account?{' '}
                    <a href="/register" className="text-decoration-none">
                      Create Account
                    </a>
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn btn-success btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  ) : null}
                  {loading ? 'Logging in...' : 'Login'}
                </button>
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

export default Login;