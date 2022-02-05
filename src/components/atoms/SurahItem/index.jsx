import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

function SurahItem({ onClick, number, surah, translatedName, verses, nameArabic }) {
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
          <p className=" text-base font-semibold">{surah}</p>
          <Text variant="text-grey-2" text={`${translatedName} (${verses} ayat)`} />
        </div>
      </div>
      <Text variant="text-arabic-2" text={nameArabic} />
    </button>
  );
}

SurahItem.defaultProps = {
  onClick: () => {},
  number: '1',
  surah: 'Al-Fatihah',
  translatedName: 'Pembuka',
  nameArabic: 'الفاتحة',
  verses: '7',
};

SurahItem.propTypes = {
  onClick: PropTypes.func,
  number: PropTypes.string,
  surah: PropTypes.string,
  translatedName: PropTypes.string,
  verses: PropTypes.string,
  nameArabic: PropTypes.string,
};

export default SurahItem;
