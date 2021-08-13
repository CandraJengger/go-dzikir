import React from 'react';
import variants from './text.variant';

const Text = ({ text, as = 'p', variant = 'text-grey' }) => {
  const Tag = as;
  const style = variants[variant];

  return <Tag className={style}>{text}</Tag>;
};

export default Text;
