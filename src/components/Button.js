/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Button extends Component {
  render() {
    Button.propTypes = {
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      clickEvent: PropTypes.func.isRequired,
      style: PropTypes.string.isRequired,
    };
    const {
      label, color, clickEvent, style,
    } = this.props;
    return (
      <button type="button" className={classNames(color, style)} onClick={clickEvent}>{label}</button>
    );
  }
}
