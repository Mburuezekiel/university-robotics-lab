import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// Mock data
const mockCategoryData = {
  name: "Storage Category",
  doors: [
    { _id: "1", name: "Door 1" },
    { _id: "2", name: "Door 2" },
    { _id: "3", name: "Door 3" },
    { _id: "4", name: "Door 4" }
  ]
};

const Category = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id, cabinet_id, category_id } = useParams();

  useEffect(() => {
    // Simulate API call with mock data
    const timer = setTimeout(() => {
      setData(mockCategoryData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const LoadingSpinner = () => (
    <div className="col-md-12 text-center">
      <Spinner 
        animation="border" 
        style={{ width: '3rem', height: '3rem' }} 
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  const EmptyState = () => (
    <div className="col-md-12">
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="mb-0">
            <i className="fa-solid fa-circle-exclamation me-2"></i>
            No doors found in this category
          </p>
        </div>
      </div>
    </div>
  );

  const DoorCard = ({ door }) => (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm" style={{ height: '250px' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title mb-0">{door.name}</h5>
            <i className="fas fa-door-closed text-secondary"></i>
          </div>
          {Array(4).fill().map((_, index) => (
            <hr 
              key={index}
              className="my-3"
              style={{ border: '1rem solid gray' }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="category-view mt-2">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">Home</Link>
          </li>
          <li className="breadcrumb-item active">Category</li>
        </ol>
      </nav>

      {/* Add Door Button */}
      <div className="d-flex justify-content-end mb-4">
        <Link 
          to={`/add-door/${id}/${cabinet_id}/${category_id}`}
          className="btn btn-outline-success btn-sm"
        >
          <i className="fa-solid fa-plus me-2"></i>
          Add Door
        </Link>
      </div>

      {/* Main Content */}
      <div className="row">
        {data && <h4 className="mb-4">{data.name}</h4>}

        {loading ? (
          <LoadingSpinner />
        ) : !data?.doors?.length ? (
          <EmptyState />
        ) : (
          <div className="col-md-12">
            <div className="card bg-success shadow">
              <div className="card-body">
                <div className="row">
                  {data.doors.map(door => (
                    <DoorCard key={door._id} door={door} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;