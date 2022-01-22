import React from 'react';
import {Gap, Text} from '../../atoms';
import PropTypes from 'prop-types';

const TabCount = ({open = false, count, onTab}) => {
  const isOpen = open ? 'bottom-0' : '-bottom-full';

  return (
    <div
      onClick={onTab}
      className={`w-full h-4/6 bg-primary fixed ${isOpen} left-0 right-0 rounded-t-3xl pt-12 duration-300 text-center`}
    >
      <Text text="Tekan untuk menghitung" variant="superTitle-white" />
      <Gap height="100px" width="10px" />
      <Text text={count} variant="h0" />
    </div>
  );
};

TabCount.propTypes = {
  open: PropTypes.bool,
  count: PropTypes.any,
  onTab: PropTypes.any
};

export default TabCount;
