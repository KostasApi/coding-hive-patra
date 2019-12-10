import React, { Component } from 'react';
import { Row, Col, Input, Select, Button, Alert } from 'antd';

import service from '../services/BusinessService';
import Business from './Business';
import loadingImage from '../assets/loading.gif';

const { Option } = Select;

class Businesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      loading: false,
      error: null,
      term: '',
      location: '',
      limit: ''
    };
  }

  onBusinessChange = e => {
    const term = e.target.value;
    this.setState(() => ({
      term
    }));
  };

  onLocationChange = location => {
    this.setState(() => ({
      location
    }));
  };

  onLimitChange = limit => {
    this.setState(() => ({
      limit
    }));
  };

  onSearchClick = async () => {
    this.setLoading();
    const { term, location, limit } = this.state;
    const data = await service.getBusinesses({
      term,
      location,
      limit
    });

    this.setState(() => ({
      businesses: data.businesses ? data.businesses : [],
      loading: false,
      error: data.isAxiosError ? data.message : '',
      term: '',
      location: '',
      limit: ''
    }));
  };

  setLoading = () => {
    this.setState(state => ({
      loading: !state.loading
    }));
  };

  render() {
    const { term, location, limit, businesses, loading, error } = this.state;

    return (
      <div style={{ width: '95%', height: '100vh', margin: '0 auto' }}>
        <Row style={{ padding: 20 }} gutter={8} type="flex" justify="center">
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={4}>
            <Input
              size="large"
              placeholder="Search term"
              onChange={this.onBusinessChange}
              value={term}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={4}>
            <Select
              size="large"
              placeholder="Location"
              style={{ width: '100%' }}
              onChange={this.onLocationChange}
              value={location}
            >
              <Option value="">Select Location</Option>
              <Option value="New York">New York</Option>
              <Option value="Los Angeles">Los Angeles</Option>
              <Option value="Chicago">Chicago</Option>
              <Option value="	Houston"> Houston</Option>
              <Option value="Phoenix">Phoenix</Option>
            </Select>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={4}>
            <Select
              size="large"
              placeholder="Limit"
              style={{ width: '100%' }}
              onChange={this.onLimitChange}
              value={limit}
            >
              <Option value="">Select Limit</Option>
              <Option value="10">10</Option>
              <Option value="20">20</Option>
              <Option value="30">30</Option>
              <Option value="40">40</Option>
              <Option value="50">50</Option>
            </Select>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={2}>
            <Button
              size="large"
              type="primary"
              onClick={this.onSearchClick}
              disabled={!(term && location && limit)}
            >
              Search
            </Button>
          </Col>
        </Row>
        {loading ? (
          <div
            style={{
              height: '90%',
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
            {error ? (
              <Alert description={error} type="error" closable />
            ) : (
              <Row gutter={[24, 24]}>
                {businesses.map(business => (
                  <Col
                    key={business.id}
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={8}
                    xxl={6}
                  >
                    <Business details={business} setLoading={this.setLoading} />
                  </Col>
                ))}
              </Row>
            )}
          </>
        )}
      </div>
    );
  }
}

export default Businesses;
