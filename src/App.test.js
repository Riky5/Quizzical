import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title of the app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Quizzical/i);
  expect(titleElement).toBeDefined();
});
