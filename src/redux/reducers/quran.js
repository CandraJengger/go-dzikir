import {
  GET_JUZ_FAIL,
  GET_JUZ_LOADING,
  GET_JUZ_SUCCESS,
  GET_SURAH_FAIL,
  GET_SURAH_LOADING,
  GET_SURAH_SUCCESS,
} from '../constants';
import initialQuranStates from '../initialStates/quran';

// eslint-disable-next-line default-param-last
const quran = (state = initialQuranStates, { type, payload }) => {
  switch (type) {
    case GET_JUZ_LOADING:
    case GET_SURAH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_JUZ_SUCCESS:
      return {
        ...state,
        loading: false,
        dataByJuz: payload,
      };

    case GET_SURAH_SUCCESS:
      return {
        ...state,
        loading: false,
        dataBySurah: payload,
      };

    case GET_SURAH_FAIL:
    case GET_JUZ_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default quran;
