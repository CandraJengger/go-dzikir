import React from 'react';
import { ICMark, ICPlay } from '../../../assets/images';
import { Label, RoundButton, Gap, Text } from '../../atoms';

function VersesItem() {
  return (
    <div className=" mb-5 border-b-2 pb-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Label text="1:1" variant="secondary" />
          <Gap width="8px" height="2px" />
          <RoundButton>
            <img src={ICPlay} alt="play" />
          </RoundButton>
        </div>
        <RoundButton variant="transparent">
          <img src={ICMark} alt="play" />
        </RoundButton>
      </div>
      <Gap width="8px" height="30px" />
      <div>
        <div className="text-right mb-4">
          <Text text="بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ" variant="text-arabic" />
        </div>
        <Gap height="8px" width="20px" />
        <Text variant="text-dark" text="Bismillaahir Rahmaanir Raheem" />
        <Text
          variant="text-grey"
          text="Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang."
        />
      </div>
    </div>
  );
}

export default VersesItem;
