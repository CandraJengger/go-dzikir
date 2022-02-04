import React from 'react';
import Text from '../Text';

function SurahItem() {
  return (
    <button
      type="button"
      className="w-full flex flex-row items-center justify-between p-4 mb-2 border-b-2"
    >
      <div className="flex flex-row items-center">
        <span className="bg-secondary text-white w-8 h-8 rounded-full flex justify-center items-center text-base mr-4 ">
          1
        </span>
        <div className="text-left">
          <p className=" font-semibold">Al-Fatihah</p>
          <Text variant="text-grey" text="Pembuka" />
        </div>
      </div>
      <Text variant="text-arabic-2" text="الفاتحة" />
    </button>
  );
}

export default SurahItem;
