import axios from 'axios';
import { SECOND_URL } from '../../../config';
import { GET_JUZ_FAIL, GET_JUZ_LOADING, GET_JUZ_SUCCESS } from '../../constants';

const getJuz = () => (distpach) => {
  distpach({
    type: GET_JUZ_LOADING,
  });
  axios
    .get(`${SECOND_URL}/juzs?language=id`)
    .then((res) => {
      distpach({
        type: GET_JUZ_SUCCESS,
        payload: res.data?.juzs,
      });
    })
    .catch(() => {
      distpach({
        type: GET_JUZ_FAIL,
        payload: 'Something went wrong',
      });
    });
};

export default getJuz;
