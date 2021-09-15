import { GET_ALL_COURSES, ADD_TO_FAVS } from '../actions/actionTypes';

const initialState = {
  courses: [],
  fav: null,
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

    case ADD_TO_FAVS:
      console.log(payload);
      return {
        ...state,
        fav: payload,
      };

    default:
      return state;
  }
}
