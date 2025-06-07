// src/components/FrostpunkButton.jsx
import React, { useState } from 'react';

const FrostpunkButton = ({ text, disabled = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={`frostpunk-btn ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="btn-lines">
        <div className="line line-top"></div>
        <div className="line line-bottom"></div>
      </div>
      <span className="btn-text">{text}</span>
      {isHovered && !disabled && <div className="btn-glow"></div>}
    </button>
  );
};

export default FrostpunkButton;