import { LOGIN_SUCCESS } from '../actions/actionTypes';

const initialState = {
  userEmail: 'gounder.mo@gmail.com',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userEmail: payload,
      };
    default:
      return state;
  }
}
