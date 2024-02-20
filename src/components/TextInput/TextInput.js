// src/components/TextInput/TextInput.js
import React from 'react';
import './TextInput.css';

const TextInput = ({ placeholder, onChange }) => {
  return <input type="text" className="my-text-input" placeholder={placeholder} onChange={onChange} />;
};

export default TextInput;
