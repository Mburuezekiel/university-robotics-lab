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

// Student Components
const StudentDashboardLayout = React.lazy(() => import('../layouts/Students/Dashboard/DashboardLayout'));
const StudentDashboard = React.lazy(() => import('../views/Students/DashboardStudent'));
// const StudentAreaView = React.lazy(() => import('../views/Student/AreaView'));
// const StudentLendView = React.lazy(() => import('../views/Student/LendView'));
// const StudentIotDevices = React.lazy(() => import('../views/Student/IotDevices'));
// const StudentReportsView = React.lazy(() => import('../views/Student/ReportsView'));
const StudentProfileView = React.lazy(() => import('../views/Students/Profileview'));
const SearchItems = React.lazy(() => import('../views/Students/SearchItem'));
const Borrow = React.lazy(() => import('../views/Students/Borrow'));
const MyBorrowedItems= React.lazy(() => import('../views/Students/MyBorrowedItems'));
const StudentBorrow= React.lazy(() => import('../views/Students/StudentBorrow'));


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
  // {
  //   path: "/dashboard/student",
  //   name: "Student",
  //   component: DashboardStudentLayout,
  //   meta: { requiresStudentAuth: true },
  //   children: [
  //     {
  //       path: "/dashboard/student",
  //       name: "DashboardStudent",
  //       component: DashboardStudent,
  //     },
  //     {
  //       path: "/dashboard/student/profile",
  //       name: "ProfileviewStudent",
  //       component: ProfileviewStudent,
  //     },
  //     {
  //       path: "/dashboard/student/borrow",
  //       name: "Borrow",
  //       component: Borrow,
  //     },
  //     {
  //       path: "/dashboard/student/cabinets-view/:id",
  //       name: "CabinetViewStudent",
  //       component: CabinetViewStudent,
  //     },
  //     {
  //       path: "/dashboard/student/category/:id/:cabinet_id/:category_id",
  //       name: "CategoryStudent",
  //       component: CategoryStudent,
  //     },
  //     {
  //       path: "/dashboard/student/borrow-item/:id/:n/:q",
  //       name: "StudentBorrow",
  //       component: StudentBorrow,
  //     },
  //     {
  //       path: "/dashboard/student/my-borrowed-items",
  //       name: "MyBorrowedItems",
  //       component: MyBorrowedItems,
  //     },
  //     {
  //       path: "/dashboard/student/search",
  //       name: "SearchItem",
  //       component: SearchItem,
  //     },
  //   ],
  // },
  {
    path: '/dashboard/student',
    element: <StudentDashboardLayout />,
    children: [
      { path: '/dashboard/student', element: <StudentDashboard /> },
      { path: '/dashboard/student/profile', element: <StudentProfileView /> },
      { path: '/dashboard/student/search', element: <SearchItems /> },
      { path: '/dashboard/student/borrow', element: <Borrow /> },
      { path: '/dashboard/student/borrow-item/:id/:n/:q', element: <Navigate to="/dashboard/student/my-borrowed-items" replace /> },
      { path: '/dashboard/student/my-borrowed-items', element: <MyBorrowedItems /> },
      { path: '/dashboard/student/borrow-item/:id/:n/:q', element: <StudentBorrow /> },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
];