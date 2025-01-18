import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// Mock data
const mockData = {
  area_name: 'TF105',
  cabinets: [
    {
      _id: '1',
      name: 'Cabinet A',
      categories: [
        { _id: 'cat1', name: 'Category 1' },
        { _id: 'cat2', name: 'Category 2' },
        { _id: 'cat3', name: 'Category 3' }
      ]
    },
    {
      _id: '2',
      name: 'Cabinets B',
      categories: [
        { _id: 'cat4', name: 'Category 4' },
        { _id: 'cat5', name: 'Category 5' }
      ]
    }
  ],
  shelves: [
    { _id: 'shelf1', name: 'Shelf 1' },
    { _id: 'shelf2', name: 'Shelf 2' }
  ],
  bins: [
    { _id: 'bin1', name: 'Bin 1' },
    { _id: 'bin2', name: 'Bin 2' }
  ]
};

const CabinetViewStudent = () => {
  const [data, setData] = React.useState(mockData);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const reversedRange = (n) => {
    return Array.from({ length: n }, (_, index) => index + 1).reverse();
  };

  const LoadingSpinner = () => (
    <Spinner 
      animation="border" 
      style={{ width: '3rem', height: '3rem' }} 
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  const renderTF105 = () => (
    <>
      <div className="row">
        <div className="col-md-7">
          <h4 className="mb-4">Cabinets</h4>
          <div className="row">
            {loading ? (
              <div className="col-md-12"><LoadingSpinner /></div>
            ) : (
              data.cabinets.map(cabinet => (
                <div className="col-md-12" key={cabinet._id}>
                  <div className="card mt-4 bg-success">
                    <div className="card-body">
                      <p className="text-danger">{cabinet.name}</p>
                      <div className="row">
                        {cabinet.categories.map(category => (
                          <div className="col-md-2" key={category._id}>
                            <small>{category.name}</small>
                            <div className="card mt-2" style={{ height: '150px' }}>
                              <div className="card-body">
                                <Link 
                                  to={`/category/${category._id}`}
                                  className="btn btn-warning btn-sm mt-4"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {cabinet.name === 'Cabinets B' && (
                          <div className="col-md-4 mt-4">
                            <div className="card bg-primary">
                              <div className="card-body">
                                <h4 className="card-title">Trolley</h4>
                                <div className="card">
                                  <div className="card-body">
                                    <Link to="#" className="btn btn-warning btn-sm mt-4">
                                      View
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="col-md-5">
          <h4 className="mb-4">Shelfs</h4>
          <div className="row">
            {loading ? (
              <div className="col-md-6"><LoadingSpinner /></div>
            ) : data.shelves.length === 0 ? (
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <p><i className="fa-solid fa-circle-exclamation"></i> No shelves in this area</p>
                  </div>
                </div>
              </div>
            ) : (
              data.shelves.map(shelf => (
                <div className="col-md-6" key={shelf._id}>
                  <div className="card bg-info mt-3">
                    <div className="card-body">
                      <h4 className="card-title">{shelf.name}</h4>
                      {shelf.name === 'Shelf 1' && (
                        Array(6).fill().map((_, i) => (
                          <hr key={i} style={{ border: '1rem solid gray' }} />
                        ))
                      )}
                      {shelf.name === 'Shelf 2' && (
                        Array(9).fill().map((_, i) => (
                          <hr key={i} style={{ border: '1rem solid gray' }} />
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {!loading && data.bins.length > 0 && (
        <div className="row mt-4">
          <div className="col-md-6">
            {data.bins.map(bin => (
              <div className="card mt-4 bg-primary" key={bin._id}>
                <div className="card-body">
                  <h4 className="card-title">{bin.name}</h4>
                  <div className="row">
                    {Array(4).fill().map((_, i) => (
                      <div className="col-md-3" key={i}>
                        <div className="card">
                          <div className="card-body text-dark">
                            Component
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="col-md-4 offset-md-1 mt-4">
            <div className="card ms-4" style={{ border: '1px solid gray', height: '350px' }}>
              <div className="card-body" style={{ background: 'lightgreen' }}>
                <h2 className="text-center">General Items</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  const renderTF103 = () => (
    <div className="row mt-4">
      {/* Work Shelf */}
      <div className="col-md-3">
        <div className="card bg-success">
          <div className="card-body">
            <h4 className="card-title">Work Shelf</h4>
            <div className="card" style={{ height: '160px' }}>
              <div className="card-body">
                Lorem, ipsum dolor.
              </div>
            </div>
            {[1, 2, 3].map(section => (
              <div className="row mt-4" key={section}>
                {Array(2).fill().map((_, i) => (
                  <div className="col-md-6 mt-2" key={i}>
                    <div className="card">
                      <div className="card-body">
                        Bar {section}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Shelves */}
      {['Exercise Project Shelf', 'Project Shelf 1', 'Project Shelf 2'].map((title, index) => (
        <div className="col-md-3" key={index}>
          <div className="card bg-success">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              {reversedRange(5).map(n => (
                <div className="card mt-2" key={n}>
                  <div className="card-body">
                    Bar {n}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="area mt-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Area</li>
          <li className="breadcrumb-item active">{data.area_name}</li>
        </ol>
      </nav>

      {data.area_name === 'TF105' && renderTF105()}
      {data.area_name === 'TF103' && renderTF103()}
    </div>
  );
};

export default CabinetViewStudent;