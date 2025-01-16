import React from 'react';

const CustomButton = ({ buttonClass, children }) => {
  const defaultClasses = 'btn';
  const combinedClasses = buttonClass ? `${defaultClasses} ${buttonClass}` : defaultClasses;

  return (
    <button 
      type="button" 
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default CustomButton;