import React from 'react';
import variants from './button.variant';
import PropTypes from 'prop-types';

const Button = ({text, variant = 'primary', ...props}) => {
  const style = variants[variant];

  return (
    <button {...props} className={style}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: 'primary' | 'secondary'
};

export default Button;
