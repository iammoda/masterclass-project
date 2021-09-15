import axios from 'axios';
import { GET_ALL_COURSES, ADD_TO_FAVS, DEL_FROM_FAVS } from './actionTypes';
import { ToastContainer, toast } from 'react-toastify';

//remove from favs if time

//GET request to get all courses
//potentially change to be able to take any email in (auth)
export const getAllCourses = (userEmail) => async (dispatch) => {
  userEmail = 'gounder.mo@gmail.com';
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.get(
      `https://mc-dev-5.herokuapp.com/jsonapi/v1/courses?email=${userEmail}`,
      config
    );

    console.log(res.data);

    dispatch({
      type: GET_ALL_COURSES,
      payload: res.data,
    });
  } catch (err) {
    toast.error('Unable to get Courses');
  }
};

export const addToFavs = (email, courseId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      `https://mc-dev-5.herokuapp.com/jsonapi/v1/favorite?email=${email}&course_id=${courseId}`,
      config
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
