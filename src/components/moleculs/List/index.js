import React from 'react';
import { ListItem } from '../../atoms';

const List = ({ data = [] }) => {
  return (
    <ul className="h-56 overflow-y-auto">
      {data.map(({ id, time, count }) => (
        <ListItem as="li" title={time} label={`${count}x`} key={id} />
      ))}
    </ul>
  );
};

export default List;
