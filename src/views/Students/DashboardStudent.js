import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
// Static data to replace API calls
const staticProfile = {
  name: 'John Doe',
  photo: '/api/placeholder/80/80',
  phone: '+1 234 567 8900',
  bio: 'Research student passionate about robotics'
};

const staticAreas = [
  { _id: "1", area_name: "Robotics Lab" },
  { _id: "2", area_name: "Electronics Lab" },
  { _id: "3", area_name: "3D Printing Lab" },
  { _id: "4", area_name: "IoT Lab" }
];

const staticItems = [
  {
    _id: "1",
    equipment_room: "Room 101",
    equipment_location: "Building A",
    equipment_type: "Arduino Kits",
    equipment_category: "Microcontrollers",
    total_quantity: 50,
    current_quantity: 35
  },
  {
    _id: "2",
    equipment_room: "Room 102",
    equipment_location: "Building B",
    equipment_type: "Sensors Pack",
    equipment_category: "Electronics",
    total_quantity: 100,
    current_quantity: 75
  },
  {
    _id: "3",
    equipment_room: "Room 103",
    equipment_location: "Building A",
    equipment_type: "Robot Arms",
    equipment_category: "Robotics",
    total_quantity: 20,
    current_quantity: 15
  }
];



// IoT Card Component
const IotCard = ({ cardArea, cardLoc, cardTitle, cardCategory, cardContent, cardContent2 }) => (
  <div className="card shadow-sm mb-4 h-100">
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

const Dashboard = () => {
  const [profile, setProfile] = useState(staticProfile);
  const [areas, setAreas] = useState(staticAreas);
  const [items, setItems] = useState(staticItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-fluid mt-4">
      <BreadCrumb pageTitle="Dashboard" />

      <div className="row mt-4">
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="card-title mb-0">Hey, {profile.name}</h4>
              </div>

              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem explicabo maiores
                officia perspiciatis aperiam, excepturi nisi adipisci consectetur, blanditiis voluptatem
                aliquam quod illo repellendus ea quaerat vitae beatae.
              </p>

              <div className="row">
                <div className="col-md-6">
                  <Link to="/dashboard/student/my-borrowed-items" className="btn btn-outline-info">
                    My Borrowed Items
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <img
            src="https://otomatiks.com/wp-content/uploads/2023/08/Robotics-lab-img.jpg"
            className="img-fluid rounded shadow-sm"
            alt="Laboratory"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <h4 className="mt-5 mb-4">Explore Lab Areas</h4>
      <div className="row">
        {areas.map(area => (
          <div className="col-md-6 mb-4" key={area._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title">{area.area_name}</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis odit doloribus
                  maiores voluptatem qui inventore non?
                </p>
                <Link 
                  to={`/cabinet/view/${area._id}`}
                  className="btn btn-outline-success"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-5 mb-4">Explore Lab Categories</h4>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4 mb-4" key={item._id}>
            <IotCard
              cardArea={item.equipment_room}
              cardLoc={item.equipment_location}
              cardTitle={item.equipment_type}
              cardCategory={item.equipment_category}
              cardContent={item.total_quantity}
              cardContent2={item.current_quantity}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;