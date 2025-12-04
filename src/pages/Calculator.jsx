import { useState, useCallback } from 'react';
import '../styles/calcu.css';

const buttons = [
  { label: 'C', action: 'clear' },
  { label: '←', action: 'backspace' },
  { label: '÷', action: '/' },
  { label: '×', action: '*' },
  { label: '7', number: '7' },
  { label: '8', number: '8' },
  { label: '9', number: '9' },
  { label: '−', action: '-' },
  { label: '4', number: '4' },
  { label: '5', number: '5' },
  { label: '6', number: '6' },
  { label: '+', action: '+' },
  { label: '1', number: '1' },
  { label: '2', number: '2' },
  { label: '3', number: '3' },
  { label: '=', action: '=', css: 'equal' },
  { label: '0', number: '0', css: 'zero' },
  { label: '.', number: '.' },
];

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('');

  const updateDisplay = useCallback((text) => {
    setCurrentInput(text);
  }, []);

  const addOperator = useCallback(
    (operator) => {
      if (!currentInput) return;
      const lastChar = currentInput.slice(-1);
      const expression = '+-*/'.includes(lastChar) ? currentInput.slice(0, -1) : currentInput;
      updateDisplay(`${expression}${operator}`);
    },
    [currentInput, updateDisplay],
  );

  const calculateResult = useCallback(() => {
    if (!currentInput) return;
    let expression = currentInput;
    if ('+-*/'.includes(expression.slice(-1))) {
      expression = expression.slice(0, -1);
    }
    try {
      // eslint-disable-next-line no-new-func
      const result = Function(`return ${expression}`)();
      updateDisplay(String(result));
    } catch {
      updateDisplay('Error');
      setTimeout(() => updateDisplay(''), 800);
    }
  }, [currentInput, updateDisplay]);

  const handleAction = useCallback(
    (action) => {
      switch (action) {
        case 'clear':
          updateDisplay('');
          return;
        case 'backspace':
          updateDisplay(currentInput.slice(0, -1));
          return;
        case '=':
          calculateResult();
          return;
        case '+':
        case '-':
        case '*':
        case '/':
          addOperator(action);
          return;
        default:
      }
    },
    [addOperator, calculateResult, currentInput, updateDisplay],
  );

  const handleButtonPress = (button) => {
    if (button.number !== undefined) {
      if (button.number === '.' && currentInput.split(/[\+\-\*\/]/).slice(-1)[0].includes('.')) {
        return;
      }
      updateDisplay(currentInput + button.number);
    } else if (button.action) {
      handleAction(button.action);
    }
  };

  return (
    <section className="calculator-page">
      <div className="calculator-container">
        <h2>Simple Calculator</h2>
        <input id="display" disabled value={currentInput || '0'} />
        <div className="buttons">
          {buttons.map((button) => (
            <button
              type="button"
              key={button.label}
              className={`btn ${button.css ?? ''}`}
              onClick={() => handleButtonPress(button)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;


