import { USER_LOADING, ADD_DZIKIR } from '../../constants/actionTypes';
import { USER } from '../../constants/general';

const addData = (user, dzikir) => (dispatch) => {
  user.data.push(dzikir);

  dispatch({
    type: USER_LOADING,
  });

  localStorage.setItem(USER, JSON.stringify(user));

  dispatch({
    type: ADD_DZIKIR,
    payload: user,
  });
};

export default addData;
