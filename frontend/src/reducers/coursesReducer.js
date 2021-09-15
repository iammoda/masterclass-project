import { GET_ALL_COURSES, ADD_TO_FAVS } from '../actions/actionTypes';

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

    case ADD_TO_FAVS:
      console.log(payload);
      // optimistic update to updated the favorite boolean for course in state rather than calling api to get all courses again

      const updatedCourses = state.courses.map((course) => {
        if (course.id === payload.course_id) {
          return {
            ...course,
            favorite: true,
          };
        } else {
          return course;
        }
      });

      return {
        ...state,
        courses: updatedCourses,
      };

    default:
      return state;
  }
}
