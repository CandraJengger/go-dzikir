import { GET_USER, LOGIN_LOADING, USER } from '../../constants/actionTypes';

const getUser = () => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  const user = localStorage.getItem(USER);

  dispatch({
    type: GET_USER,
    payload: JSON.parse(user),
  });
};

export default getUser;
