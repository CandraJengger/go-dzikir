import React from 'react';
import PropTypes from 'prop-types';
import variants from './button.variant';

function Button({ text, variant = 'primary', ...props }) {
  const style = variants[variant];

  return (
    <button type="button" className={style} {...props}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Button;
