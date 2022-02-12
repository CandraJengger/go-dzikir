import axios from 'axios';
import { SECOND_URL } from '../../../config';
import { GET_SURAH_FAIL, GET_SURAH_LOADING, GET_SURAH_SUCCESS } from '../../constants';

const getSurah = () => (distpach) => {
  distpach({
    type: GET_SURAH_LOADING,
  });
  axios
    .get(`${SECOND_URL}/chapters?language=id`)
    .then((res) => {
      distpach({
        type: GET_SURAH_SUCCESS,
        payload: res.data?.chapters,
      });
    })
    .catch(() => {
      distpach({
        type: GET_SURAH_FAIL,
        payload: 'Something went wrong',
      });
    });
};

export default getSurah;
