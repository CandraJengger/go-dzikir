import React from 'react';
import PropTypes from 'prop-types';

const Gap = ({width, height}) => {
  return <div style={{width, height}}></div>;
};

Gap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default Gap;
