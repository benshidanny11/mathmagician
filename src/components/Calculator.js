/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import Button from './Button';
import getBttonList from './getButtonList';
import Input from './Input';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const getResult = () => {
    const { next, total, operation } = state;
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
  };

  const clickEvent = (e) => {
    const res = calculate(state, e.target.innerText);
    setState(res);
  };

  return (
    <div className="main">
      <div className="cal-container">
        <Input value={getResult()} />
        <div className="btns-container">
          {' '}
          {getBttonList().map((button, i) => (<Button label={button.label} color={button.color} key={Math.random(1, 1000000)} clickEvent={clickEvent} style={i === 16 ? 'big' : ''} />))}
        </div>
      </div>

    </div>
  );
}
