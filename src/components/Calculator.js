/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from './Button';
import getBttonList from './getButtonList';
import Input from './Input';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,

    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  getResult() {
    const { next, total, operation } = this.state;
    const op = operation === '%' ? 'mod' : operation;
    let result = '';
    if (total) {
      result = `${total} ${op || ''} ${next || ''}`;
      return result;
    }
    if (next) {
      result = `${next} ${op || ''}`;
      return result;
    }
    return '0';
  }

  clickEvent(e) {
    const res = calculate(this.state, e.target.innerText);
    this.setState(res);
  }

  render() {
    return (
      <div className="main">
        <Input value={this.getResult()} />
        <div className="btns-container">
          {' '}
          {getBttonList().map((button, i) => (<Button label={button.label} color={button.color} key={Math.random(1, 1000000)} clickEvent={this.clickEvent} style={i === 16 ? 'big' : ''} />))}
        </div>

      </div>
    );
  }
}
