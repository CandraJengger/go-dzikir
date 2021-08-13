import React from 'react';
import variants from './button.variant';

const Button = ({ text, variant = 'primary', ...props }) => {
  const style = variants[variant];

  return (
    <button {...props} className={style}>
      {text}
    </button>
  );
};

export default Button;
