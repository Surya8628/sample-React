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
       increment
      </button>
      {button}
    </div>
  );
}
function increment(count:number, setCount:any) {
setCount(count+1);
}

export default App;
