import React from 'react';
import {ListItem} from '../../atoms';
import PropTypes from 'prop-types';

const List = ({data = [], category = 'all'}) => {
  const newData =
    category === 'all' ? data : data.filter((item) => category === item.dzikir);

  return (
    <ul className="h-56 overflow-y-auto">
      {newData.length > 0 && category !== 'all' ? (
        newData.map(({id, time, count}) => (
          <ListItem
            as="li"
            title={new Date(time).toLocaleTimeString()}
            label={`${count}x`}
            key={id}
          />
        ))
      ) : newData.length > 0 && category === 'all' ? (
        newData.map(({id, dzikir, time, count}) => (
          <ListItem
            as="li"
            title={`${dzikir} ${new Date(time).toLocaleTimeString()}`}
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

List.propTypes = {
  data: PropTypes.array,
  category: PropTypes.string
};

export default List;
