import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ICArrowBack } from '../../../assets/images';

function AppBar({ name = 'JD', withBackIcon, onBack, onClickImage }) {
  const [alias, setAlias] = useState('');

  useEffect(() => {
    const nameSplit = name.split(' ');
    if (nameSplit.length > 2) {
      setAlias(nameSplit[0].substring(0, 1) + nameSplit[2].substring(0, 1));
    } else if (nameSplit.length === 2) {
      setAlias(nameSplit[0].substring(0, 1) + nameSplit[1].substring(0, 1));
    } else {
      setAlias(nameSplit[0].substring(0, 1));
    }
  }, [name]);

  return (
    <div
      className={
        withBackIcon
          ? 'flex justify-between items-center mb-7'
          : 'flex justify-end items-center mb-7'
      }
    >
      {withBackIcon && (
        <button type="button" onClick={onBack}>
          <img src={ICArrowBack} alt="Back Button" className="w-8 h-8 -ml-1" />
        </button>
      )}
      <button
        type="button"
        className="w-8 h-8 flex justify-center items-center text-sm bg-secondary text-background rounded-full cursor-pointer"
        onClick={onClickImage}
      >
        {alias.toUpperCase()}
      </button>
    </div>
  );
}

AppBar.defaultProps = {
  withBackIcon: true,
};

AppBar.propTypes = {
  name: PropTypes.string.isRequired,
  withBackIcon: PropTypes.bool,
  onBack: PropTypes.func.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default AppBar;
