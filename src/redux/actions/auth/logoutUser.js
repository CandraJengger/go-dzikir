import { LOGIN_LOADING, LOGOUT_USER } from "../../constants/index";

const logoutUser = (onSuccess) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  dispatch({
    type: LOGOUT_USER,
  });

  onSuccess();
};

export default logoutUser;
