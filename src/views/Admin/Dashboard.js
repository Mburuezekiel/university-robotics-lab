import React, { useState, useEffect } from 'react';
import { ProgressBar, Card, Row, Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import BreadCrumb from '../../components/BreadCrumb/Breadcrumb';

const Dashboard = () => {
  const [barLevel, setBarLevel] = useState(5);
  const [loading, setLoading] = useState(true);

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 500,
    },
    xaxis: {
      categories: [
        'Robots and peripherals',
        'Grippers',
        'Cameras',
        'Power sources',
        'Buttons, relays, LEDs, etc.',
        'Electric motors and controls',
        'Pneumatic parts',
        'Pneumatic actuators',
        'Laser scanners',
        'Arduino kamat',
        'Sensor trolley',
        'Others',
      ],
      labels: {
        rotate: -45,
        show: true,
        trim: true,
        style: {
          fontSize: '16px',
        },
      },
    },
  };

  const chartSeries = [
    {
      name: 'Total Items',
      data: [17, 34, 8, 23, 237, 45, 8, 112, 5, 89, 33, 22],
    },
    {
      name: 'Current Items',
      data: [10, 20, 15, 30, 150, 35, 20, 90, 8, 50, 20, 15],
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBarLevel(100);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="mt-2">
      <BreadCrumb Pagetitle="Dashboard" />
      <div className="mt-3">
        <ProgressBar now={barLevel} label={`${barLevel}%`} striped variant="success" />
      </div>
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="card-title">All Equipments</h5>
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <Chart options={chartOptions} series={chartSeries} type="bar" height={500} />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
