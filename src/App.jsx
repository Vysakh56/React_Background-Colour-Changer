import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const colors = ['Orange', 'Green', 'Blue', 'Yellow', 'Pink'];

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>
      <div className="button-container">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color, border: 'none', padding: '15px', margin: '10px', color: '#fff', cursor: 'pointer' }}
            onClick={() => setBgColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
