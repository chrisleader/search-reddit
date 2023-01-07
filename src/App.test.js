import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home app', () => {
  render(<App />);
  const text = screen.getByText(/testing/i);
  expect(text).toBeInTheDocument();
});
