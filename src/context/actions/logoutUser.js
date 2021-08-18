import { LOGIN_LOADING, LOGOUT_USER } from '../../constants/actionTypes';

const logoutUser = () => (dispatch) => (onSuccess) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  dispatch({
    type: LOGOUT_USER,
  });

  onSuccess();
};

export default logoutUser;
