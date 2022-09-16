import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

/* eslint-disable react/destructuring-assignment */
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (e) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, e.target.textContent));
  };

  render() {
    return (
      <div className="calContainer">
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand" />
            <div className="current-operand">
              {this.state.total}
              {this.state.operation}
              {this.state.next}
            </div>
          </div>

          <button onClick={this.onClickHandler} type="button" className="btn">
            AC
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            +/-
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            %
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="btn function-btn"
          >
            ÷
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            7
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            8
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            9
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="btn function-btn"
          >
            x
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            4
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            5
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            6
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="btn function-btn"
          >
            -
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            1
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            2
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            3
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="btn function-btn"
          >
            +
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="span-two"
          >
            0
          </button>
          <button onClick={this.onClickHandler} type="button" className="btn">
            .
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="btn function-btn"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
