import React from 'react';
import variants from './text.variant';

const Text = ({ text, as = 'p', variant = 'text-grey', ...props }) => {
  const Tag = as;
  const style = variants[variant];

  return (
    <Tag className={style} {...props}>
      {text}
    </Tag>
  );
};

export default Text;
