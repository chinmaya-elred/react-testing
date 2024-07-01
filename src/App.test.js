import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


// beforeAll(() =>{
//   console.log('beforeall testcases console')
// })

// beforeEach(() =>{
//   console.log('beforeeach testcases console')
// })


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
  // const checkInput = screen.getByRole('textbox')
  // const checkInputPlaceholder = screen.getByPlaceholderText('Enter your username')

  // expect(checkInput).toBeInTheDocument()
  // expect(checkInputPlaceholder).toBeInTheDocument();
  // expect(checkInput).toHaveAttribute('name', 'username')
  // expect(checkInput).toHaveAttribute('id', 'userId')
  // expect(checkInput).toHaveAttribute('type', 'text')
  // expect(checkInput).toHaveAttribute('value', 'chinmaya')

});

describe('UI related testcases', () =>{
  test('testing input field in App', () => {
    // render(<App />);
    // const checkInput = screen.getByRole('textbox')
    // const checkInputPlaceholder = screen.getByPlaceholderText('Enter your username')
  
    // expect(checkInput).toBeInTheDocument()
    // expect(checkInputPlaceholder).toBeInTheDocument();
    // expect(checkInput).toHaveAttribute('name', 'username')
    // expect(checkInput).toHaveAttribute('id', 'userId')
    // expect(checkInput).toHaveAttribute('type', 'text')
    // expect(checkInput).toHaveAttribute('value', 'chinmaya')
  
  });
})

test('test onchange functions in input', () =>{
  render(<App />);
  const getValue = screen.getByRole('textbox');
  fireEvent.change(getValue, {target: {value: 'a'}})
  expect(getValue.value).toBe('a')
})

test('test onclick functions in button', () =>{
  render(<App />);
  const button = screen.getByRole('button');
  fireEvent.click(button)
  expect(screen.getByText('updated data')).toBeInTheDocument()
})

// afterAll(() =>{
//   console.log('afterAll testcases console')
// })

// afterEach(() =>{
//   console.log('afterAll testcases console')
// })

test('match snapshot', () =>{
  const {newConainer} = render(<App />);
  expect(newConainer).toMatchSnapshot()
})