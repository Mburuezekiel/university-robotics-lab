import React, { useState, useEffect } from "react";

const CabinetView = () => {
  const [loading, setLoading] = useState(false);

  // Static data
  const data = {
    area_name: "TF105", // Change to 'TF103' to see different content
    cabinets: [
      {
        _id: "1",
        name: "Cabinet 1",
        categories: [
          { _id: "1", name: "Category 1" },
          { _id: "2", name: "Category 2" }
        ]
      },
      {
        _id: "2",
        name: "Cabinet B",
        categories: [{ _id: "3", name: "Category 3" }]
      }
    ],
    shelves: [
      { _id: "1", name: "Shelf 1" },
      { _id: "2", name: "Shelf 2" }
    ],
    bins: [
      { _id: "1", name: "Bin 1" },
      { _id: "2", name: "Bin 2" }
    ]
  };

  // Mock loading state
  useEffect(() => {
    setLoading(false); // Simulate loading completion
  }, []);

  return (
    <div className="container mt-2">
      <h2>{`Area - ${data.area_name}`}</h2>

      {/* Action Buttons */}
      <div className="d-flex justify-content-end mb-2">
        <button className="btn btn-outline-warning btn-sm me-2">
          <i className="fa-solid fa-plus"></i> Add Cabinet
        </button>
        <button className="btn btn-outline-dark btn-sm me-2">
          <i className="fa-solid fa-plus"></i> Add Shelves
        </button>
        <button className="btn btn-outline-success btn-sm me-2">
          <i className="fa-solid fa-plus"></i> Add Bins
        </button>
      </div>

      {data.area_name === "TF105" && (
        <div className="row">
          {/* Cabinets Section */}
          <div className="col-md-7">
            <h4>Cabinets</h4>
            {loading ? (
              <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              data.cabinets.map(cabinet => (
                <div key={cabinet._id} className="card mt-4 bg-success">
                  <div className="card-body">
                    <p>{cabinet.name}</p>
                    <div className="row">
                      {cabinet.categories.map(category => (
                        <div key={category._id} className="col-md-2">
                          <small>{category.name}</small>
                          <div className="card mt-2" style={{ height: "150px" }}>
                            <div className="card-body">
                              <button className="btn btn-warning btn-sm mt-4">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Shelves Section */}
          <div className="col-md-5">
            <h4>Shelves</h4>
            {loading ? (
              <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : data.shelves.length === 0 ? (
              <div className="card">
                <div className="card-body">
                  <p>
                    <i className="fa-solid fa-circle-exclamation"></i> No shelves in this area
                  </p>
                </div>
              </div>
            ) : (
              data.shelves.map(shelf => (
                <div key={shelf._id} className="col-md-6">
                  <div className="card bg-info mt-3">
                    <div className="card-body">
                      <h4 className="card-title">{shelf.name}</h4>
                      {[...Array(shelf.name === "Shelf 1" ? 6 : 9)].map((_, index) => (
                        <hr key={index} style={{ border: "1rem solid gray" }} />
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Bins Section */}
      <div className="row mt-4">
        {loading ? (
          <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : data.bins.length === 0 ? (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <p>
                  <i className="fa-solid fa-circle-exclamation"></i> No Bins in this area
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-7">
            {data.bins.map(bin => (
              <div key={bin._id} className="card mt-4 bg-primary">
                <div className="card-body">
                  <h4 className="card-title">Component</h4>
                  <div className="row">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="col-md-3">
                        <div className="card">
                          <div className="card-body text-dark">Component</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* General Items Card */}
        <div className="col-md-4 mt-4">
          <div className="card" style={{ border: "1px solid gray", height: "350px" }}>
            <div className="card-body" style={{ background: "lightgreen" }}>
              <h2 className="text-center">General Items</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinetView;
