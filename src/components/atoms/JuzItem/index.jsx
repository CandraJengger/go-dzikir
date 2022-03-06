import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

function JuzItem({ onClick, number, juz, verses }) {
  return (
    <button
      type="button"
      className="w-full flex flex-row items-center justify-between p-4 mb-2 border-b-2"
      onClick={onClick}
    >
      <div className="flex flex-row items-center">
        <span className=" font-roboto bg-backgroound border-2 border-secondary text-secondary w-8 h-8 rounded-full flex justify-center items-center text-xs font-semibold mr-4 ">
          {number}
        </span>
        <div className="text-left">
          <p className=" font-roboto font-medium">Juz {juz}</p>
          <Text variant="text-grey-2" text={`${verses} ayat`} />
        </div>
      </div>
    </button>
  );
}

JuzItem.defaultProps = {
  onClick: () => {},
  number: '1',
  juz: '1',
  verses: '148',
};

JuzItem.propTypes = {
  onClick: PropTypes.func,
  number: PropTypes.number,
  juz: PropTypes.number,
  verses: PropTypes.number,
};

export default JuzItem;
