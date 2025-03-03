import React, { useState } from 'react';
import './App.css';

/**
 * Syntax to define function:
 * (a: number) => {
 *    setButton(button +1)
 * }
 * 
 * function increment(a: number) { 
 *  setButton(button + a)
 * 
 * }
 * @returns 
 */

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number|null>(null);
  const handleNum1Change = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNum1(Number(e.target.value));
  };
  
  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(Number(e.target.value));
  };
  const addition = () => {
    setResult(num1 + num2);
  };
  
  const subtraction = () => {
    setResult(num1 - num2);
  };
  const multiplication = () => setResult(num1 * num2);
  const division = () => {
    if (num2 !== 0) setResult(num1 / num2);
    else alert("Cannot divide by zero");
  };
  const modulus = () => setResult(num1 % num2);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>React Calculator</h1>

    <input type="number" value={num1} onChange={handleNum1Change} />
    <input type="number" value={num2} onChange={handleNum2Change} />

    <div style={{ margin: "10px" }}>
      <button onClick={addition}>+</button>
      <button onClick={subtraction}>-</button>
      <button onClick={multiplication}>×</button>
      <button onClick={division}>÷</button>
      <button onClick={modulus}>%</button>
    </div>

    <h2>Result: {result !== null ? result : "Enter numbers"}</h2>
  </div>
  )
}


export default App;
