/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    Input.propTypes = {
      value: PropTypes.string.isRequired,
    };

    const { value } = this.props;
    return (
      <div className="inputcontainer">
        <span>{value}</span>
      </div>
    );
  }
}
