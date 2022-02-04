import React from 'react';
import PropTypes from 'prop-types';

function Input({ type = 'text', placeholder = 'Masukkan Nama', value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-4 w-full bg-background border-2 border-accent rounded-2xl text-secondary focus:outline-none focus:border-secondary text-base"
      value={value}
      onChange={onChange}
    />
  );
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
