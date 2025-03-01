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
  const [button, setButton] = useState(0);
 
  return (
    <div className="App">
      <button
      onClick={()=>{
        increment(button,setButton)
      }}>
       Increment
      </button>
      <button
      onClick={()=>resetState(setButton)}>
        Reset
      </button>
      {button}
    </div>
  );
}
function increment(count:number, setCount: (a: number) => void ) {
setCount(count+1);
}
function resetState(setDefault: (a: number) => void ) {
setDefault(0);
}

export default App;
