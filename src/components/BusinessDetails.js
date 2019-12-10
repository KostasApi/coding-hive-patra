import React from 'react';
import { Carousel, Rate } from 'antd';

const BusinessDetails = props => {
  const businessDetails = props.location.state;
  console.log(businessDetails);
  return (
    <div style={{ width: '50%', height: '100vh', margin: '0 auto' }}>
      <h1>{businessDetails.name}</h1>
      <Carousel autoplay>
        {businessDetails.photos.map((photo, index) => (
          <div key={photo}>
            <img
              style={{ width: '100%', height: 500 }}
              alt={`foto ${index}`}
              src={photo}
            />
          </div>
        ))}
      </Carousel>
      <div>
        <h3>{`Address: ${businessDetails.location.address1}, ${businessDetails.location.city}`}</h3>
        <h3>{`Phone: ${businessDetails.display_phone}`}</h3>
        <h3>{`Price: ${businessDetails.price}`}</h3>
        <Rate allowHalf value={businessDetails.rating} />
        <h3>{`Reviews: ${businessDetails.review_count}`}</h3>
      </div>
    </div>
  );
};

export default BusinessDetails;
