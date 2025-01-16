import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/NavBar';
import Sidebar from '../../Sidenav';
import Footer from '../../../components/Footer/Footer';

const DashboardLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <Container fluid className="flex-grow-1 mb-4">
        <Row className="mt-2">
          <Col md={2}>
            <div className="position-sticky" style={{ top: '1rem' }}>
              <Sidebar />
            </div>
          </Col>
          
          <Col md={10}>
            <div className="bg-white rounded shadow-sm p-4">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;