//Component for individual course item
// can include modal for more information
// can include go to another page to watch video through a button and separate component

//include favorite action button through either heart icon or active button

//can put in col later, play around with css after

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const CourseItemComponent = ({
  course: { title, instructorName, instructor_image_url, favorite, id },
}) => {
  console.log(instructor_image_url);
  return (
    <div>
      <Card>
        <CardImg top width='50%' src={instructor_image_url} />
        <CardBody>
          <CardTitle tag='h5'>{instructorName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            Teaches the {title}
          </CardSubtitle>

          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

CourseItemComponent.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseItemComponent;
