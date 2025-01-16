import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Static data to replace API calls
const STATIC_STUDENTS = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "555-0101" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-0102" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "555-0103" },
  { id: 4, name: "Sarah Williams", email: "sarah@example.com", phone: "555-0104" },
];

const Breadcrumb = ({ pageTitle }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
    </ol>
  </nav>
);

const Button = ({ children, className }) => (
  <button className={`btn ${className}`}>
    {children}
  </button>
);

const StudentList = () => {
  const navigate = useNavigate();

  const handleViewStudent = (email) => {
    navigate(`/student/${email}`);
    toast.success('Navigating to student details', {
      position: "bottom-right",
      autoClose: 3000
    });
  };

  const handleAddStudent = () => {
    toast.info('Add student functionality coming soon!', {
      position: "bottom-right",
      autoClose: 3000
    });
  };

  return (
    <div className="container-fluid mt-4">
      <ToastContainer />
      
      <div className="row">
        <div className="col-12">
          <Breadcrumb pageTitle="All Students" />
          
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0">All Students</h2>
            <Button 
              className="btn-success btn-sm"
              onClick={handleAddStudent}
            >
              <i className="fas fa-plus me-2"></i>
              Add Student
            </Button>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STATIC_STUDENTS.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>
                          <Button 
                            className="btn-outline-secondary btn-sm"
                            onClick={() => handleViewStudent(student.email)}
                          >
                            View
                          </Button>
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
    </div>
  );
};

export default StudentList;