import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonGrid from '../components/ButtonGrid';

describe('ButtonGrid component', () => {
  test('Calculator buttons work as expected', () => {
    const { getByPlaceholderText, getByText } = render(<ButtonGrid />);
    const output = getByPlaceholderText('0');

    fireEvent.click(getByText('7'));
    expect(output.value).toBe('7');

    fireEvent.click(getByText('x'));
    expect(output.value).toBe('7');

    fireEvent.click(getByText('5'));
    expect(output.value).toBe('5');

    fireEvent.click(getByText('='));
    expect(output.value).toBe('35');
  });

  it('should render correctly', () => {
    const { asFragment } = render(<ButtonGrid />);
    expect(asFragment()).toMatchSnapshot();
  });
});
