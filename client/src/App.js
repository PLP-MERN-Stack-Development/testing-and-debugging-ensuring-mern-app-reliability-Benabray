import React, { useState } from 'react';
import Button from './components/Button';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Hello, ${e.target.name.value}!`);
  };

  // Simulate an error for testing
  const triggerError = () => {
    throw new Error('This is a test error from the button!');
  };

  return (
    <ErrorBoundary>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Test Application</h1>
        
        <section>
          <h2>Counter: {count}</h2>
          <Button onClick={handleIncrement}>Increment</Button>
          <Button onClick={triggerError} style={{ marginLeft: '10px', backgroundColor: 'red' }}>
            Trigger Test Error
          </Button>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Greeting Form</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              style={{ padding: '8px', marginRight: '10px' }}
            />
            <Button type="submit">Submit</Button>
          </form>
          {message && <p style={{ color: 'green' }}>{message}</p>}
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Navigation</h2>
          <nav>
            <a href="#home" style={{ marginRight: '10px' }}>Home</a>
            <a href="#about" style={{ marginRight: '10px' }}>About</a>
            <a href="#contact">Contact</a>
          </nav>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default App;
