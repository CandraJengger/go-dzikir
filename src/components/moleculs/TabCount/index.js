import React from 'react';
import { Text } from '../../atoms';

const TabCount = ({ count, onTab }) => {
  return (
    <div onClick={onTab} className="w-full h-full">
      <Text text="Tab to count" variant="title" />
      <Text text={count} variant="superTitle" />
    </div>
  );
};

export default TabCount;
