import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
const BreadCrumb = ({ Pagetitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {Pagetitle}
      </li>
    </ol>
  </nav>
);

const Button = ({ buttonClass, children }) => (
  <button className={buttonClass}>{children}</button>
);

const AreaCard = ({ CardTitle, CardLink }) => (
  <div className="card shadow-sm mb-4">
    <div className="card-body">
      <h5 className="card-title">{CardTitle}</h5>
      <hr/>
      <Link to={`/areas/${CardLink}`} className="btn btn-primary btn-sm">
        Explore
      </Link>
    </div>
  </div>
);

// Main Component
const Areas = () => {
  const [loading, setLoading] = useState(false);
  const [areas, setAreas] = useState([]);
  const [barLevel, setBarLevel] = useState(0);

  // Static Data
  const staticAreas = [
    { _id: 1, area_name: "TF105" },
    { _id: 2, area_name: "TF103" },
    { _id: 3, area_name: "Lab Room C" },
  ];

  useEffect(() => {
    setLoading(true);
    setBarLevel(5);

    // Simulate API call delay
    setTimeout(() => {
      setBarLevel(100);
      setLoading(false);
      setAreas(staticAreas);
      toast.success("Areas Fetched Successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }, 1000); // Simulate loading for 1 second
  }, []);

  return (
    <div className="area mt-2">
      <BreadCrumb Pagetitle="Areas" />

      <div className="d-flex justify-content-end mb-2 mt-3">
        <Link to="/dashboard/add-area">
          <Button buttonClass="me-2 btn btn-success btn-sm">
            <i className="fa-solid fa-plus"></i> Add Areas
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${barLevel}%` }}
          >
            Loading...
          </div>
        </div>
      ) : (
        <div className="row">
          {areas.map((area) => (
            <div className="col-md-6" key={area._id}>
            
              <AreaCard CardTitle={area.area_name} CardLink={area._id} />
                <hr/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Areas;
