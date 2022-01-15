import { USER_LOADING, EDIT_DZIKIR } from "../../constants/index";
import { USER } from "../../../constants/general";

const editData =
  (user, { key, value }) =>
  (dispatch) => {
    const newUser = {
      ...user,
      [key]: value,
    };

    dispatch({
      type: USER_LOADING,
    });

    localStorage.setItem(USER, JSON.stringify(newUser));

    dispatch({
      type: EDIT_DZIKIR,
      payload: newUser,
    });
  };

export default editData;
