import axios from 'axios';
import { BASE_URL } from '../../../config';
import {
  GET_SURAH_BY_ID_FAIL,
  GET_SURAH_BY_ID_LOADING,
  GET_SURAH_BY_ID_SUCCESS,
} from '../../constants';

const getSurahById = (id) => (distpach) => {
  distpach({
    type: GET_SURAH_BY_ID_LOADING,
  });
  axios
    .get(
      `${BASE_URL}/surah/${id}/editions/en.transliteration,quran-uthmani,ar.alafasy,id.muntakhab,id.indonesian`
    )
    .then((res) => {
      distpach({
        type: GET_SURAH_BY_ID_SUCCESS,
        payload: res.data?.data,
      });
    })
    .catch(() => {
      distpach({
        type: GET_SURAH_BY_ID_FAIL,
        payload: 'Something went wrong',
      });
    });
};

export default getSurahById;
