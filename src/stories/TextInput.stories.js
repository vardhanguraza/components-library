// src/stories/TextInput.stories.js
import React from 'react';
import TextInput from '../components/TextInput/TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
};

export const Default = () => <TextInput placeholder="Enter text" />;
export const WithValue = () => <TextInput placeholder="Enter text" onChange={(e) => console.log(e.target.value)} />;
