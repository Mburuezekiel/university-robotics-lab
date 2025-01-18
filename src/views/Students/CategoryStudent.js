import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
// Mock data
const mockData = {
  name: "Cabinet Section A",
  doors: [
    { _id: "1", name: "Front Door" },
    { _id: "2", name: "Back Door" },
    { _id: "3", name: "Side Door" },
    { _id: "4", name: "Storage Door" }
  ]
};

const CategoryStudent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // Simulate API fetch
    const fetchData = () => {
      setTimeout(() => {
        setData(mockData);
        setLoading(false);
        toast.success('Doors loaded successfully', {
          position: 'bottom-right',
          autoClose: 3000
        });
      }, 1500);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <Spinner 
          animation="border" 
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="card">
        <div className="card-body">
          <p className="mb-0">
            <i className="fa-solid fa-circle-exclamation me-2"></i>
            No doors found in this section
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="area mt-2">
      {/* Breadcrumb */}
      <BreadCrumb pageTitle="Category" />
      

      <div className="row">
        {/* Section Title */}
        <div className="col-12">
          <h4 className="mb-4">{data.name}</h4>
        </div>

        {/* Main Content */}
        <div className="col-12">
          <div className="card bg-success shadow">
            <div className="card-body">
              <div className="row g-4">
                {data.doors.map(door => (
                  <div className="col-md-6" key={door._id}>
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        {/* Door Header */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="h5 mb-0">{door.name}</span>
                          <span>
                            <i className="fas fa-door-closed text-secondary"></i>
                          </span>
                        </div>

                        {/* Door Lines */}
                        {Array(4).fill().map((_, index) => (
                          <hr 
                            key={index}
                            className="my-3"
                            style={{ 
                              border: '1rem solid gray',
                              margin: '1rem 0',
                              opacity: '0.8'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryStudent;