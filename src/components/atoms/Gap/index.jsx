import React from 'react';
import PropTypes from 'prop-types';

function Gap({ width, height }) {
  return <div style={{ width, height }} />;
}

Gap.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Gap;
