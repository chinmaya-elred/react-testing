import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = "AI generated image"
  const linkElement = screen.getByText(/My first React Testing APp/i);
  const linkElement2 = screen.getByTitle(title);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});

test('testing input field in App', () => {
  render(<App />);
  const checkInput = screen.getByRole('textbox')
  const checkInputPlaceholder = screen.getByPlaceholderText('Enter your username')

  expect(checkInput).toBeInTheDocument()
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute('name', 'username')
  expect(checkInput).toHaveAttribute('id', 'userId')
  expect(checkInput).toHaveAttribute('type', 'text')
  expect(checkInput).toHaveAttribute('value', 'chinmaya')

});