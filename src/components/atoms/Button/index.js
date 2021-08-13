import React from 'react';

const Button = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="py-4 px-12 w-full rounded-2xl bg-primary hover:bg-green-700 duration-300 text-white"
    >
      {text}
    </button>
  );
};

export default Button;
