import {
  ADD_DZIKIR,
  CLEAR_AUTH_STATE,
  DELETE_USER,
  EDIT_DZIKIR,
  GET_USER,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  USER_LOADING,
} from '../constants';
import initialAuthStates from '../initialStates/auth';

// eslint-disable-next-line default-param-last
const auth = (state = initialAuthStates, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    case ADD_DZIKIR:
    case EDIT_DZIKIR:
    case GET_USER:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case DELETE_USER:
      return {
        ...state,
        loading: false,
        data: null,
        error: payload,
      };

    default:
      return state;
  }
};

export default auth;
