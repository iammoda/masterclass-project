import axios from 'axios';
import { GET_ALL_COURSES, ADD_TO_FAVS, DEL_FROM_FAVS } from './actionTypes';
import { ToastContainer, toast } from 'react-toastify';

//remove from favs if time

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

export const addToFavs = (courseId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = {
      email: 'gounder.mo@gmail.com',
      course_id: courseId,
    };
    const res = await axios.post(
      'https://mc-dev-5.herokuapp.com/jsonapi/v1/favorite',
      config,
      data
    );

    console.log('addedtoFavs', res);
    dispatch({
      type: ADD_TO_FAVS,
      payload: res.data,
    });
    toast.success('Added to Favorites');
  } catch (err) {
    console.log(err);
    toast.error('Unable to add to Favorites');
  }
};
