import React, { useState } from 'react';

const FontSizeAdjuster = ({ defaultSize }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div>
      <p style={{ fontSize: `${fontSize}px`, margin: '10px 0' }}>
        this is a text sample
      </p>
      <button onClick={increaseFontSize}>Increase</button>
      <button onClick={decreaseFontSize}>Decrease</button>
    </div>
  );
};

export default FontSizeAdjuster;
