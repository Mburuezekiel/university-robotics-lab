import React from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
// Static data to replace API calls
const staticBorrowedItems = [
  {
    _id: 1,
    equipment: [{
      equipment_type: "Laptop Dell XPS",
      quantity: 1
    }],
    borrowed_date: "2025-01-10T10:00:00Z",
    due_return_date: "2025-01-17T10:00:00Z",
    status: "borrowed"
  },
  {
    _id: 2,
    equipment: [{
      equipment_type: "Arduino Kit",
      quantity: 2
    }],
    borrowed_date: "2025-01-12T14:30:00Z",
    due_return_date: "2025-01-19T14:30:00Z",
    status: "returned"
  },
  {
    _id: 3,
    equipment: [{
      equipment_type: "Raspberry Pi",
      quantity: 1
    }],
    borrowed_date: "2025-01-15T09:15:00Z",
    due_return_date: "2025-01-22T09:15:00Z",
    status: "borrowed"
  }
];

// Breadcrumb Component

const BorrowedItems = () => {
  const { email } = useParams();
  const [borrowedItems, setBorrowedItems] = React.useState(staticBorrowedItems);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'UTC'
    }).format(date);
  };

  const returnItem = (id, quantity) => {
    setBorrowedItems(prevItems =>
      prevItems.map(item =>
        item._id === id ? { ...item, status: 'returned' } : item
      )
    );
    
    toast.success('Item returned successfully!', {
      position: "bottom-right",
      autoClose: 3000
    });
  };

  React.useEffect(() => {
    toast.success('Borrowed items loaded successfully!', {
      position: "bottom-right",
      autoClose: 3000
    });
  }, []);

  return (
    <div className="area mt-4">
      <BreadCrumb pageTitle={`Items Borrowed By ${email}`} />
      
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-4">Borrowed Items</h4>
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Borrow Date</th>
                  <th scope="col">Return Date</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {borrowedItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">Student has no borrowed items</td>
                  </tr>
                ) : (
                  borrowedItems.map((item) => (
                    <tr key={item._id}>
                      <td>{item.equipment[0].equipment_type}</td>
                      <td>{item.equipment[0].quantity}</td>
                      <td>{formatDate(item.borrowed_date)}</td>
                      <td>{formatDate(item.due_return_date)}</td>
                      <td>
                        {item.status === 'borrowed' ? (
                          <span className="badge bg-warning text-dark">
                            {item.status}
                          </span>
                        ) : (
                          <span className="badge bg-success">
                            {item.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default BorrowedItems;