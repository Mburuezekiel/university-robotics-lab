import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';

// Static data for student options
const studentOptions = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", project: "Senior Design" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321", project: "Robotics Lab" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "555-555-5555", project: "IoT Research" }
];

// Breadcrumb Component
// TextField Component
const TextField = ({ label, value, onChange, type = "text", placeholder }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const LendDevices = () => {
  const [formData, setFormData] = useState({
    selectedStudent: '',
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    projectInfo: '',
    areaName1: '',
    areaDesc1: '',
    areaName2: '',
    areaDesc2: ''
  });

  const handleStudentSelect = (e) => {
    const selectedId = e.target.value;
    const student = studentOptions.find(s => s.id === parseInt(selectedId));
    
    if (student) {
      setFormData({
        ...formData,
        selectedStudent: selectedId,
        studentName: student.name,
        studentEmail: student.email,
        studentPhone: student.phone,
        projectInfo: student.project
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="container-fluid mt-4">
      <BreadCrumb pageTitle="Lend Item" />

      <form onSubmit={handleSubmit}>
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title mb-4">Personal Information</h4>
            <div className="row">
              <div className="col-12 mb-4">
                <label className="form-label">Select Student</label>
                <select 
                  className="form-select"
                  value={formData.selectedStudent}
                  onChange={handleStudentSelect}
                >
                  <option value="">Select a student</option>
                  {studentOptions.map(student => (
                    <option key={student.id} value={student.id}>
                      {student.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <TextField
                  label="Student Name"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  placeholder="Enter student name"
                />
                <TextField
                  label="Student Email"
                  type="email"
                  value={formData.studentEmail}
                  onChange={(e) => setFormData({...formData, studentEmail: e.target.value})}
                  placeholder="Enter student email"
                />
              </div>

              <div className="col-md-6">
                <TextField
                  label="Student Phone"
                  value={formData.studentPhone}
                  onChange={(e) => setFormData({...formData, studentPhone: e.target.value})}
                  placeholder="Enter phone number"
                />
                <TextField
                  label="Project Info"
                  value={formData.projectInfo}
                  onChange={(e) => setFormData({...formData, projectInfo: e.target.value})}
                  placeholder="Enter project details"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title mb-4">Item Information</h4>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  label="Area Name"
                  value={formData.areaName1}
                  onChange={(e) => setFormData({...formData, areaName1: e.target.value})}
                  placeholder="Enter area name"
                />
                <TextField
                  label="Area Description"
                  value={formData.areaDesc1}
                  onChange={(e) => setFormData({...formData, areaDesc1: e.target.value})}
                  placeholder="Enter area description"
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="Area Name"
                  value={formData.areaName2}
                  onChange={(e) => setFormData({...formData, areaName2: e.target.value})}
                  placeholder="Enter area name"
                />
                <TextField
                  label="Area Description"
                  value={formData.areaDesc2}
                  onChange={(e) => setFormData({...formData, areaDesc2: e.target.value})}
                  placeholder="Enter area description"
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-success mt-3 px-4">
          Lend Item
        </button>
      </form>
    </div>
  );
};

export default LendDevices;