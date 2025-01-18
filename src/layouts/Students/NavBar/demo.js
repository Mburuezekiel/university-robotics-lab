import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

// Mock data
const equipmentData = [
  {
    "_id": "655ca85cb7eb6303807123c8",
    "equipment_type": "Universal Robots UR10 3 TF103",
    "equipment_room": "TF103",
    "equipment_location": "Cabinet",
    "equipment_category": "Robots and peripherals",
    "total_quantity": 3,
    "current_quantity": 2,
  },
  {
    "_id": "655dca684d538fb6a6c51dde",
    "equipment_type": "Robotiq FT-85",
    "equipment_room": "TF105",
    "equipment_location": "Shelf",
    "equipment_category": "Grippers",
    "total_quantity": 4,
    "current_quantity": 3,
  },
  {
    "_id": "655dd529b45f9bc44575d47f",
    "equipment_type": "Push buttons, lever and rocker switches",
    "equipment_room": "TF105",
    "equipment_location": "Cabinet",
    "equipment_category": "Buttons, relays, LEDs, etc.",
    "total_quantity": 45,
    "current_quantity": 45,
  }
];

const Demo = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      fontFamily: 'inherit',
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: equipmentData.map(item => item.equipment_type),
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
        rotate: -45,
        trim: true,
        maxHeight: 120
      },
    },
    yaxis: {
      title: {
        text: 'Quantity',
        style: {
          fontSize: '14px',
          fontWeight: 500,
        },
      },
      labels: {
        formatter: function (value) {
          return Math.floor(value);
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return value + " units";
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '14px',
      fontWeight: 500,
      markers: {
        width: 12,
        height: 12,
        radius: 6,
      },
    },
    colors: ['#0d6efd', '#198754'], // Bootstrap primary and success colors
  };

  const chartSeries = [
    {
      name: 'Total Quantity',
      data: equipmentData.map(item => item.total_quantity),
    },
    {
      name: 'Current Quantity',
      data: equipmentData.map(item => item.current_quantity),
    }
  ];

  return (
    <div className="container-fluid py-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-white border-bottom-0 py-3">
          <h5 className="mb-0">Equipment Inventory Overview</h5>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
            <div className="stats">
              <div className="small text-muted mb-1">Total Equipment Types</div>
              <div className="h5 mb-0">{equipmentData.length}</div>
            </div>
            <div className="stats text-end">
              <div className="small text-muted mb-1">Total Items</div>
              <div className="h5 mb-0">
                {equipmentData.reduce((acc, curr) => acc + curr.total_quantity, 0)}
              </div>
            </div>
          </div>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Demo;