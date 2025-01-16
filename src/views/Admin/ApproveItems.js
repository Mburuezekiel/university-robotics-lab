import React, { useState, useEffect } from 'react';
import { Table, Badge, Button, Card, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

const ApprovedItems = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('success');

  // Mock data
  const mockItems = [
    {
      _id: '1',
      student_name: 'John Doe',
      student_email: 'john.doe@example.com',
      projectName: 'Robot Arm',
      equipment: [{
        equipment_type: 'Servo Motor',
        quantity: 4
      }],
      borrowed_date: '2025-01-10',
      due_return_date: '2025-01-24',
      status: 'borrowed'
    },
    {
      _id: '2',
      student_name: 'Jane Smith',
      student_email: 'jane.smith@example.com',
      projectName: 'Drone',
      equipment: [{
        equipment_type: 'Battery Pack',
        quantity: 2
      }],
      borrowed_date: '2025-01-12',
      due_return_date: '2025-01-26',
      status: 'returned'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setItems(mockItems);
    showNotification('Items loaded successfully', 'success');
  }, []);

  const showNotification = (message, variant) => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  const handleApprove = (id) => {
    // Update item status in state
    setItems(prevItems =>
      prevItems.map(item =>
        item._id === id ? { ...item, status: 'approved' } : item
      )
    );
    showNotification('Item approved successfully', 'success');
    // Simulate navigation after approval
    setTimeout(() => navigate('/lend-view'), 2000);
  };

  const getBadgeVariant = (status) => {
    switch (status) {
      case 'borrowed': return 'warning';
      case 'returned': return 'success';
      case 'approved': return 'primary';
      default: return 'secondary';
    }
  };

  return (
    <div className="area mt-2">
      <Breadcrumb pageTitle="Approved Items" />

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

      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Card.Title className="mb-0">Approved Items</Card.Title>
            <div className="d-flex gap-2">
              <Button variant="success" size="sm" className="d-flex align-items-center">
                <i className="fa-solid fa-plus me-2"></i>
                Lend Devices
              </Button>
            </div>
          </div>

          <div className="table-responsive">
            <Table hover className="align-middle">
              <thead className="table-light">
                <tr>
                  <th>Student Name</th>
                  <th>Student Email</th>
                  <th>Project Name</th>
                  <th>Equipment</th>
                  <th>Quantity</th>
                  <th>Date Borrowed</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.student_name}</td>
                    <td>{item.student_email}</td>
                    <td>{item.projectName}</td>
                    <td>{item.equipment[0].equipment_type}</td>
                    <td>{item.equipment[0].quantity}</td>
                    <td>{item.borrowed_date}</td>
                    <td>{item.due_return_date}</td>
                    <td>
                      <Badge bg={getBadgeVariant(item.status)}>
                        {item.status}
                      </Badge>
                    </td>
                    <td>
                      {item.status === 'borrowed' && (
                        <Button 
                          variant="info" 
                          size="sm"
                          onClick={() => handleApprove(item._id)}
                        >
                          Approve
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApprovedItems;