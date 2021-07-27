import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const incrementCount = () => {
    setCount(count + 1);
    setError('');
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setError("The counter can't go below zero");
    }
  };

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter is currently&nbsp;
        <span data-test='counter'>{count}</span>
      </h1>
      <h2 className='error' data-test='counter-error'>
        {error}
      </h2>
      <button data-test='increment-button' onClick={() => incrementCount()}>
        Increment counter
      </button>
      <button data-test='decrement-button' onClick={() => decrementCount()}>
        Decrement counter
      </button>
    </div>
  );
}

export default App;
