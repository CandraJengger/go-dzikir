import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  placeholder = 'Masukkan Nama',
  value,
  onChange
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-4 w-full bg-background border-2 border-accent rounded-2xl text-secondary focus:outline-none focus:border-secondary text-base"
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.any
};

export default Input;
