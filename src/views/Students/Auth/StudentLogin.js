import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');
  
  const navigate = useNavigate();

  const handleShowToast = (message, variant) => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock authentication logic
    if (email === 'student@example.com' && password === 'password123') {
      // Mock successful login
      localStorage.setItem('mod_token', 'mock-token-123');
      localStorage.setItem('student_email', email);
      handleShowToast('Login Successful!', 'success');
      setTimeout(() => {
        navigate('/dashboard/student');
      }, 1000);
    } else {
      handleShowToast('Invalid email or password', 'danger');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row mt-4 align-items-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h4 className="card-title mb-4 text-primary">Robo Lend Student Login</h4>
              <p className="card-text text-muted mb-4">
                Welcome back! Please login to access your account.
              </p>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <p className="text-muted">
                    Don't have an account?{' '}
                    <Link to="/student-register" className="text-primary text-decoration-none">
                      Create Account
                    </Link>
                  </p>
                </div>

                <button type="submit" className="btn btn-success btn-lg w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <img
            src="/api/placeholder/700/500"
            className="img-fluid rounded shadow"
            alt="Robotics Lab"
          />
        </div>
      </div>

      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide
          bg={toastVariant}
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className={toastVariant === 'success' ? 'text-white' : ''}>
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default StudentLogin;