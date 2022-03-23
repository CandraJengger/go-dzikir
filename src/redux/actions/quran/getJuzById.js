import axios from 'axios';
import { BASE_URL } from '../../../config';
import { GET_JUZ_BY_ID_FAIL, GET_JUZ_BY_ID_LOADING, GET_JUZ_BY_ID_SUCCESS } from '../../constants';

const getJuzById = (number) => (distpach) => {
  distpach({
    type: GET_JUZ_BY_ID_LOADING,
  });
  axios
    .get(`${BASE_URL}/juz/${number}/id.indonesian`)
    .then((resTranslations) => {
      const indonesianEdition = resTranslations?.data?.data;
      axios.get(`${BASE_URL}/juz/${number}/ar.alafasy`).then((resAudio) => {
        const alafasyEdition = resAudio.data?.data;
        distpach({
          type: GET_JUZ_BY_ID_SUCCESS,
          payload: [{ ...alafasyEdition }, { ...indonesianEdition }],
        });
      });
    })
    .catch(() => {
      distpach({
        type: GET_JUZ_BY_ID_FAIL,
        payload: 'Something went wrong',
      });
    });
};

export default getJuzById;
