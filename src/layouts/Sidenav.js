import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/dashboard/dashboard', icon: 'fas fa-chart-pie', label: 'Dashboard' },
    { path: '/dashboard/area-view', icon: 'fas fa-stream', label: 'Areas' },
    { path: '/dashboard/iot-devices', icon: 'fas fa-wave-square', label: 'General Items' },
    { path: '/dashboard/approve-items', icon: 'fab fa-hive', label: 'Approved Items' },
    { path: '/dashboard/lend-view', icon: 'fab fa-hive', label: 'Borrowed Items' },
    { path: '/dashboard/students', icon: 'fas fa-stream', label: 'Students' },
    { path: '/dashboard/profile', icon: 'fas fa-cogs', label: 'Profile' },
  ];

  return (
    <div className="card shadow-lg h-100" style={{ backgroundColor: '#23408f' }}>
      <div className="card-body">
        <div className="logo mb-4">
          <h2 className="text-white fw-bold">Robotic Lab</h2>
        </div>
        <hr/>
        <nav className="nav flex-column">
          {menuItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              className={`
                nav-link mb-3 p-3 rounded
                ${isActiveRoute(item.path) ? 'bg-white text-primary' : 'text-white hover-effect'}
              `}
              style={{
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              <i className={`${item.icon} me-2`}></i>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <style>{`
        .hover-effect:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }
        
        .nav-link {
          font-weight: 500;
          display: flex;
          align-items: center;
        }
        
        .nav-link i {
          width: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;