import axios from 'axios';
import { GET_ALL_COURSES } from './actionTypes';

//GET request to get all courses
//potentially change to be able to take any email in (auth)
export const getAllCourses = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.get(
      'https://mc-dev-5.herokuapp.com/jsonapi/v1/courses?email=gounder.mo@gmail.com',
      config
    );

    console.log(res.data);

    dispatch({
      type: GET_ALL_COURSES,
      payload: res.data,
    });
  } catch (err) {}
};
