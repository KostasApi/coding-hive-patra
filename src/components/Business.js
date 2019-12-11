import React from 'react';
import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchBusinessDetails } from '../actions/businessActions';

const { Meta } = Card;

const Business = ({ details, getBusinessDetails }) => {
  return (
    <Link to={`/business-details/${details.id}`}>
      <Card
        hoverable
        style={{ width: '100%' }}
        cover={
          <img style={{ height: 400 }} alt="example" src={details.image_url} />
        }
        onClick={() => getBusinessDetails(details.id)}
      >
        <Meta title={details.name} style={{ marginBottom: 5 }} />
        <div>{`Address: ${details.location.address1}`}</div>
        <div>{`Phone: ${details.display_phone}`}</div>
        <Rate allowHalf value={details.rating} />
        <div>{`Reviews: ${details.review_count}`}</div>
      </Card>
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  getBusinessDetails: id => dispatch(fetchBusinessDetails(id))
});

export default connect(null, mapDispatchToProps)(Business);
