import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bittrex Alert List', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bittrex Alert List/i);
  expect(linkElement).toBeInTheDocument();
});
