import React from 'react';
import PropTypes from 'prop-types';

const Label = ({text}) => {
  return (
    <span className="text-background bg-primary py-1 px-2 rounded text-xs">
      {text}
    </span>
  );
};

Label.propTypes = {
  text: PropTypes.string
};

export default Label;
