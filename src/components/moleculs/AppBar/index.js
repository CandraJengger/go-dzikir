import React, { useEffect, useState } from 'react';
import ArrowBack from '../../../assets/images/arrow_back.svg';

const AppBar = ({ name = 'JD', withBackIcon, onBack, onClickImage }) => {
  const [alias, setAlias] = useState('');

  useEffect(() => {
    const nameSplit = name.split(' ');
    if (nameSplit.length > 2) {
      setAlias(nameSplit[0]?.substring(0, 1) + nameSplit[2]?.substring(0, 1));
    } else if (nameSplit.length === 2) {
      setAlias(nameSplit[0]?.substring(0, 1) + nameSplit[1]?.substring(0, 1));
    } else {
      setAlias(nameSplit[0]?.substring(0, 1));
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
        <button onClick={onBack}>
          <img src={ArrowBack} alt="Back Button" />
        </button>
      )}
      <span
        className="w-8 h-8 flex justify-center items-center text-sm bg-secondary text-background rounded-full"
        onClick={onClickImage}
      >
        {alias.toUpperCase()}
      </span>
    </div>
  );
};

export default AppBar;
