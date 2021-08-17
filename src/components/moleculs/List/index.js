import React from 'react';
import { ListItem } from '../../atoms';

const List = ({ data = [], category = 'all' }) => {
  const newData =
    category === 'all' ? data : data.filter((item) => category === item.dzikir);

  return (
    <ul className="h-56 overflow-y-auto">
      {newData.length > 0 && category !== 'all' ? (
        newData.map(({ id, time, count }) => (
          <ListItem
            as="li"
            title={time.toLocaleTimeString()}
            label={`${count}x`}
            key={id}
          />
        ))
      ) : newData.length > 0 && category === 'all' ? (
        newData.map(({ id, dzikir, time, count }) => (
          <ListItem
            as="li"
            title={`${dzikir} ${time.toLocaleTimeString()}`}
            label={`${count}x`}
            key={id}
          />
        ))
      ) : (
        <ListItem as="li" title="Belum ada" />
      )}
    </ul>
  );
};

export default List;
