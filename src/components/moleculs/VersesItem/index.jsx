import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ICMark, ICPause, ICPlay } from '../../../assets/images';
import { Label, RoundButton, Gap, Text } from '../../atoms';
import convertToArabicNumbers from '../../../helpers/convertToArabicNumbers';

const checkFirstVerseContainsBismillah = (verse) => {
  if (verse.trim() !== 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ') {
    if (verse.slice(0, 38) === 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ') {
      return verse.replace(/بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ/gi, '');
    }
  }

  return verse;
};

function VersesItem({
  audioRef,
  audio,
  translation,
  numberOfAyahs,
  handlePlayPauseAudio,
  numberInSurah,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const onClick = () => {
    handlePlayPauseAudio();
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
    } else {
      setIsPlaying(true);
      audioRef.current?.play();
    }
  };

  useEffect(() => {
    audioRef.current?.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    audioRef.current?.addEventListener('playing', () => {
      if (audioRef.current?.src !== audio?.audio) {
        setIsPlaying(false);
      }
    });

    return () => {
      audioRef.current?.removeEventListener('ended', () => {});
      audioRef.current?.removeEventListener('playing', () => {});
    };
  });

  return (
    <div className=" mb-5 border-b-2 pb-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Label text={`${numberInSurah || 1}:${numberOfAyahs}`} variant="secondary" />
          <Gap width="8px" height="2px" />
          <RoundButton onClick={onClick}>
            {isPlaying ? <img src={ICPause} alt="pause" /> : <img src={ICPlay} alt="play" />}
          </RoundButton>
        </div>
        <RoundButton variant="transparent">
          <img src={ICMark} alt="play" />
        </RoundButton>
      </div>
      <Gap width="8px" height="30px" />
      <div>
        <div className="text-right mb-4 flex items-center justify-end">
          <Text variant="text-arabic">
            {checkFirstVerseContainsBismillah(audio?.text)}
            {'          '}
            <Text
              text={`( ${convertToArabicNumbers(audio?.numberInSurah || 1)} )`}
              variant="text-arabic-0"
              as="span"
            />
          </Text>
        </div>
        <Gap height="8px" width="20px" />
        <Text variant="text-grey" text={translation?.text} />
      </div>
    </div>
  );
}

VersesItem.defaultProps = {
  numberOfAyahs: 0,
  translation: '',
  numberInSurah: 0,
};

VersesItem.propTypes = {
  audio: PropTypes.any,
  translation: PropTypes.any,
  numberOfAyahs: PropTypes.number,
  handlePlayPauseAudio: PropTypes.func,
  audioRef: PropTypes.any,
  numberInSurah: PropTypes.number,
};

export default VersesItem;
