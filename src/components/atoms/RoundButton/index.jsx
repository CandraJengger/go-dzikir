import React from 'react';
import PropTypes from 'prop-types';
import variants from './button.variant';

function RoundButton({ children, variant = 'primary', ...props }) {
  const style = variants[variant];

  return (
    <button type="button" className={style} {...props}>
      {children}
    </button>
  );
}

RoundButton.defaultProps = {
  variant: 'primary',
};
RoundButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default RoundButton;
