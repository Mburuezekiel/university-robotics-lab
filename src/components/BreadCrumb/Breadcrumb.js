import React from 'react';

const BreadcrumbHeader = ({ pageTitle }) => {
  const styles = {
    container: {
      backgroundColor: '#23408f',
      color: '#fff',
      borderRadius: '5px'
    }
  };

  return (
    <div className="p-4 mb-4 shadow-md" style={styles.container}>
      <h1 className="mb-3">{pageTitle}</h1>
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb m-0">
          <li className="breadcrumb-item">
            <a href="/" className="text-white text-decoration-none">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="/robotics-lab" className="text-white text-decoration-none">
              Robotics Lab
            </a>
          </li>
          <li className="breadcrumb-item active text-white" aria-current="page">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbHeader;