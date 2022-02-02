import React from 'react';
import PropTypes from 'prop-types';

function PlainLayout({ children, className }) {
  return <div className={`plain-layout ${className}`}>{children}</div>;
}

PlainLayout.defaultProps = {
  className: '',
};

PlainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PlainLayout;
