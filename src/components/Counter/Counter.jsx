import { useState } from "react";
import css from './Counter.module.css';

const Counter = () => {
    const [counter, setCounter] = useState(0)
  
function increment() {
    setCounter(counter +1) 
}
function decrement() {
    setCounter(counter -1)
}

    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={increment} >ADD</button>
        <button onClick={decrement} >DEL</button>
      </div>
    );
  };
  export default Counter;