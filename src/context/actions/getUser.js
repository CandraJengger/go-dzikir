import { GET_USER, USER_LOADING } from '../../constants/actionTypes';
import { USER } from '../../constants/general';

const getUser = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });

  const user = localStorage.getItem(USER);

  dispatch({
    type: GET_USER,
    payload: JSON.parse(user),
  });
};

export default getUser;
