import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Area = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static data for demonstration purposes
  const staticData = [
    {
      _id: '1',
      name: 'Category 1',
      doors: [
        { _id: '1', name: 'Door 1' },
        { _id: '2', name: 'Door 2' },
      ],
    },
    {
      _id: '2',
      name: 'Category 2',
      doors: [
        { _id: '3', name: 'Door 3' },
        { _id: '4', name: 'Door 4' },
      ],
    },
  ];

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData(staticData);
      setLoading(false);
      toast.success('Categories Fetched Successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }, 3000);
  }, []);

  return (
    <div className="area mt-4 container">
      <ToastContainer />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Area
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-end mb-3">
        <Link to="/add-category" className="btn btn-outline-success btn-sm">
          <i className="fas fa-plus"></i> Add Category
        </Link>
      </div>

      <h4>Categories</h4>

      <div className="row">
        {loading ? (
          <div className="col-md-3">
            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : data.length === 0 ? (
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <p>
                  <i className="fas fa-exclamation-circle"></i> No Cabinets in this area
                </p>
              </div>
            </div>
          </div>
        ) : (
          data.map((category) => (
            <div className="col-md-4" key={category._id}>
              <div className="card mt-4 bg-success text-white">
                <div className="card-body">
                  <h4
                    className="card-title"
                    title="Hi! I'm tooltip Hi! I'm tooltip Hi! I'm tooltip"
                  >
                    {category.name}
                  </h4>
                  <div className="row">
                    {category.doors.map((door) => (
                      <div className="col-md-6 mt-2" key={door._id}>
                        <div className="card">
                          <div className="card-body">{door.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/" className="btn btn-light btn-sm mt-3">
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Area;
