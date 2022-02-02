import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../atoms';

function Modal({ children, open, onToggle, style }) {
  const isOpen = open ? 'visible' : 'hidden';

  return (
    <div className={`fixed inset-0 flex ${isOpen} justify-center items-center `} style={style}>
      <div className="w-5/6 md:w-1/3 px-4 py-5 bg-background rounded-2xl z-10 modal-custom">
        {children || <Text variant="text-dark" text="Modal" />}
      </div>

      <button
        type="button"
        className="w-full h-full absolute inset-0 bg-secondary opacity-40"
        onClick={onToggle}
      >
        {' '}
      </button>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  style: PropTypes.any,
};

export default Modal;
