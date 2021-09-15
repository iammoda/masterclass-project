import { LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes';

const initialState = {
  userEmail: 'gounder.mo@gmail.com',
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userEmail: payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
