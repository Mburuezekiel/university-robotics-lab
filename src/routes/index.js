import React from 'react';
import { Navigate } from 'react-router-dom';

// Admin Components
const Dashboard = React.lazy(() => import('../views/Admin/Dashboard'));
const DashboardLayout = React.lazy(() => import('../layouts/Admin/Dashboard/DashboardLayout'));
const AreaView = React.lazy(() => import('../views/Admin/AreaView'));
const LendView = React.lazy(() => import('../views/Admin/LendView'));
const IotDevices = React.lazy(() => import('../views/Admin/IotDevices'));
const AddArea = React.lazy(() => import('../views/Admin/AddArea'));
const CabinetView = React.lazy(() => import('../views/Admin/CabinetView'));
const ReportsView = React.lazy(() => import('../views/Admin/ReportsView'));
const SettingsView = React.lazy(() => import('../views/Admin/SettingsView'));
const ProfileView = React.lazy(() => import('../views/Admin/Profileview'));
const LendDevices = React.lazy(() => import('../views/Admin/LendDevices'));
const AddCabinet = React.lazy(() => import('../views/Admin/AddCabinet'));
const StudentList = React.lazy(() => import('../views/Admin/Students'));
const AddCategory = React.lazy(() => import('../views/Admin/AddCategory'));
const AddShelf = React.lazy(() => import('../views/Admin/AddShelf'));
const Category = React.lazy(() => import('../views/Admin/Category'));
const AddBins = React.lazy(() => import('../views/Admin/AddBins'));
const AddDoor = React.lazy(() => import('../views/Admin/AddDoor'));
const BorrowedItems = React.lazy(() => import('../views/Admin/BorrowedItems'));
const AddGeneralItem = React.lazy(() => import('../views/Admin/AddGeneralItem'));
const ApproveItems = React.lazy(() => import('../views/Admin/ApproveItems'));

// Home Component
const Home = React.lazy(() => import('../views/Home'));

export const routes = [
  {
    path: '/dashboard/*',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'area-view', element: <AreaView /> },
      { path: 'lend-view', element: <LendView /> },
      { path: 'approve-items', element: <ApproveItems /> },
      { path: 'iot-devices', element: <IotDevices /> },
      { path: 'add-item', element: <AddGeneralItem /> },
      { path: 'add-area', element: <AddArea /> },
      { path: 'cabinets-view/:id', element: <CabinetView /> },
      { path: 'category/:id/:cabinet_id/:category_id', element: <Category /> },
      { path: 'add-door/:id/:cabinet_id/:category_id', element: <AddDoor /> },
      { path: 'students', element: <StudentList /> },
      { path: 'reports', element: <ReportsView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: 'profile', element: <ProfileView /> },
      { path: 'borrowed', element: <BorrowedItems /> },
      { path: 'lend-devices', element: <LendDevices /> },
      { path: 'add-cabinet/:id', element: <AddCabinet /> },
      { path: 'add-shelf/:id', element: <AddShelf /> },
      { path: 'add-bin/:id', element: <AddBins /> },
      { path: 'add-category/:id/:cabinetId', element: <AddCategory /> },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
];
