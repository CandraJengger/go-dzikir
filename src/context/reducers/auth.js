import {
  CLEAR_AUTH_STATE,
  DELETE_USER,
  GET_USER,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from '../../constants/actionTypes';

const auth = (state, { type, payload }) => {
  switch (type) {
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
