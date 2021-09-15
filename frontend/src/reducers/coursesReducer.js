import { GET_ALL_COURSES } from '../actions/actionTypes';

const initialState = {
  courses: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_COURSES:
      console.log(payload);
      return {
        ...state,
        courses: payload,
      };
    default:
      return state;
  }
}
