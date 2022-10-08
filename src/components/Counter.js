import './Counter.css';
import {useState} from 'react';

function Counter({ backColor = 'white', bRadius = 0 }) {
  const [ counter, setCounter ] = useState(0) 

  function onAdd() {
    setCounter(()=> counter+1);
  }
  
  function onDelete() {
    setCounter(()=> counter-1);
  }

  return (
    <div className='item' style={{backgroundColor: backColor, borderRadius: bRadius}}>
        <div>Counter: { counter }</div>
        <button onClick={onAdd}>+</button>
        <button onClick={onDelete}>-</button>
    </div>
  );
}

export default Counter;
