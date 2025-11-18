import React from 'react';

const Button = ({ children, onClick, disabled = false, variant = 'primary' }) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      data-testid="custom-button"
    >
      {children}
    </button>
  );
};

export default Button;
