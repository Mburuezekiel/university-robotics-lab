import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast, Form } from 'react-bootstrap';

const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

const AddGeneralItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    equipment_type: '',
    equipment_room: '',
    equipment_location: '',
    equipment_category: '',
    quantity: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Form validation
    if (!Object.values(formData).every(value => value.toString().trim())) {
      setToastMessage('Please fill in all fields');
      setToastVariant('danger');
      setShowToast(true);
      return;
    }

    // Success scenario with static data
    try {
      // Simulating successful submission
      setToastMessage('Item added successfully!');
      setToastVariant('success');
      setShowToast(true);

      // Navigate after success
      setTimeout(() => {
        navigate('/iot-devices');
      }, 2000);
    } catch (error) {
      setToastMessage('An error occurred while adding the item');
      setToastVariant('danger');
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="add-area mt-2">
        <Breadcrumb pageTitle="Add General Item" />
      </div>

      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={3000} 
          autohide 
          bg={toastVariant}
          className="text-white"
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="title mb-4">Add Item</h4>

                  <div className="form-group mb-4">
                    <label className="form-label">Item Area</label>
                    <input
                      type="text"
                      className="form-control"
                      name="equipment_room"
                      value={formData.equipment_room}
                      onChange={handleInputChange}
                      placeholder="Enter item area"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label className="form-label">Item Location in the room</label>
                    <Form.Select
                      name="equipment_location"
                      value={formData.equipment_location}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="Cabinet">Cabinet</option>
                      <option value="Shelf">Shelf</option>
                      <option value="Bin">Bin</option>
                    </Form.Select>
                  </div>

                  <div className="form-group mb-4">
                    <label className="form-label">Item Category</label>
                    <input
                      type="text"
                      className="form-control"
                      name="equipment_category"
                      value={formData.equipment_category}
                      onChange={handleInputChange}
                      placeholder="Enter item category"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label className="form-label">Item Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="equipment_type"
                      value={formData.equipment_type}
                      onChange={handleInputChange}
                      placeholder="Enter item name"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="0"
                      placeholder="Enter quantity"
                    />
                  </div>

                  <button type="submit" className="btn btn-info px-4">
                    Add Item
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">
                    <i className="fa-solid fa-circle-info me-2"></i>
                    Note
                  </h6>
                  <div className="mt-3">
                    <p className="mb-3">
                      <strong>Area Name</strong><br />
                      This should be unique
                    </p>
                    <p className="mb-3">
                      <strong>Area Location</strong><br />
                      This should explain the area location
                    </p>
                    <p className="mb-3">
                      <strong>Area Description</strong><br />
                      This should explain the area Description
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddGeneralItem;