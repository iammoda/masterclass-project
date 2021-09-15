// want to display all courses as course item
// uses action getCourses to get courses and maps each course to item component

// implement pagination later
// potentially have navbar that allows to filter

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button, Row } from 'reactstrap';

import CourseItemComponent from './CourseItemComponent';

import { getAllCourses } from '../../actions/coursesActions';

const CourseCatalogComponent = ({
  getAllCourses,
  coursesInfoFromState: { courses },
  authInfoFromState: { userEmail },
}) => {
  // const [pageNum, setPageNum] = useState(1);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(-1);

  useEffect(() => {
    getAllCourses(userEmail);
  }, [getAllCourses]);

  console.log(courses);

  return (
    <Fragment>
      <Button
        className='mt-4 mb-4'
        color='primary'
        onClick={() => setShowFavoritesOnly(showFavoritesOnly * -1)}
      >
        {showFavoritesOnly === 1 ? 'Show all Courses' : 'Show Favorites'}
      </Button>

      {showFavoritesOnly === 1 ? (
        <Row>
          {courses &&
            courses
              .filter((course) => course.favorite === true)
              .map((course) => (
                <CourseItemComponent key={course.id} course={course} />
              ))}
        </Row>
      ) : (
        <Row>
          {courses &&
            courses.map((course) => (
              <CourseItemComponent key={course.id} course={course} />
            ))}
        </Row>
      )}
      {/* <Button onClick={() => setPageNum(pageNum - 1)}>Previous Page</Button>
      <Button onClick={() => setPageNum(pageNum + 1)}>Next Page</Button> */}
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
