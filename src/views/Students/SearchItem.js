import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Static items data
const staticItems = [
  {
    _id: "1",
    equipment_type: "Arduino Uno",
    equipment_category: "Microcontrollers",
    equipment_room: "Room 101",
    equipment_location: "Building A",
    total_quantity: 50,
    current_quantity: 30
  },
  {
    _id: "2",
    equipment_type: "Raspberry Pi 4",
    equipment_category: "Single Board Computers",
    equipment_room: "Room 102",
    equipment_location: "Building B",
    total_quantity: 25,
    current_quantity: 15
  },
  {
    _id: "3",
    equipment_type: "Sensors Kit",
    equipment_category: "Electronics",
    equipment_room: "Room 103",
    equipment_location: "Building A",
    total_quantity: 100,
    current_quantity: 75
  },
  {
    _id: "4",
    equipment_type: "Robot Arm",
    equipment_category: "Robotics",
    equipment_room: "Room 104",
    equipment_location: "Building C",
    total_quantity: 10,
    current_quantity: 5
  }
];


// IoT Card Component
const IotCard = ({ cardArea, cardLoc, cardTitle, cardCategory, cardContent, cardContent2 }) => (
  <div className="card shadow-sm h-100">
    <div className="card-body">
      <h5 className="card-title">{cardTitle}</h5>
      <h6 className="text-muted mb-3">{cardCategory}</h6>
      <div className="mb-3">
        <p className="mb-1"><strong>Location:</strong> {cardLoc}</p>
        <p className="mb-1"><strong>Room:</strong> {cardArea}</p>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div>
          <small className="text-muted">Total Quantity</small>
          <h4>{cardContent}</h4>
        </div>
        <div>
          <small className="text-muted">Available</small>
          <h4>{cardContent2}</h4>
        </div>
      </div>
    </div>
  </div>
);

const SearchItems = () => {
  const [items, setItems] = useState(staticItems);
  const [search, setSearch] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading data
    setShowToast(true);
  }, []);

  const filteredData = items.filter(item =>
    item.equipment_type.toLowerCase().includes(search.toLowerCase())
  );

  const handleBorrow = (itemId, itemName, currentQuantity) => {
    navigate(`/dashboard/student/borrow/${itemId}`, {
      state: {
        itemName,
        currentQuantity
      }
    });
  };

  return (
    <div className="mt-4">
      <BreadCrumb pageTitle="Search Items in the Lab" />
      
      <div className="mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search Items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-success">
                <i className="fas fa-search me-2"></i>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredData.map((item) => (
          <div className="col-md-3" key={item._id}>
            <IotCard
              cardArea={item.equipment_room}
              cardLoc={item.equipment_location}
              cardTitle={item.equipment_type}
              cardCategory={item.equipment_category}
              cardContent={item.total_quantity}
              cardContent2={item.current_quantity}
            />
            {item.current_quantity > 0 && (
              <button
                className="btn btn-outline-info w-100 mt-2"
                onClick={() => handleBorrow(
                  item._id,
                  item.equipment_type,
                  item.current_quantity
                )}
              >
                Borrow
              </button>
            
            )}
          </div>
        ))}
      </div>
      <br/>
      <ToastContainer position="bottom-end">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Items Fetched Successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default SearchItems;