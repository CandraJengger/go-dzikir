import { LOGIN_LOADING, LOGIN_SUCCESS } from '../../constants/index';
import { USER } from '../../../constants/general';

const generateUser = (username) => {
  const currentTime = new Date().toISOString();
  const data = JSON.parse(localStorage.getItem(USER));

  if (data && Object.prototype.hasOwnProperty.call(data, 'name')) {
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
  }
  const user = {
    name: username,
    date: new Date(),
    data: [],
  };

  return user;
};

const loginUser = (username, onSuccess) => (dispatch) => {
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
