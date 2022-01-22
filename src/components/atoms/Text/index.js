import React from 'react';
import variants from './text.variant';
import PropTypes from 'prop-types';

const Text = ({text, as = 'p', variant = 'text-grey', ...props}) => {
  const Tag = as;
  const style = variants[variant];

  return (
    <Tag className={style} {...props}>
      {text}
    </Tag>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  as: PropTypes.string,
  variant: PropTypes.string
};

export default Text;
