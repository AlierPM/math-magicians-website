import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../App';

test('Unit Test Check For App Component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome To Our Page/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Unit Test For  App component', () => {
  it('App Component renders correctly', () => {
    const treeDom = TestRenderer.create(<App />).toJSON();
    expect(treeDom).toMatchSnapshot();
  });
});
