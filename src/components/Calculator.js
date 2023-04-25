import React, { useState } from 'react';
import ButtonGrid from './ButtonGrid';

const Calculator = () => {
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const [output] = useState(0);

  return (
    <div className="calculator-grid">
      <div className="output">{output}</div>
      <ButtonGrid buttons={buttons} />
    </div>
  );
};

export default Calculator;
