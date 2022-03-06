import React from 'react';
import PropTypes from 'prop-types';

function FloatingActionButton({ Icon, onClick }) {
  return (
    <button
      className="fixed bottom-20 right-6 rounded-full w-10 h-10 flex justify-center items-center bg-white"
      type="button"
      onClick={onClick}
    >
      {Icon || ''}
    </button>
  );
}

FloatingActionButton.propTypes = {
  Icon: PropTypes.node,
  onClick: PropTypes.func,
};

export default FloatingActionButton;
