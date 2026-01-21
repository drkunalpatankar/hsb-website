import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      {...props}
    >
      <span className="btn__text">{children}</span>
    </button>
  );
};

export default Button;
