/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    Input.propTypes = {
      value: PropTypes.number.isRequired,
    };

    const { value } = this.props;
    return (
      <div className="inputcontainer">
        <input type="text" readOnly value={value} />
      </div>
    );
  }
}
