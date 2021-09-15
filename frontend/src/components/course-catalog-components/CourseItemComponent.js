//Component for individual course item
// can include modal for more information
// can include go to another page to watch video through a button and separate component

//include favorite action button through either heart icon or active button

//can put in col later, play around with css after

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { addToFavs } from '../../actions/coursesActions';
import { connect } from 'react-redux';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const CourseItemComponent = ({
  addToFavs,
  course: { title, instructorName, instructor_image_url, id, favorite },
  authInfoFromState: { userEmail },
}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <div>
            <img top width='5%' src={instructor_image_url} />
          </div>
          <CardTitle tag='h5'>{instructorName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            {title}
          </CardSubtitle>
          <Button onClick={() => addToFavs(userEmail, id)} color='success'>
            Add To Favs
          </Button>
          {favorite === true ? <div> Item Favorited</div> : null}
        </CardBody>
      </Card>
    </div>
  );
};

CourseItemComponent.propTypes = {
  course: PropTypes.object.isRequired,
  addToFavs: PropTypes.func.isRequired,
  authInfoFromState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authInfoFromState: state.authReducer,
});

export default connect(mapStateToProps, { addToFavs })(CourseItemComponent);
