import { LOGIN_LOADING, LOGIN_SUCCESS } from '../../constants/actionTypes';
import { USER } from '../../constants/general';

const generateUser = (username) => {
  const data = localStorage.getItem(USER);

  if (data && data.hasOwnProperty('name')) {
    const user = {
      ...data,
      name: username,
    };

    return user;
  } else {
    const user = {
      name: username,
      date: new Date(),
      data: [],
    };

    return user;
  }
};

const loginUser = (username) => (dispatch) => (onSuccess) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  const user = generateUser(username);

  localStorage.setItem(USER, JSON.stringify(user));

  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });

  onSuccess();
};

export default loginUser;
