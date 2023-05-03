import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  test('should render Calculator component correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  test('Should render the value 1 when the 1 button is clicked', () => {
    const { getByText } = render(<Calculator />);
    const button = getByText('1');
    fireEvent.click(button);
    expect(getByText('1')).toBeInTheDocument();
  });
});
