import React from 'react';
import PropTypes from 'prop-types';
import variants from './text.variant';

function Text({ text, as = 'p', variant = 'text-grey', ...props }) {
  const Tag = as;
  const style = variants[variant];

  return (
    <Tag className={style} {...props}>
      {text}
    </Tag>
  );
}

Text.defaultProps = {
  as: 'p',
  variant: 'text-grey',
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  as: PropTypes.string,
  variant: PropTypes.string,
};

export default Text;
