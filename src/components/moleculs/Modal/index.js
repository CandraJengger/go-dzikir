import React from 'react';
import {Text} from '../../atoms';
import PropTypes from 'prop-types';

const Modal = ({children, open, onToggle, style}) => {
  const isOpen = open ? 'visible' : 'hidden';

  return (
    <div
      className={`fixed inset-0 flex ${isOpen} justify-center items-center `}
      style={style}
    >
      <div className="w-5/6 md:w-1/3 px-4 py-5 bg-background rounded-2xl z-10 modal-custom">
        {children || <Text variant="text-dark" text="Modal" />}
      </div>

      <span
        className="w-full h-full absolute inset-0 bg-secondary opacity-40"
        onClick={onToggle}
      ></span>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  onToggle: PropTypes.any,
  style: PropTypes.any
};

export default Modal;
