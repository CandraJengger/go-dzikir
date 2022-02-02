import React from 'react';
import PropTypes from 'prop-types';
import { Gap, Text } from '../../atoms';

function TabCount({ open = false, count, onTab }) {
  const isOpen = open ? 'bottom-0' : '-bottom-full';

  return (
    <div
      className={`w-full h-4/6 bg-primary fixed ${isOpen} left-0 right-0 rounded-t-3xl pt-12 duration-300 text-center`}
    >
      <button type="button" onClick={onTab} className=" w-full h-full">
        <Text text="Tekan untuk menghitung" variant="superTitle-white" />
        <Gap height="100px" width="10px" />
        <Text text={count} variant="h0" />
      </button>
    </div>
  );
}

TabCount.propTypes = {
  open: PropTypes.bool,
  count: PropTypes.any,
  onTab: PropTypes.any,
};

export default TabCount;
