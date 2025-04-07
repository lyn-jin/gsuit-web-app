import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/')
        .then(res => res.text())
        .then(data => setMessage(data));
  }, []);

  return (
      <div>
        <h1>G-Suit Web App</h1>
        <p>{message}</p>
      </div>
  );
}

export default App;
