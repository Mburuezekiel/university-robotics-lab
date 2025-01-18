import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '../../Admin/Dashboard/DashboardLayout';

import NavBar from '../../Students/NavBar/NavBar';
import Footer from '../../../components/Footer/Footer';
// Main Layout Component
const DashboardStudentLayout = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: '#e4e7e7' 
    }}>
      <NavBar />
      
      <div className="container-fluid mt-4 mb-4 flex-grow-1">
        <div className="row mt-2">
          <div className="col-md-12">
            {/* This is where child routes will be rendered */}
            <Outlet />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardStudentLayout;