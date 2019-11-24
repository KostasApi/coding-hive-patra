import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Patra'
    };
    console.log('ClassBased constructor');
  }

  componentDidMount() {
    console.log('ClassBased componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ClassBased componentDidUpdate');
  }

  onButtonClick = () => {
    this.setState(() => {
      return {
        city: 'Athens'
      };
    });
  };

  render() {
    console.log('ClassBased render');

    const { country } = this.props;
    const { city } = this.state;

    return (
      <>
        <div>Class Component</div>
        <p>{country}</p>
        <p>{city}</p>
        <button onClick={this.onButtonClick}>Change City</button>
      </>
    );
  }
}

ClassBased.defaultPros = {
  country: ''
};

ClassBased.propTypes = {
  country: PropTypes.string
};

export default ClassBased;
