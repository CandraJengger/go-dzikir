import React from 'react';
import PropTypes from 'prop-types';

const PlainLayout = ({children, className}) => {
  return <div className={`plain-layout ${className}`}>{children}</div>;
};

PlainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default PlainLayout;
