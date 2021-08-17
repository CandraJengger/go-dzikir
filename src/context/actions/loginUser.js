import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  USER,
} from '../../constants/actionTypes';

const loginUser = (username) => (dispatch) => (onSuccess) => {
  const user = {
    name: username,
    date: new Date(),
    data: [],
  };

  dispatch({
    type: LOGIN_LOADING,
  });

  localStorage.setItem(USER, JSON.stringify(user));

  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });

  onSuccess();
};

export default loginUser;
