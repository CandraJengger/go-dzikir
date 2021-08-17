import { LOGIN_LOADING, LOGOUT_USER, USER } from '../../constants/actionTypes';

const logoutUser = () => (dispatch) => (onSuccess) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  localStorage.removeItem(USER);

  dispatch({
    type: LOGOUT_USER,
  });

  onSuccess();
};

export default logoutUser;
