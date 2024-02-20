// src/stories/Button.stories.js
import React from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button label="Primary Button" />;
export const Secondary = () => <Button label="Secondary Button" />;
export const Clickable = () => <Button label="Click me" onClick={() => alert('Button clicked!')} />;
