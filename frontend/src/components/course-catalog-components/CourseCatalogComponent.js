// want to display all courses as course item
// uses action getCourses to get courses and maps each course to item component

// implement pagination later
// potentially have navbar that allows to filter

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

import CourseItemComponent from './CourseItemComponent';

import { getAllCourses } from '../../actions/coursesActions';

const CourseCatalogComponent = ({
  getAllCourses,
  coursesInfoFromState: { courses },
  authInfoFromState: { userEmail },
}) => {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(-1);

  useEffect(() => {
    getAllCourses(userEmail);
  }, [getAllCourses]);

  console.log(courses);

  return (
    <Fragment>
      <Button onClick={() => setShowFavoritesOnly(showFavoritesOnly * -1)}>
        {showFavoritesOnly === 1 ? 'Show all Courses' : 'Show Favorites'}
      </Button>

      {showFavoritesOnly === 1 ? (
        <div>
          {courses &&
            courses
              .filter((course) => course.favorite === true)
              .map((course) => (
                <CourseItemComponent key={course.id} course={course} />
              ))}
        </div>
      ) : (
        <div>
          {courses &&
            courses.map((course) => (
              <CourseItemComponent key={course.id} course={course} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

CourseCatalogComponent.propTypes = {
  getAllCourses: PropTypes.func.isRequired,
  coursesInfoFromState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  coursesInfoFromState: state.coursesReducer,
  authInfoFromState: state.authReducer,
});

export default connect(mapStateToProps, { getAllCourses })(
  CourseCatalogComponent
);
