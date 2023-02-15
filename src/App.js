import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  let textColor = '';

  if (count < 5) {
    textColor = 'green';
  } else if (count < 10) {
    textColor = 'blue';
  } else {
    textColor = 'red';
  }

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer'
  };

  const counterStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={counterStyle}>
          Count: <span style={{ color: textColor }}>{count}</span>
        </h1>
        <button style={buttonStyle} onClick={handleIncrement}>
          Increment
        </button>
        <button style={buttonStyle} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;