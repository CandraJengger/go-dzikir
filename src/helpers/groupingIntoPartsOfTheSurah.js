const groupingIntoPartsOfTheSurah = (data) => {
  if (data && data.length === 2) {
    const audios = data[0].ayahs;
    const translations = data[1].ayahs;

    return {
      audios,
      translations,
    };
  }

  return {
    audios: [],
    translations: [],
  };
};

export default groupingIntoPartsOfTheSurah;
