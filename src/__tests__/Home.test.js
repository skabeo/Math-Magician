import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

describe('Home component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<Home />);
    expect(screen.getByText(/And that's not all/i)).toBeInTheDocument();
  });
});
