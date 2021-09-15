import { LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const loginUser = (formdata) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: formdata,
    });
  } catch (err) {}
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
