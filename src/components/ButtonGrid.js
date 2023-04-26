import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';

const ButtonGrid = () => {
  const [calc, setCalc] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  useEffect(() => {
    const { total, next } = calc;
    const output = document.querySelector('.output');
    if (next !== null) {
      output.value = next;
    } else if (total !== null) {
      output.value = total;
    }
  }, [calc]);

  const handleClick = (event) => {
    if (event.target.textContent === 'AC') {
      const output = document.querySelector('.output');
      output.value = 0;
    }
    const result = calculate(calc, event.target.textContent);
    setCalc({ ...calc, ...result });
  };

  return (
    <div className="calculator-grid">
      <input className="output" placeholder="0" dir="rtl" />
      <button type="button" onClick={handleClick}>AC</button>
      <button type="button" onClick={handleClick}>+/-</button>
      <button type="button" onClick={handleClick}>%</button>
      <button type="button" className="orange" onClick={handleClick}>÷</button>
      <button type="button" onClick={handleClick}>7</button>
      <button type="button" onClick={handleClick}>8</button>
      <button type="button" onClick={handleClick}>9</button>
      <button type="button" className="orange" onClick={handleClick}>x</button>
      <button type="button" onClick={handleClick}>4</button>
      <button type="button" onClick={handleClick}>5</button>
      <button type="button" onClick={handleClick}>6</button>
      <button type="button" className="orange" onClick={handleClick}>-</button>
      <button type="button" onClick={handleClick}>1</button>
      <button type="button" onClick={handleClick}>2</button>
      <button type="button" onClick={handleClick}>3</button>
      <button type="button" className="orange" onClick={handleClick}>+</button>
      <button type="button" className="two-spaces" onClick={handleClick}>0</button>
      <button type="button" onClick={handleClick}>.</button>
      <button type="button" className="orange" onClick={handleClick}>=</button>
    </div>
  );
};

export default ButtonGrid;
