import React from 'react';

const PlainLayout = ({children, className}) => {
  return <div className={`plain-layout ${className}`}>{children}</div>;
};

export default PlainLayout;
