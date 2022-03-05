import React from 'react';
import PropTypes from 'prop-types';
import variants from './label.variant';

function Label({ text, variant }) {
  const style = variants[variant];

  return <span className={`font-roboto ${style}`}>{text}</span>;
}

Label.defaultProps = {
  variant: 'primary',
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Label;
