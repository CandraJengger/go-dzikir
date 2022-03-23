import React from 'react';
import PropTypes from 'prop-types';
import variants from './text.variant';

function Text({ text, children, as = 'p', variant = 'text-grey', ...props }) {
  const Tag = as;
  const content = text || children;
  const style = variants[variant];

  return (
    <Tag className={style} {...props}>
      {content}
    </Tag>
  );
}

Text.defaultProps = {
  as: 'p',
  variant: 'text-grey',
};

Text.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  as: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
