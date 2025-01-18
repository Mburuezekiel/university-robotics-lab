import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
// Mock user data
const mockUserProfile = {
  name: 'John Smith',
  email: 'john.smith@example.com',
  phone: '123-456-7890'
};

const StudentBorrow = () => {
  const { itemName, maxQuantity } = useParams();
  const navigate = useNavigate();
  
  const [borrowedItems, setBorrowedItems] = useState({
    student_name: '',
    student_email: '',
    student_phone: '',
    projectName: '',
    equipment: {
      equipment_type: '',
      quantity: '1'
    }
  });

  const [currentQuantity, setCurrentQuantity] = useState(maxQuantity || 5);

  useEffect(() => {
    // Simulate API call to get profile
    setBorrowedItems(prev => ({
      ...prev,
      student_name: mockUserProfile.name,
      student_email: mockUserProfile.email,
      student_phone: mockUserProfile.phone,
      equipment: {
        ...prev.equipment,
        equipment_type: itemName || 'Default Equipment'
      }
    }));
  }, [itemName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('equipment.')) {
      const [, field] = name.split('.');
      setBorrowedItems(prev => ({
        ...prev,
        equipment: {
          ...prev.equipment,
          [field]: value
        }
      }));
    } else {
      setBorrowedItems(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!borrowedItems.projectName.trim()) {
      toast.error('Please enter project information');
      return;
    }

    if (parseInt(borrowedItems.equipment.quantity) > currentQuantity) {
      toast.error('Requested quantity exceeds available stock');
      return;
    }

    try {
      // Simulate successful API call
      toast.success('Equipment borrowed successfully!');
      setTimeout(() => navigate('/search-item'), 1500);
    } catch (error) {
      toast.error('Failed to borrow equipment');
    }
  };

  return (
    <div className="container mt-4">
       <BreadCrumb pageTitle="Borrow Push buttons, lever and rocker switches" />

      <form onSubmit={handleSubmit} className="needs-validation">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title border-bottom pb-3 mb-4">Personal Information</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="studentName"
                    placeholder="Student Name"
                    name="student_name"
                    value={borrowedItems.student_name}
                    disabled
                  />
                  <label htmlFor="studentName">Student Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="studentEmail"
                    placeholder="Email"
                    name="student_email"
                    value={borrowedItems.student_email}
                    disabled
                  />
                  <label htmlFor="studentEmail">Student Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="studentPhone"
                    placeholder="Phone"
                    name="student_phone"
                    value={borrowedItems.student_phone}
                    disabled
                  />
                  <label htmlFor="studentPhone">Student Phone</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="projectInfo"
                    placeholder="Project Information"
                    name="projectName"
                    value={borrowedItems.projectName}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="projectInfo">Project Information</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title border-bottom pb-3 mb-4">Item Information</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="itemName"
                    placeholder="Item Name"
                    name="equipment.equipment_type"
                    value={borrowedItems.equipment.equipment_type}
                    disabled
                  />
                  <label htmlFor="itemName">Item Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    placeholder="Quantity"
                    name="equipment.quantity"
                    value={borrowedItems.equipment.quantity}
                    onChange={handleInputChange}
                    min="1"
                    max={currentQuantity}
                    required
                  />
                  <label htmlFor="quantity">Quantity (Max: {currentQuantity})</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success btn-lg w-100 mb-4">
          <i className="fas fa-check-circle me-2"></i>
          Borrow Item
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default StudentBorrow;