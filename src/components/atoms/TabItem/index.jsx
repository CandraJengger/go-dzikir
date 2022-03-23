import React from 'react';
import PropTypes from 'prop-types';
import { ICHome, ICOpenBook } from '../../../assets/images';

function TabItem({ type, onClick }) {
  const Icon = () => {
    if (type === 'home') {
      return ICHome;
    }
    if (type === 'book') {
      return ICOpenBook;
    }

    return ICHome;
  };

  return (
    <button type="button" className="px-4 cursor-pointer" onClick={onClick}>
      <img src={Icon()} alt={type} />
    </button>
  );
}

TabItem.defaultProps = {
  type: 'home',
};

TabItem.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default TabItem;
