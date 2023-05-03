import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  test('should render Calculator component correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  test('clicking the 1 button', () => {
    const { getByText } = render(<Calculator />);
    const button = getByText('1');
    fireEvent.click(button);
    expect(getByText('1')).toBeInTheDocument();
  });
});
