import React from 'react';

const Label = ({ text }) => {
  return (
    <span className="text-background bg-primary py-1 px-2 rounded text-xs">
      {text}
    </span>
  );
};

export default Label;
