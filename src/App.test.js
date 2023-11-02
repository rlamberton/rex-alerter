import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bittrex Alert List', () => {
  const { getByTestId } = render(<App />);
  const alertListElement = getByTestId('alert-list');
  const headerElement = screen.getByText(/Bittrex Alerter/i);
  expect(headerElement).toBeInTheDocument();
  expect(alertListElement).toBeInTheDocument();
});
