import React from 'react';
import { Carousel, Rate, Alert } from 'antd';
import { connect } from 'react-redux';

import loadingImage from '../assets/loading.gif';

const BusinessDetails = ({
  businessDetails,
  loading,
  businessDetailsError
}) => {
  return (
    <>
      {loading ? (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img
            style={{ height: 300, margin: 'auto' }}
            alt="Loading..."
            src={loadingImage}
          />
        </div>
      ) : (
        <>
          {businessDetailsError ? (
            <Alert
              style={{ margin: 10 }}
              description={businessDetailsError}
              type="error"
              closable
            />
          ) : (
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
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    businessDetails: state.business.businessDetails,
    loading: state.business.loading,
    businessDetailsError: state.business.businessDetailsError
  };
};

export default connect(mapStateToProps)(BusinessDetails);
