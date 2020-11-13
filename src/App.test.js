import React from 'react'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Welcome text', () => {
  render(<App />);
  const welcomeMessage = screen.getByText('Welcome')
  expect(welcomeMessage).toBeInTheDocument()
});
