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
        <span className="bg-backgroound border-2 border-secondary text-secondary w-8 h-8 rounded-full flex justify-center items-center text-base mr-4 ">
          {number}
        </span>
        <div className="text-left">
          <p className=" font-semibold">Juz {juz}</p>
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
  number: PropTypes.string,
  juz: PropTypes.string,
  verses: PropTypes.string,
};

export default JuzItem;