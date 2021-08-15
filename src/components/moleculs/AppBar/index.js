import React from 'react';
import ArrowBack from '../../../assets/images/arrow_back.svg';

const AppBar = ({ name = 'JD', withBackIcon, onBack, onClickImage }) => {
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
        {name}
      </span>
    </div>
  );
};

export default AppBar;
