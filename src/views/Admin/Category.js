import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaPlus, FaDoorClosed, FaExclamationCircle } from "react-icons/fa";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb"; // Assuming the Breadcrumb component exists
import { toast } from "react-toastify";

const categoryData = {
  name: "Category Name",
  doors: [
    { _id: 1, name: "Door 1" },
    { _id: 2, name: "Door 2" },
    { _id: 3, name: "Door 3" },
  ]
};

const AreaView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call with static data
    setTimeout(() => {
      setData(categoryData);
      setLoading(false);
      toast.success("Categories Fetched Successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    }, 3000);
  }, []);

  return (
    <div className="container mt-4">
      <Breadcrumb title="Category" />
      <div className="d-flex justify-content-end mb-2">
        <Button variant="outline-success" className="btn-sm">
          <FaPlus /> Add Door
        </Button>
      </div>

      <div className="row">
        {loading && (
          <div className="col-12 text-center">
            <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!loading && !data.doors.length && (
          <div className="col-12">
            <div className="card">
              <div className="card-body text-center">
                <FaExclamationCircle className="text-warning" />
                <p>No Cabinets in this area</p>
              </div>
            </div>
          </div>
        )}

        {!loading && data.doors.length > 0 && (
          <div className="col-12">
            <div className="card mt-4 bg-success text-white">
              <div className="card-body">
                <h4>{data.name}</h4>
                <div className="row">
                  {data.doors.map((door) => (
                    <div className="col-md-4" key={door._id}>
                      <div className="card mt-3" style={{ height: "250px" }}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <span>{door.name}</span>
                            <span>
                              <FaDoorClosed />
                            </span>
                          </div>
                          <hr style={{ border: "1px solid gray" }} />
                          <hr style={{ border: "1px solid gray" }} />
                          <hr style={{ border: "1px solid gray" }} />
                          <hr style={{ border: "1px solid gray" }} />
                        </div>
                      </div>
                    </div>
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

export default AreaView;
