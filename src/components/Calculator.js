import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const onClickHandler = (e) => {
    setState((prevState) => calculate(prevState, e.target.textContent));
  };

  const { total, operation, next } = state;
  return (
    <div className="calContainer flex-container">
      <h2 className="cal-title">Let us do some math!</h2>
      <div className="cal-frame">
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand" />
            <div className="current-operand">
              {next || operation || total || 0}
            </div>
          </div>

          <button onClick={onClickHandler} type="button" className="btn">
            AC
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            +/-
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            %
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="btn function-btn"
          >
            ÷
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            7
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            8
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            9
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="btn function-btn"
          >
            x
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            4
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            5
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            6
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="btn function-btn"
          >
            -
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            1
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            2
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            3
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="btn function-btn"
          >
            +
          </button>
          <button onClick={onClickHandler} type="button" className="span-two">
            0
          </button>
          <button onClick={onClickHandler} type="button" className="btn">
            .
          </button>
          <button
            onClick={onClickHandler}
            type="button"
            className="btn function-btn"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
