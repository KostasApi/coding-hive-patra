import React, { Component } from 'react';
import { Row, Col, Input, Select, Button } from 'antd';

import service from '../services/BusinessService';

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
    const { term, location, limit } = this.state;
    console.log('term, location, limit', term, location, limit);
    const businesses = await service.getBusinesses({
      term,
      location,
      limit
    });
  };

  render() {
    console.log('this.state', this.state);
    const { term, location, limit } = this.state;

    return (
      <>
        <Row gutter={8} type="flex" justify="center">
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={4}>
            <Input
              size="large"
              placeholder="Search term"
              onChange={this.onBusinessChange}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={4}>
            <Select
              size="large"
              placeholder="Location"
              style={{ width: '100%' }}
              onChange={this.onLocationChange}
            >
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
            >
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
      </>
    );
  }
}

export default Businesses;
