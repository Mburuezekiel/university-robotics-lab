import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';
// Static data to replace API calls
const staticBorrowedItems = [
  {
    _id: 1,
    student_name: "John Doe",
    student_email: "john.doe@university.edu",
    projectName: "Robotics Research",
    equipment: [{ equipment_type: "Arduino Kit", quantity: 2 }],
    borrowed_date: "2024-01-10",
    due_return_date: "2024-01-24",
    status: "borrowed",
  },
  {
    _id: 2,
    student_name: "Jane Smith",
    student_email: "jane.smith@university.edu",
    projectName: "IoT Development",
    equipment: [{ equipment_type: "Raspberry Pi", quantity: 1 }],
    borrowed_date: "2024-01-15",
    due_return_date: "2024-01-29",
    status: "returned",
  },
  {
    _id: 3,
    student_name: "Mike Johnson",
    student_email: "mike.j@university.edu",
    projectName: "Sensor Networks",
    equipment: [{ equipment_type: "Sensor Kit", quantity: 3 }],
    borrowed_date: "2024-01-12",
    due_return_date: "2024-01-26",
    status: "borrowed",
  },
];

// Breadcrumb Component
const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {pageTitle}
      </li>
    </ol>
  </nav>
);

// Status Badge Component
const StatusBadge = ({ status }) => {
  const badgeClass =
    status === "borrowed" ? "bg-warning text-dark" : "bg-success text-white";

  return <span className={`badge ${badgeClass}`}>{status}</span>;
};

// LendView Component
const LendView = () => {
  useEffect(() => {
    toast.success("Borrowed Items Loaded Successfully!", {
      autoClose: 3000,
    });
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12">
          <BreadCrumb pageTitle="Borrowed Items" />

          <div className="d-flex justify-content-end mb-4">
            <Link
              to="/dashboard/lend-devices"
              className="btn btn-success btn-sm d-flex align-items-center"
            >
              <i className="fas fa-plus me-2"></i>
              Lend Devices
            </Link>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Borrowed Items Inventory</h4>

              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Student Name</th>
                      <th scope="col">Student Email</th>
                      <th scope="col">Project Name</th>
                      <th scope="col">Equipment</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Date Borrowed</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staticBorrowedItems.map((item) => (
                      <tr key={item._id}>
                        <td>{item.student_name}</td>
                        <td>
                          <a
                            href={`mailto:${item.student_email}`}
                            className="text-decoration-none"
                          >
                            {item.student_email}
                          </a>
                        </td>
                        <td>{item.projectName}</td>
                        <td>{item.equipment[0].equipment_type}</td>
                        <td>{item.equipment[0].quantity}</td>
                        <td>
                          {new Date(item.borrowed_date).toLocaleDateString()}
                        </td>
                        <td>
                          {new Date(item.due_return_date).toLocaleDateString()}
                        </td>
                        <td>
                          <StatusBadge status={item.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LendView;
