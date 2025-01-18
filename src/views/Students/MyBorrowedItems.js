import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';

// Mock data
const mockBorrowedItems = [
  {
    _id: '1',
    equipment: [{
      equipment_type: 'Arduino Uno',
      quantity: 2
    }],
    borrowed_date: '2025-01-10',
    due_return_date: '2025-01-20',
    status: 'borrowed'
  },
  {
    _id: '2',
    equipment: [{
      equipment_type: 'Raspberry Pi',
      quantity: 1
    }],
    borrowed_date: '2025-01-15',
    due_return_date: '2025-01-25',
    status: 'returned'
  },
  {
    _id: '3',
    equipment: [{
      equipment_type: 'Sensor Kit',
      quantity: 3
    }],
    borrowed_date: '2025-01-16',
    due_return_date: '2025-01-26',
    status: 'borrowed'
  }
];

const BorrowedItems = () => {
  const [borrowedItems, setBorrowedItems] = useState([]);

  useEffect(() => {
    // Simulating API call with mock data
    setBorrowedItems(mockBorrowedItems);
    toast.success('Borrowed Items Loaded Successfully!');
  }, []);

  const formatDateDifference = (dueDate, borrowDate) => {
    const borrowed = new Date(borrowDate);
    const due = new Date(dueDate);
    const diffTime = Math.abs(due - borrowed);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days`;
  };

  const handleReturnItem = (id, quantity) => {
    setBorrowedItems(prevItems =>
      prevItems.map(item =>
        item._id === id ? { ...item, status: 'returned' } : item
      )
    );
    toast.success('Item Returned Successfully!');
  };

  const handleExtendTime = (id) => {
    setBorrowedItems(prevItems =>
      prevItems.map(item =>
        item._id === id
          ? { ...item, due_return_date: new Date(new Date(item.due_return_date).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] }
          : item
      )
    );
    toast.success('Time Extended Successfully!');
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col">
          <BreadCrumb pageTitle="My Borrored Items" />
          <div className="d-flex justify-content-end mb-3">
            <Link to="/dashboard/student/search" className="btn btn-success btn-sm">
              <i className="fas fa-plus me-1"></i> Borrow Item
            </Link>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">My Borrowed Items</h4>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Borrow Date</th>
                      <th>Days Remaining</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {borrowedItems.map((item) => (
                      <tr key={item._id}>
                        <td>{item.equipment[0].equipment_type}</td>
                        <td>{item.equipment[0].quantity}</td>
                        <td>{new Date(item.borrowed_date).toLocaleDateString()}</td>
                        <td>{formatDateDifference(item.due_return_date, item.borrowed_date)}</td>
                        <td>
                          {item.status === 'borrowed' ? (
                            <span className="badge bg-warning text-dark">Borrowed</span>
                          ) : (
                            <span className="badge bg-success">Returned</span>
                          )}
                        </td>
                        <td>
                          {item.status === 'borrowed' && (
                            <div className="btn-group">
                              <button
                                onClick={() => handleReturnItem(item._id, item.equipment[0].quantity)}
                                className="btn btn-success btn-sm me-2"
                              >
                                Return Item
                              </button>
                              <button
                                onClick={() => handleExtendTime(item._id)}
                                className="btn btn-warning btn-sm"
                              >
                                Extend Time
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default BorrowedItems;