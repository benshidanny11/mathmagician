/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from './Button';
import getBttonList from './getButtonList';
import Input from './Input';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    const { value } = this.state;
    this.setState({
      value: value !== '0' ? value + e.target.innerText : e.target.innerText,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="main">
        <Input value={value} />
        <div className="btns-container">
          {' '}
          {getBttonList().map((button, i) => (<Button label={button.label} color={button.color} key={Math.random(1, 1000000)} clickEvent={this.clickEvent} style={i === 16 ? 'big' : ''} />))}
        </div>

      </div>
    );
  }
}
