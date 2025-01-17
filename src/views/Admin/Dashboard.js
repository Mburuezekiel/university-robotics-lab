import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Spinner, Nav, Table, Badge, ProgressBar } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
const Dashboard = () => {
  const [barLevel, setBarLevel] = useState(5);
  const [loading, setLoading] = useState(true);
  const [selectedView, setSelectedView] = useState('chart');
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
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
  ];

  const totalItems = [17, 34, 16, 50, 237, 45, 38, 112, 15, 89, 33, 122];
  const currentItems = [10, 20, 15, 30, 150, 35, 20, 90, 8, 50, 20, 7];

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 500,
      toolbar: {
        show: true
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    xaxis: {
      categories,
      labels: {
        rotate: -45,
        style: {
          fontSize: '14px',
          fontWeight: 500
        }
      }
    },
    theme: {
      mode: 'light',
      palette: 'palette1'
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '70%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => `${value} units`
      }
    }
  };

  const chartSeries = [
    {
      name: 'Total Items',
      data: totalItems
    },
    {
      name: 'Current Items',
      data: currentItems
    }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBarLevel(100);
      setLoading(false);
    }, 2000);
  }, []);

  const getInventoryStatus = () => {
    const totalSum = totalItems.reduce((a, b) => a + b, 0);
    const currentSum = currentItems.reduce((a, b) => a + b, 0);
    const percentage = (currentSum / totalSum) * 100;
    
    if (percentage < 50) return { status: 'Low', variant: 'danger' };
    if (percentage < 80) return { status: 'Moderate', variant: 'warning' };
    return { status: 'Good', variant: 'success' };
  };

  const getStatusBadge = (current, total) => {
    const percentage = (current / total) * 100;
    let variant = 'success';
    
    if (percentage < 50) variant = 'danger';
    else if (percentage < 80) variant = 'warning';

    return (
      <Badge bg={variant} className="px-3 py-2">
        {Math.round(percentage)}%
      </Badge>
    );
  };

  const TableView = () => (
    <div className="table-responsive">
      <Table hover>
        <thead>
          <tr className="bg-light">
            <th>Category</th>
            <th className="text-end">Total Items</th>
            <th className="text-end">Current Items</th>
            <th className="text-end">Status</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr 
              key={category}
              className={hoveredCategory === category ? 'table-active' : ''}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <td>{category}</td>
              <td className="text-end">{totalItems[index]}</td>
              <td className="text-end">{currentItems[index]}</td>
              <td className="text-end">
                {getStatusBadge(currentItems[index], totalItems[index])}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="container-fluid p-4">
       <Breadcrumb pageTitle="Dashboard" />
      {/* <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
         
            {!loading && (
              <Card className="border-0 bg-light" style={{ width: '300px' }}>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <i className="bi bi-info-circle fs-4"></i>
                    </div>
                    <div>
                      <h6 className="mb-1">Inventory Status</h6>
                      <span className={`fw-bold text-${getInventoryStatus().variant}`}>
                        {getInventoryStatus().status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            )}
          </div>
        </Col>
      </Row> */}
      <Row className="mb-4">
  <Col className="d-flex justify-content-end"> {/* Changed to justify-content-end */}
    {!loading && (
      <Card className="border-0 bg-light" style={{ width: '250px' }}> {/* Reduced width */}
        <Card.Body className="py-2"> {/* Reduced vertical padding */}
          <div className="d-flex align-items-center">
            <div className="me-2"> {/* Reduced margin */}
              <i className="bi bi-info-circle fs-5"></i> {/* Reduced icon size from fs-4 to fs-5 */}
            </div>
            <div>
              <h6 className="mb-1 fs-6">Inventory Status</h6> {/* Added fs-6 for smaller heading */}
              <span className={`fw-bold text-${getInventoryStatus().variant} small`}> {/* Added small class */}
                {getInventoryStatus().status.toUpperCase()}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    )}
  </Col>
</Row>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div className="mt-3 text-muted">Loading dashboard data...</div>
        </div>
      ) : (
        <Card>
          <Card.Header className="bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Equipment Inventory Overview</h5>
              <Nav variant="pills" activeKey={selectedView} onSelect={(k) => setSelectedView(k)}>
                <Nav.Item>
                  <Nav.Link eventKey="chart" className="d-flex align-items-center">
                    <i className="bi bi-bar-chart me-2"></i>
                    Chart View
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="table" className="d-flex align-items-center">
                    <i className="bi bi-table me-2"></i>
                    Table View
                  </Nav.Link>
                </Nav.Item>
               
              </Nav>
              <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header className="bg-white">
              <h5 className="mb-0">Overall Progress</h5>
            </Card.Header>
            <Card.Body>
              <ProgressBar 
                animated 
                now={barLevel} 
                label={`${barLevel}%`} 
                variant={getInventoryStatus().variant} 
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
            </div>
          </Card.Header>
          <Card.Body>
            {selectedView === 'chart' ? (
              <div style={{ height: '600px' }}>
                <Chart 
                  options={chartOptions} 
                  series={chartSeries} 
                  type="bar" 
                  height="100%" 
                />
              </div>
            ) : (
              <TableView />
            )}
          </Card.Body>
        </Card>
      )}

      
    </div>
  );
};

export default Dashboard;