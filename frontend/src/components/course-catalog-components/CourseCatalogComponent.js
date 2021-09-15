// want to display all courses as course item
// uses action getCourses to get courses and maps each course to item component

// implement pagination later
// potentially have navbar that allows to filter

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import CourseItemComponent from './CourseItemComponent';

import { getAllCourses } from '../../actions/coursesActions';

const CourseCatalogComponent = ({
  getAllCourses,
  coursesInfoFromState: { courses },
}) => {
  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  console.log(courses);

  return (
    <Fragment>
      <div>
        {courses &&
          courses.map((course) => (
            <CourseItemComponent key={course.id} course={course} />
          ))}
      </div>
    </Fragment>
  );
};

CourseCatalogComponent.propTypes = {
  getAllCourses: PropTypes.func.isRequired,
  coursesInfoFromState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  coursesInfoFromState: state.coursesReducer,
});

export default connect(mapStateToProps, { getAllCourses })(
  CourseCatalogComponent
);
