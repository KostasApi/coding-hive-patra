import React from 'react';
import { Card, Rate } from 'antd';
import { useHistory } from 'react-router-dom';

import service from '../services/BusinessService';

const { Meta } = Card;

const Business = ({ details, setLoading, setError }) => {
  let history = useHistory();

  const getBusinessDetails = async () => {
    setLoading();
    const data = await service.getBusinessDetails(details.id);
    setLoading();
    if (data.isAxiosError) {
      setError(data.message);
    } else {
      history.push(`business-details/${details.id}`, data);
    }
  };

  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      cover={
        <img style={{ height: 400 }} alt="example" src={details.image_url} />
      }
      onClick={getBusinessDetails}
    >
      <Meta title={details.name} style={{ marginBottom: 5 }} />
      <div>{`Address: ${details.location.address1}`}</div>
      <div>{`Phone: ${details.display_phone}`}</div>
      <Rate allowHalf value={details.rating} />
      <div>{`Reviews: ${details.review_count}`}</div>
    </Card>
  );
};

export default Business;
