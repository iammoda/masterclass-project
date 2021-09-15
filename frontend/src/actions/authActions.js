import { LOGIN_SUCCESS } from './actionTypes';

export const loginUser = (formdata) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: formdata,
    });
  } catch (err) {}
};
