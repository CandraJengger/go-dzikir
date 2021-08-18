import { LOGIN_LOADING, LOGIN_SUCCESS } from '../../constants/actionTypes';
import { USER } from '../../constants/general';

const generateUser = (username) => {
  let currentTime = new Date().toISOString();
  const data = JSON.parse(localStorage.getItem(USER));

  if (data && data.hasOwnProperty('name')) {
    const user =
      data?.date.substring(0, 10) === currentTime.substring(0, 10)
        ? {
            ...data,
            name: username,
          }
        : {
            name: username,
            date: new Date(),
            data: [],
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
