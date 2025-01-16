// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

// Loading component for Suspense fallback
const LoadingScreen = () => (
  <div className="d-flex justify-content-center align-items-center min-vh-100">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const AppRoutes = () => {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<LoadingScreen />}>
      {element}
    </Suspense>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;