import React from 'react';
import ReactDOM from 'react-dom';
import render from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains nav', () => {
  const container = render(<App />);
  container.getByText(/World/i);
});

test('should have players names', async () => {
  const {findByText} = await render(<App />)
  findByText(/[Renard]/i)
})

test('contains title', () => {
  const container = render(<App />);
  container.getByTestId(/title/i)
});