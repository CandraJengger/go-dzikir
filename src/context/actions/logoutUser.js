import { LOGIN_LOADING, LOGOUT_USER } from '../../constants/actionTypes';
import { USER } from '../../constants/general';

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
